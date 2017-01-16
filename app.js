$(document).ready(function(){
  // green block
  var g = {
    key:1,
    audioSrc:'audio/simonSound1.mp3',
    changeSound: changeSound
  }
  // red block
  var r = {
    key:2,
    audioSrc:'audio/simonSound2.mp3',
    changeSound: changeSound
  }
 // yellow block
  var y = {
    key:3,
    audioSrc:'audio/simonSound3.mp3',
    changeSound: changeSound
  }
 // blue block
  var b = {
    key:4,
    audioSrc:'audio/simonSound4.mp3',
    changeSound: changeSound
  }

  var game = {
    pattern: [g],
    keyarr: [g.key],
    step: 0,
  }
  var score = [];

  $('#start').click(function(){
    // step 1: when start btn is clicked, fire up first block
    activeBlock(game.pattern[game.step], 1000);

    // step 2: user click on the block
    $('.simon-block').click(function(){
      var k = parseInt($(this).attr('data-key'));
      score.push(k);
      checkStep();
    });
  });


  function activeBlock (obj, timeOut){
    setTimeout(function() {
      changeColor(obj.key);
      obj.changeSound();
    }, timeOut);
    //console.log("pressing " + step);
  }

  function changeColor (num){
    $('[data-key="'+ num + '"]').css('opacity','0.6');
    setTimeout(function(){
      $('[data-key="'+ num  +'"]').css('opacity','1.0');
    }, 2000)
  }

  function changeSound () {
    var audio = new Audio();
    audio.addEventListener("load", function(){
      audio.play();
    }, true);
    audio.src = this.audioSrc;
    audio.autoplay = true;
  }

  function runGame (arr) {
    // activeBlock(game.pattern[0], 1000);
    // activeBlock(game.pattern[game.step], 3000);
    var i = 0;
    var time = 1000;
    while(i < arr.length){
      activeBlock(arr[i], time);
      i += 1;
      time += 2000;
    }
  }

  function checkStep (){
    // if user input === pattern. move to next step
    if(JSON.stringify(score) == JSON.stringify(game.keyarr)){
      game.step += 1;
      game.pattern.push(r);
      game.keyarr.push(r.key);
      console.log(game);
      runGame(game.pattern);
      $('#score').html(game.step);

    }
    else{
      $('#score').html("You lose");
    }
  }


});

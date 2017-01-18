$(document).ready(function(){
  // green block
  var g = {
    key:1,
    audioSrc:'audio/simonSound1.mp3',
    changeSound: changeSound
  };
  // red block
  var r = {
    key:2,
    audioSrc:'audio/simonSound2.mp3',
    changeSound: changeSound
  };
 // yellow block
  var y = {
    key:3,
    audioSrc:'audio/simonSound3.mp3',
    changeSound: changeSound
  };
 // blue block
  var b = {
    key:4,
    audioSrc:'audio/simonSound4.mp3',
    changeSound: changeSound
  };

  var game = {
    1:g,
    2:r,
    3:y,
    4:b,
    pattern: [],
    keyarr: [],
    step: 0,
  };

  var score = [];

  $('#start').click(function(){
    // step 1: when start btn is clicked, fire up first block
    game.pattern[0] = randStep();
    game.keyarr[0] = game.pattern[0].key;
    runGame(game.pattern);
  });

  // step 2: user click on the block
  $('.simon-block').click(function(){
      var k = parseInt($(this).attr('data-key'));
      score.push(k);
      console.log(score);
      setTimeout(function() {
        changeColor(k);
        game[k].changeSound();
      }, 0);
      checkStep();
  });

  $("#restart").click(function(){
    clear();
  });

  /** main functions **/
  function activeBlock (obj, timeOut){
    setTimeout(function() {
      changeColor(obj.key);
      obj.changeSound();
    }, timeOut);
  }

  function changeColor (num){
    $('[data-key="'+ num + '"]').css('opacity','0.6');
    setTimeout(function(){
      $('[data-key="'+ num  +'"]').css('opacity','1.0');
    }, 300)
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
    var i = 0;
    var time = 1000;
    if(arr.length >= 20){
      $('#msg').html("You Won!!");
      //console.log("you won");
      return true;
    }
    while(i < arr.length){
      activeBlock(arr[i], time);
      i += 1;
      time += 500;
    }
  }

  function checkStep (){
    // if user input === pattern. move to next step
    if(JSON.stringify(score) === JSON.stringify(game.keyarr)){
      var randomStep = randStep();
      game.step += 1;
      game.pattern.push(randomStep);
      game.keyarr.push(randomStep.key);
      console.table(game);
      score = [];
      runGame(game.pattern);
      $('#score').html(game.step);
      return true;
    }
    else if (score.length === game.keyarr.length && JSON.stringify(score) !== JSON.stringify(game.keyarr)){
      $('#msg').html("You lose");
      return false;
    }
    else {
      return false;
    }
  }

 function randStep (){
   var steps = [g,r,b,y];
   var rand = Math.floor(Math.random()*4);
   return steps[rand];
 }

 function clear(){
     game.pattern = [];
     game.keyarr = [];
     game.step = 0;
     score = [];
     $("#msg").html("");
     $("#score").html("");
 }

});

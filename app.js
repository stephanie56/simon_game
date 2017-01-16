$(document).ready(function(){
  var pattern = [g,b,r,y,r,b,g];
  var score = [];

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

  $('#start').click(function(){
    activeBlock(g, 1000);
    activeBlock(b, 3000);
    activeBlock(r, 7000);
    activeBlock(y, 10000);
    activeBlock(r, 13000);
    activeBlock(b, 16000);
    activeBlock(g, 19000);

    console.log("im changing color!");
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

  //console.log(pattern.length);
  // yellowBlock.changeSound();


});

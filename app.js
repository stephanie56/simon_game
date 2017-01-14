$(document).ready(function(){
  var pattern = [1,4,2,3,4,2,2,1,3,1,2,4,1,3,2,1,3,4,2,2];
  var num = pattern[0];
  $('#start').click(function(){
    activeBlock(1, 1000);
    activeBlock(4, 3000);
    activeBlock(2, 7000);
    activeBlock(4, 10000);
    activeBlock(2, 13000);
    activeBlock(2, 16000);
    activeBlock(1, 19000);
    
    console.log("im changing color!");
  });


  function activeBlock (step, timeOut){
    setTimeout(function() { changeColor(step) }, timeOut);
    console.log("pressing " + step);
  }

  function changeColor (num){
    $('[data-key="'+ num + '"]').css('opacity','0.6');
    setTimeout(function(){
      $('[data-key="'+ num  +'"]').css('opacity','1.0');
    }, 2000)
  }

  //console.log(pattern.length);



});

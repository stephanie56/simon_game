$(document).ready(function(){
  var pattern = [1,4,2,3,4,2,2,1,3,1,2,4,1,3,2,1,3,4,2,2];
  var num = pattern[0];
  $('#start').click(function(){
  setInterval(changeColor, 5000);
    console.log("im changing color!");
  });

  function changeColor (){
    $('[data-key="1"]').css('opacity','0.6');
  }

  //console.log(pattern.length);



});

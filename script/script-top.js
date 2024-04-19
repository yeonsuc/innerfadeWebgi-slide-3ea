// $(function(){

  
  
// //위아래슬라이드
// var x = 0;
// // setInterval = 일정시간동안 반복하여 실행
// setInterval (function()) {
//   if (x<2) {
//     x++;//x는 0,1,2,0,1,2 를 반복
//     else {
//       x=0;
//     }
//     var sp = x * (-350) +"px" ; 
//     //0 * -350px = 0
//     //1 * -350px = -350px
//     //2 * -350px = -700px
//     $ (".topSlide").animate ({top:sp},400);  //0.4초
//   },  3000); //3초
// }

// }

$(function () {
  // 위아래슬라이드
  var x = 0;
  // setInterval = 일정시간동안 반복하여 실행
  setInterval(function () {
      if (x < 2) {
          x++; // 0,1,2,0,1,2
      } else {
          x = 0;
      }
      var sp = x * (-350) + "px";
      // 0 * -350px = 0
      // 1 * -350px = -350px
      // 2 * -350px = -700px 
      $(".topSlide").animate({
          top: sp
      }, 400); //0.4초 

  }, 3000); // 3초
});
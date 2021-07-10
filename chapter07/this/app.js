// クリックした後 slideup & slidedown する
$(function(){
  $(".box1").on("click", function(){
    $(this).slideUp(function(){
      $(this).slideDown();
    });
  });
});

// 下記コードを簡略化する
// $(function(){
//   $(".bg1").on("click", function(){
//     $(".bg1").slideUp();
//   });

//   $(".bg2").on("click", function(){
//     $(".bg2").slideUp();
//   });

//   $(".bg3").on("click", function(){
//     $(".bg3").slideUp();
//   });

//   $(".bg4").on("click", function(){
//     $(".bg4").slideUp();
//   });
// });
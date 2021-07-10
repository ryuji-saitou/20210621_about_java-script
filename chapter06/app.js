// マウスクリックイベント
$(function () {
  $(".box1").on("click", function () {
    $('.box1').addClass('box1-ext');
  });
  $(".box1").mouseout(function () {
    $(".box1").removeClass("box1-ext");
  });
});

// $(function () {
//   $(".box1").click(function () {
//     $(".box1").addClass("box1-ext")
//   });
// });

// ★addClass & removeClassの活用
// $(function () {
//   $(".box1").mouseover(function () {
//     $(".box1").addClass("box1-ext");
//   });
//   $(".box1").mouseout(function () {
//     $(".box1").removeClass("box1-ext");
//   });
// });

// ★マウスオーバー & マウスアウト
// $(function () {
//   $(".box1").mouseover(function () {
//     $(".box1").css({ "background-color": "#0000FF" });
//   });
//   $(".box1").mouseout(function () {
//     $(".box1").css({ "background-color": "#ff0000" })
//   })
// });

// 下の記述でも問題無し
// $(".box1").mouseover(function () {
//   $(".box1").css({ "background-color": "#0000FF" });
// });
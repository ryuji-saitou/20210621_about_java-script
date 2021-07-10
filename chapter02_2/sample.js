// varによる再宣言..できた
// var nickname = "kumasan"
// console.log(nickname)
// var nickname = "puu-chan"
// console.log(nickname)

// letによる再宣言..できなかった
// let nickname = "kumasan"
// console.log(nickname)
// let nickname = "puu-chan"
// console.log(nickname)

// constによる再宣言..できなかった
// const nickname = "kumasan"
// console.log(nickname)
// const nickname = "puu-chan"
// console.log(nickname)

// varによる再代入..できた
// var nickname = "kumasan"
// console.log(nickname)
// nickname = "puu-chan"
// console.log(nickname)

// letによる再代入..できた
// let nickname = "kumasan"
// console.log(nickname)
// nickname = "puu-chan"
// console.log(nickname)

// constによる再代入..できなかった
// const nickname = "kumasan"
// console.log(nickname)
// nickname = "puu-chan"
// console.log(nickname)

// スコープについて
// var str = "webcamp" // グローバルスコープ
// function foo() {
  // console.log(str)
  // var y = "hello" // 関数スコープ
// }
// foo()
// console.log(y)

// 巻き上げ(ホイスティング)について
var str = "webcamp"

function foo() {
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()
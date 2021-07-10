// ここから変数・四則計算
let hello = "hello world (js利用ver.)";
let int1 = 1;
alert(hello);
alert(int1);
alert(6*12);
alert("hello" + "world" + " (文字列結合ver.)")

// ここから条件分岐
let orange = 100;
let apple = 120;

if(orange>apple){
  alert("orangeはappleより高い");
} else if(orange==apple){
  alert("orangeとappleは同じ値段");
} else{
  alert("orangeはappleより安い");
}

// ここから繰り返し処理(while文)
let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert("2をかけ続けて" + 100 + "を超えるのに必要だった回数は" + count + "回です。")

// ここから繰り返し処理(for文)
let i;
let num2 = 0;

for(i = 0; i < 11; i++){
  num2 = num2 + i;
}

alert("1~10まで足すと" + num2 + "になる。");
// promptの利用例
// let promptStr = prompt("好きな文字を入力してください");
// alert(promptStr);

// じゃんけんの手を入力するプロンプトを作成
let user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選択してください")
console.log(user_hand)

// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();
console.log(js_hand)

// プロンプトで入力した手と、
// JacaScriptが作成した手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand,js_hand);

// 結果を表示する
alert ("あなたの選んだ手は" + user_hand + "です。\n" +
       "JavaScriptが選んだ手は" + js_hand + "です。\n" +
       "結果は" + judge + "です。")

// じゃんけんの手をランダムに選択する関数
function getJShand(){
  let js_hand_num = Math.floor(Math.random() * 3);
  let hand_name;
  if(js_hand_num == 0){
    hand_name = "グー";
  } else if (js_hand_num == 1){
    hand_name = "チョキ";
  } else if (js_hand_num == 2){
    hand_name = "パー";
  }
  return hand_name;
}

// ユーザーの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user,js) {
  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "あなたの勝ち";
    } else if(js == "パー"){
      winLoseStr = "あなたの負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "あなたの負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "あなたの価値";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "あなたの勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "あなたの負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}
// let firstName = "太郎";
// let lastName = "山田";
// console.log(lastName + " " + firstName + "さん");
// console.log(`${lastName} ${firstName}さん`);

// // 円の面積を求める計算
// let radius = 6;
// const pai = 3;
// let area = radius ** 2 * pai;
// console.log(area);

// // 関数にまとめると
// function calCircleArea(radius) {
//   const pai = 3;
//   let area = radius ** 2 * pai;
//   return area;
// }
// console.log(calCircleArea(6));
// console.log(calCircleArea(10));

// // コンソールへメッセージを表示
// function showMessage(message) {
//   console.log(message);
// }
// showMessage("こんにちは");
// showMessage(123);

// // 数値を2倍して返す
// function double(number) {
//   return number * 2;
// }
// console.log(double(2));

// // 複数の引数
// function say(lastName, firstName) {
//   console.log(`${lastName}${firstName}`);
// }
// say("田中", "次郎");

// // スコープのテスト
// let message;
// function hello() {
//   message = "おはよう";
// }
// hello();
// console.log(message);

// // 条件分岐
// if (true) {
//   console.log("true");
// }
// if (false) {
//   console.log("false");
// }

// // 比較
// console.log(10 > 2);
// console.log(10 > 20);
// console.log(10 === 20);
// console.log(10 === 10);
// console.log("abc" === "abc");
// console.log("abc" === "abcd");

// // スコアの比較
// let score = 89;

// // 89超えの場合"最高"
// if (score > 89) {
//   console.log("最高");
// }

// // 89以上の場合"89点以上"
// if (score >= 89) {
//   console.log("89点以上");
// }

// // 60未満の場合"頑張ろう"
// if (score < 60) {
//   console.log("頑張ろう");
// }

// // 89の場合"89点"
// if (score === 89) {
//   console.log("89点");
// }

// // 89ではない場合"89点ではない"
// if (score !== 89) {
//   console.log("89点ではない");
// }

// // 20超え、かつ90未満の場合"20超え 90未満"
// if (score > 20 && score < 90) {
//   console.log("20超え 90未満");
// }

// // 89、または0の場合"89 または 0"
// if (score === 89 || score === 0) {
//   console.log("89 または 0");
// }

// console.log("----------------");
// score = 89;

// // １．89超えの場合 "頑張ったね"、それ以外の場合 "頑張ろう"
// if (score > 89) {
//   console.log("頑張ったね");
// } else {
//   console.log("頑張ろう");
// }

// // ２．89超えの場合 "頑張ったね"
// // それ以外の場合で、30超えの場合 "まあまあ"
// // それ以外の場合 "頑張ろう"
// if (score > 89) {
//   console.log("頑張ったね");
// } else if (score > 30) {
//   console.log("まあまあ");
// } else {
//   console.log("頑張ろう");
// }

// ３．0以上、かつ100以内の場合で
// 89超えの場合 "頑張ったね"、それ以外の場合 "頑張ろう"
// if (score >= 0 && score <= 100) {
//   if (score > 89) {
//     console.log("頑張ったね");
//   } else {
//     console.log("頑張ろう");
//   }
// }

// switch
// console.log("----------------");
// score = 10;

// if (score === 1) {
//   console.log("1");
// } else if (score === 2) {
//   console.log("2");
// } else if (score === 10) {
//   console.log("10");
// } else {
//   console.log("その他");
// }

// switch (score) {
//   case 1:
//     console.log("1");
//     break;

//   case 2:
//     console.log("2");
//     break;

//   case 10:
//     console.log("10");
//     break;

//   default:
//     console.log("その他");
//     break;
// }

// 配列
// console.log("----------------");

// const scores = [89, 56, 78];
// console.log(scores);

// console.log(scores.length);

// console.log(scores[0]);
// console.log(scores[1]);
// console.log(scores[2]);

// scores[0] = 10;
// console.log(scores[0]);

// scores.push(100);
// scores.push("おはよう");
// scores.push(true);
// console.log(scores);

// scores.pop();
// console.log(scores);

// scores.shift();
// console.log(scores);

// オブジェクト
// const scores = {
//   math: 87,
//   english: 90,
//   science: 65,
// };

// console.log(scores);
// console.log(scores["english"]);
// console.log(scores.english);

// scores.english = 10;
// console.log(scores);

// const allScores = [
//   {math: 89, english: 56, science: 48,},
//   {math: 29, english: 78, science: 58,},
//   {math: 47, english: 68, science: 85,},
// ]
// console.log(allScores);
// console.log(allScores[0]);
// console.log(allScores[1].english);

// オブジェクト内の関数
// const scores = {
//   math: 87,
//   english: 34,
//   science: 67,
//   message: function () {
//     console.log("メッセージ");
//   },
//   englishMessage: function () {
//     console.log(`英語の点数は${this.english}点です`);
//   },
// };

// scores.message();
// scores.englishMessage();

// // 繰り返し
// const prefectures = [
//   "北海道",
//   "青森県",
//   "岩手県",
//   "宮城県",
//   "秋田県",
//   "山形県",
//   "福島県",
//   "茨城県",
//   "栃木県",
//   "群馬県",
//   "埼玉県",
//   "千葉県",
//   "東京都",
//   "神奈川県",
//   "新潟県",
//   "富山県",
//   "石川県",
//   "福井県",
//   "山梨県",
//   "長野県",
//   "岐阜県",
//   "静岡県",
//   "愛知県",
//   "三重県",
//   "滋賀県",
//   "京都府",
//   "大阪府",
//   "兵庫県",
//   "奈良県",
//   "和歌山県",
//   "鳥取県",
//   "島根県",
//   "岡山県",
//   "広島県",
//   "山口県",
//   "徳島県",
//   "香川県",
//   "愛媛県",
//   "高知県",
//   "福岡県",
//   "佐賀県",
//   "長崎県",
//   "熊本県",
//   "大分県",
//   "宮崎県",
//   "鹿児島県",
//   "沖縄県",
// ];

// // for (const prefecture of prefectures) {
// //   console.log(prefecture);
// // }

// // // カウントを使ったfor文
// // for (let i = 0; i < prefectures.length; i++) {
// //   console.log(prefectures[i]);
// // }

// // forEach
// prefectures.forEach(function (prefecture) {
//   console.log(prefecture);
// });

// 今日のToDOリストをコンソール画面に表示
const todoList = [
  "デイトラ Web制作コース",
  "Udemy デザインコース",
  "duolingo",
  "Enjoy Simple English",
  "スクワット",
  "プランク",
];

todoList.forEach((todo) => {
  console.log(todo);
});

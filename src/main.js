/**
 * const, let 等の変数宣言
 */
// var val1 = "var変数";
// console.log (val1);

// // var変数は上書き可能
// val1 = "var変数の上書き";
// console.log (val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log (val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// letは再宣言不可能
// let val2 = "let変数を再宣言";
// console.log(val2);


// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可能
// val3 = "const変数を上書き";

// const変数は再宣言不可能
// const val3 = "const変数";


// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "レオ",
//   age: 27
// };

// console.log(val4);

// val4.name = "reo";
// val4.address = "神奈川";


// console.log(val4);


// constで定義した配列はプロパティの変更が可能。
// const val5 = ["dog", "cat"];

// val5[0] = "bird";
// val5.push("monkey");

// console.log(val5);


/**
 * テンプレート文字列
 */
// const firsNname = "reo";
// const age = 27;

// //「私の名前はreoデス。年齢は27歳です。
// const message1 = "My name is " + firsNname + ". I'm " + age + " years old.";

// // テンプレート文字列を用いた方法
// const message2 = `My name is ${firsNname}. I'm ${age} years old. `;
// console.log(message2);


/**
 * アロー関数
 */
// 従来の関数
// function func1(str){
//   return str;
// }
// const func1 = function (str) {
//   return str;
// }
// console.log(func1("func1です。"))

// アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です。"))


// 二つの引数を受け取って足し算して返す
// const func3 = (val1, val2) => ({
//   hoge: val1,
//   huga: val2,
// });
// console.log(func3(3,5))


/**
 *  分割代入 
*/
// const myProfile ={
//     name: "Reo",
//     age: 27
// };

// const message1 = `My name is ${myProfile.name}. I'm ${myProfile.age} years old. `;
// console.log(message1);

// const {name, age} = myProfile
// const message2 = `My name is ${name}. I'm ${age} years old. `;
// console.log(message2);

// const myProfile = ["reo", 27];
// const [name, age] = myProfile;
// const message2 = `My name is ${name}. I'm ${age} years old. `;
// console.log(message2);


/**
 * デフォルト値(引数、分割代入)
 */
// const sayHello = (name = "guest") => console.log(`Hello ${name}!`)
// sayHello("maya");

// const myProfile = {
//     age: 27
// };
// const {age, name = "guest"} = myProfile;
// console.log(age);
// console.log(name);


/**
 * オブジェクトの省略記法
 */
// const name = "reo";
// const age = 27;

// const myProfile = {
//     name,
//     age
// };

// console.log(myProfile);

/**
 * スプレッド構文
 */

// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [1, 2];
// const arr5 = [3, 4];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);


/**
 * map, filter の配列処理
 */

// const nameArr = ["tanaka", "yamada", "oyama"];
// 従来のFor文
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//     return name;
// }) ;
// const nameArr2 = [...nameArr]

// nameArr.map((name, index) => {console.log(`${index + 1}番目は${nameArr[index]}です。`)});

// const numArr = [1,2,3,4,5];
// const oddArr = numArr.filter((num) => {
//     return num % 2 === 1;
// })
// console.log(...oddArr);


// const othersArr = nameArr.filter((name) => {
//     return name != "oyama";
// })
// console.log(...othersArr);

// const nweNameArr = nameArr.map((name) => {
    // if(name === "oyama"){
    //     return name;
    // }else{
    //     return `${name}さん`
    // }
//     let newName;
//     name === "oyama" ? newName = name : newName = `${name}さん`;
//     return newName;

// })
// console.log(nweNameArr);

/**
 * 三項演算子
 */

// ある条件 ? 条件がTrueの時 : 条件がFalseの時
// const val = 1 > 2 ? "trueです。" : "falseです。";
// console.log(val);

// const num = "1300";

// const formattedNum = typeof num === 'number' ? 
//     num.toLocaleString() : "数値を設定してください。"

// console.log(formattedNum);

// const chechSum = (num1, num2) => {
//     return num1 + num2 > 100 ? 'over 100' : 'acceptable numbers';
// }

// console.log(chechSum(50,55));


/**
 * 論理演算子の本当の意味を知ろう && ||
 */
//truthy, falsyについて
// "ABC" 0 10 undefined null false Nan "" [] {}
// const val = NaN;
// if (val){
//     console.log(`${val}はtruthyです。`)
// }else{
//     console.log(`${val}はfalsyです。`)
// }

const flag1 = false;
const flag2 = false;

// if(flag1 || flag2){
//     console.log("1か2がtrueになります");
// }
// if(flag1 && flag2){
//     console.log("1も2もtrueになります");
// }

// const num = 100;
// const fee = num || "金額が未設定です。";
// console.log(fee);

const num2 = "";
const fee2 = num2 && "何かが設定されました。";
console.log(fee2);


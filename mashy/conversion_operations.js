let score = "33"
// let score = "33abc"
// let score = "null"
// let score = "undefined"
// let score = true



console.log(typeof score);
console.log(typeof (score));

let valueInNum = Number(score)
console.log(typeof valueInNum);
console.log(valueInNum); //prints NaN

/*

"33" --> 33
"33abc" --> NaN
true --> 1
false --> 0

*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33
let str_num = String(someNumber);
console.log(str_num);
console.log(typeof str_num);
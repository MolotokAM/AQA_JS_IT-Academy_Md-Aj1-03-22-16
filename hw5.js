// // 1. Perform addition of different types(string+boolean, string+number, number+boolean)
console.log('Hello' + true);
console.log('Hello' + 34);
console.log(35 + false);
console.log(36 + 37);
console.log('Hello ' + 'everyone');

// // 2. Multiply different types(string * boolean, string * number, number * boolean)
console.log('String' * true);
console.log('String' * 38);
console.log(39 * true);

// // 3. Dividing of different types(string/boolean, string/number, number/Boolean)
console.log('Str' / false);
console.log('Str' / 40);
console.log(41 / true);

// // 4. Perform explicit transformation(number, string, boolean)

// // String to number
let str = '123456789';
let numb = Number(str);
console.log(numb);
console.log(typeof numb);

let str2 = 'Any string instead of number';
let numb2 = Number(str2);
console.log(numb2);
console.log(typeof numb2);

// // Number to string
let numb3 = 1575;
let numbToStr = String(numb3);
console.log(numbToStr);
console.log(typeof numbToStr);

// // Boolean to string
let bool = true;
console.log(typeof bool);
let booleanToStr = String(bool);
console.log(booleanToStr);

// // String to Boolean
let str3 = 'Any string';
console.log(typeof str3);
let strToBoolean = Boolean(str3);
console.log(strToBoolean);

// // Number to Boolean
let numb4 = 1;
let numToBoolean = Boolean(numb4);
console.log(numToBoolean);
console.log(typeof numToBoolean);

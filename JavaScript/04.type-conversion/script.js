let val;

// Number to String
val = String(111);
val = String(8+4);


// Boolean to String
// 'false'라는 스트링으로 변환됨 1
val = String(false);

// Date to String
val = String(new Date());

// Array to String
val = String([1,2,3,4,5]);

// toString
val = (5).toString();

// String to number
val = Number('1');
val = Number(true);  //1
val = Number(false);  //0
val = Number(null);  //0
val = Number([1,2,3]); //NaN = Not a Number

val = parseInt('111.40');
val = parseFloat('111.40');

console.log(val);
console.log(typeof val);
console.log(val.length);

////////////////////////////

// javaScript 자동변환

const val1 = String(2);  //string
const val2 = 3;  //number
const sum = val1 + val2;  //String (자동변환)

console.log(sum);
// -> 23 반환 !! (string)
console.log(typeof sum);
// -> string
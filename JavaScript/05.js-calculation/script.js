const num1 = 20;
const num2 = 10;

let val;

// 간단한 연산

val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2; //나눗셈 후 나머지 출력

// Math Object

val = Math.E;
val = Math.PI;
val = Math.round(2.4); //가장 가까운 정수 리턴 -> 2
val = Math.ceil(2.4); //올림 -> 3
val = Math.floor(2.8); //내림 -> 2
val = Math.abs(-2); //절대값 -> 2
val = Math.min(2,3,4,5,-1,8); //가장 작은 수 -> -1
val = Math.max(2,3,4,5,-1,8); // 가장 큰 수 -> 8
val = Math.random(); //랜덤한 수 리턴 -> 0.23846...

val = Math.floor(Math.random()*20 + 1); // 1~20까지 수 중 랜덤 수 리턴
// + 1을 해줘야 1부터 시작
// floor -> 소수점 날리기


console.log(val);
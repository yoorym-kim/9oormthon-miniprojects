let foo = 42;
foo = 'bar';
foo = true;

console.log(typeof foo);

//원시타입
//문자열 String
const name = "han";
//Number
const age = 30;
//Boolean
const hasJob = true;
//null << 무조건 소문자 작성
const car = null;
//undefined
let anything;
//Symbol
const sym = Symbol();

//참조타입
//Array 배열
const hobbies = ['walking', 'books'];
//Object 객체
const address = {
    province: '경기도',
    city: '성남시'
}

console.log(typeof address);
//-> object
console.log(typeof hobbies);
//-> array가 아닌 object로 로그가 나옴
// array도 object의 하나의 형태

console.log(Array.isArray(hobbies));
//-> 배열인지를 확인할때는 이렇게 확인
// true 값을 반환 !
console.log(Array.isArray(address);
//-> 배열인지를 확인할때는 이렇게 확인
// false 값을 반환 !
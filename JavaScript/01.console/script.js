// 로그 메소드
// js 실행시 로그가 뜰 수 있게 함
console.log('안녕하세요!');
console.log(123);
console.log(true);

// 변수 설정, 출력
var greeting = '안녕하세요.';
console.log(greeting);

console.log({a:"a", b:"b"});
// 테이블 메소드
console.table({a:"a", b:"b"});

// 에러, 경고 메소드
console.error('Error!');
console.warn('Warning!');

// time-timeEnd 메소드
// 실행에 얼마나 시간이 걸렸는지 보여주는 메소드
console.time('Hello');
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.timeEnd('Hello');

// 콘솔 내역 삭제
console.clear();
for (let i=1; i<10; i++) {
    if(i==3){
        console.log('333');
        continue; // <- 아랫줄 거치지 않고 for문으로 바로 올라감
    }
    if(i==5){
        console.log('55555');
        break; // <- for문 바로 끝내기
    }
    console.log('num' + i);
}

const user = {
    name: 'Han',
    province: '경기도',
    city: '성남시'
}

// x라는 변수 설정
// 객체의 속성을 따라 반복하기
for(let x in user) {
    // 백틱(`)을 이용한 로그 출력
    console.log(`${x} : ${user[x]}`);
    // x값에는 name, province, city가 차례로 들어감
}



let i = 0;

while (i<10) {
    console.log(i);
    i++;
}



// i에 0 재할당, let이라서 재정의는 불가
i = 0;

//do는 1회 먼저 실행, 그 다음 while문의 조건의 tre/false에 따라 반복
do {
    console.log(i);
    i++;
}
while (i<10)
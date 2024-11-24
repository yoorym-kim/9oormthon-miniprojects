    // var greeting = 'hello';
    // console.log(greeting);

    // // 선언 여러번 가능
    // var greeting = 'hi';
    // console.log(greeting);

    // // 할당 여러번 가능
    // greeting = 'how are you?'
    // console.log(greeting);

    // // 중복선언 불가, 재할당 가능
    // let greeting = 'hello';
    // console.log(greeting);

    // // 이건 불가능 !!!!!
    // let greeting = 'hi';
    // console.log(greeting);

    // // 재할당은 가능
    // greeting = 'hi';
    // console.log(greeting);


    // // 중복선언 불가, 재할당도 불가
    // const greeting = 'hello';
    // console.log(greeting);

    // greeting = 'hi';
    // console.log(greeting);



    ///////////////////////



    // // 유효한 참조 범위
    // // var : 함수 레벨 스코프
    // function func(){
    //     if (true) {
    //         var a = 'a';
    //         console.log(a);
    //     }
    //     // 같은 함수 내에서 참조됨 > 참조 가능
    //     console.log(a);
    // }

    // func();

    // // 유효한 참조 범위
    // // let, const : block 레벨 스코프
    // function func() {
    //     if(true) {
    //         // 블록내에서 선언
    //         let a = 'a';
    //         console.log(a);
    //     }
    //     // 블록범위를 벗어남
    //     console.log(a);
    // }

    // func();



    ///////////////////////////////////////////

    // 호이스팅 ~!

    // 아직 생성되지 않은 변수를 콘솔로그에 사용(접근함)
    console.log(greeting);


    // undefined로 나오는 var
    var greeting = 'hello';
    // 에러가 떠버리는 let (변수 선언문은 호이스팅되나, 값은 할당되지 않아서 에러)
    let greeting = 'hello';


    // 함수 선언 전에 호출해도 잘 실행됨
    func();

    function func() {
        console.log('hoisting test');
    }

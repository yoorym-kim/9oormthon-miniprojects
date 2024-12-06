let val;

val = window.outerHeight;
val = window.outerWidth;

val = window.innerHeight;
val = window.innerWidth;

val = window.scrollY;   //브라우저 위부터 얼마나 스크롤해 내려갔는가
val = window.scrollX;   //브라우저 왼쪽부터 얼마나 스크롤 했는가

val = window.location;  //url에 대한 정보(host ..)

window.location.href = 'http://google.com'; //이 href 주소로 이동시키기


// 브라우저 완쪽 상단 돌아가기 버튼과 동일
window.history.back();  // 이전페이지로 돌아감
window.history.forward();  //다시 앞페이지로 넘어감

val = window.navigator;   // 브라우저에 대한 정보
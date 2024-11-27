let val;

val = document;

val = document.baseURI; //웹페이지의 절대 URI 반환
val = document.head; //<head>태그 반환
val = document.body; //<body>태그 반환

val = document.forms; //<form>태그 반환
val = document.forms[0].id; 
val = document.forms[0].classList; 
val = document.forms[0].className; 

val = document.scripts; //<script>태그 반환/html파일에는 없지만 자동태그된 script태그도 나올수잇음
val = document.scripts[0].getAttribute('src'); //<script>태그 중 첫번째의 src속성 반환


/////////////////////////////////

//Id명으로 element 가져오기
const container = document.getElementById('header-container');

container.style.display = none;  

console.log(val);
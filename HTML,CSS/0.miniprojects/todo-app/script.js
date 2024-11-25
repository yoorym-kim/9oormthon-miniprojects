// // const todoList = document.querySelector('.todo-list');
// // const todoPlus = document.querySelector('.plus-todo');
// // const todo = document.querySelector('.todo');
// // const checkTodo = document.querySelector('.check-todo');
// // const inputTodo = document.querySelector('.input-todo');
// // const changeTodo = document.querySelector('.change-todo');
// // const deleteTodo = document.querySelector('.delete-todo');


// // change-todo 버튼 클릭시
// changeTodo.addEventListener('click', () => {

//     //classList로 .todo클래스에 .clicked 클래스 연결(추가)
//     todo.classList.add('clicked');

//     // input박스에 focus로 입력대기상태 전환
//     inputTodo.focus();

// });

// // input-todo에 입력되는 key 감지
// inputTodo.addEventListener('keydown', (event) => {
//     //enter키 누를 경우
//     if(event.key == 'Enter') {
//         // input-todo 박스가 blur됨(입력값 그대로 남기고 입력대기 종료)
//         inputTodo.blur();
//         //classList로 .todo.clicked 클래스 상태에서 .clicked 클래스 삭제(.todo클래스로 변환)
//         todo.classList.remove('clicked');
//     }
// });

// // check-todo / 'change' 로 check box 상태에 따른 변화감지
// checkTodo.addEventListener('change', () => {

//     // toggle로 .checked 클래스 연결 걸었다 풀었다 할 수 있음 !!
//     // checkTodo.checked 값의 true/false에 따라 동작함
//     // true이면 done 클래스를 추가.
//     // false이면 done 클래스를 제거.
//     todo.classList.toggle('done', checkTodo.checked);

// });


// // delete-todo 버튼의 클릭 감지
// deleteTodo.addEventListener('click', (event) => {
//     // 클릭된 버튼의 가장 가까운 .todo 요소를 찾는다
//     // event가 발생된 타겟을 찾아야 하기 때문에 event를 인자로 받아왔음 !!!
//     const todoToDelete = event.target.closest('.todo');
//     // 해당 todo 삭제
//     todoToDelete.remove();
// });



// ////////////////////////////////////////////////



const todoList = document.querySelector('.todo-list');
const todoPlus = document.querySelector('.plus-todo');
const todo = document.querySelector('.todo');

// 기존 todo 항목에 대해 이벤트 리스너 설정
function addTodoEventListeners(todoElement) {
    const inputTodo = todoElement.querySelector('.input-todo');
    const changeTodo = todoElement.querySelector('.change-todo');
    const checkTodo = todoElement.querySelector('.check-todo');
    const deleteTodo = todoElement.querySelector('.delete-todo');

    // change-todo 버튼 클릭시
    changeTodo.addEventListener('click', () => {
        todoElement.classList.add('clicked');
        inputTodo.focus(); // 입력창에 focus
    });

    // input-todo에 입력되는 key 감지
    inputTodo.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            inputTodo.blur(); // 입력 대기 종료
            todoElement.classList.remove('clicked'); // clicked 클래스 제거
        }
    });

    // check-todo / 'change' 로 체크박스 상태에 따른 변화 감지
    checkTodo.addEventListener('change', () => {
        todoElement.classList.toggle('done', checkTodo.checked); // 체크 상태에 따라 'done' 클래스 토글
    });

    // delete-todo 버튼의 클릭 감지
    deleteTodo.addEventListener('click', (event) => {
        const todoToDelete = event.target.closest('.todo');
        todoToDelete.remove(); // 해당 todo 삭제
    });
}

// 기존 todo 항목들에 대해 이벤트 리스너 설정
document.querySelectorAll('.todo').forEach(addTodoEventListeners);

// plus-todo 버튼의 클릭 감지
todoPlus.addEventListener('click', () => {
    // 기존 todo를 복제하여 새로운 todo 생성
    const newTodo = todo.cloneNode(true);
    newTodo.querySelector('.input-todo').value = ''; // 입력창 초기화

    // 새로 생성된 todo에 대해서도 이벤트 리스너 추가
    addTodoEventListeners(newTodo);

    // todo-list에 새로운 todo 추가
    todoList.appendChild(newTodo);
});

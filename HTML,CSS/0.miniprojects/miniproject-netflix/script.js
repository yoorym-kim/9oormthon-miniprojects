const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    console.log('이벤트리스너 들어옴')
    if (window.scrollY > 1) {
        console.log('1보다 스크롤됨')
        header.classList.add('scrolled');
        console.log('클래스 추가됨')
    } else {
        header.classList.remove('scrolled');
    }
});

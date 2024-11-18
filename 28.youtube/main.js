const hambergerMenu = document.getElementById('hamburger-menu');
const sidebar = document.getElementById('sidebar');

console.log(hambergerMenu);
console.log(sidebar);

hambergerMenu.addEventListener('click', function() {
    console.log('햄버거 메뉴 클릭')
    sidebar.classList.toggle('open');
    console.log(sidebar.classList)
});
const btn = document.querySelector('.burger'),
    burgerMenu = document.querySelector('.burger_menu'),
    closeBtn = document.querySelector('.close');

btn.addEventListener('click', () => {
    burgerMenu.classList.add('burger_menu-active');
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    burgerMenu.classList.remove('burger_menu-active');
    document.body.style.overflow = '';
});
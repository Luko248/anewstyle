export function initNav(){
    const menu = document.querySelector('.menu')
    const burger = document.querySelector('#menuBtn')

    burger.addEventListener('click', ()=> {
        menu.classList.toggle('menu--open');
    })
}
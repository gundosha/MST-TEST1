const menu = document.querySelector('.header__menu_burger');
const open_menu = document.querySelector('.header__menu_burgers')
const open_btn = document.querySelector('.header__image_burger')
const modalClose = document.querySelector('.modal__btn_close')
const modal = document.querySelector('.modal')



function modalOpen(mod){
    mod.classList.remove('modal__close')
    mod.classList.add('modal__open')
}

function modalCloses(mod){
    mod.classList.remove('modal__open')
    mod.classList.add('modal__close')
}

modalClose.addEventListener('click', function(){
    modalCloses(modal)
})
open_btn.addEventListener('click', function(){
    modalOpen(modal)
})





window.onload = function() {
 const burg_btn = document.querySelector('.hambutton');   
 const burg_menu = document.querySelector('.mobile__nav');
 burg_btn.addEventListener('click', function(){
     burg_btn.classList.toggle('is-active')
     burg_menu.classList.toggle('is-active')
 })
}
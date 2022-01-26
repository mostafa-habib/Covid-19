let menu=document.querySelector('#menu');
let navbar=document.querySelector('.navbar');

menu.addEventListener('click',function (){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggel');

})
window.onscroll=function (){
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggel');

}

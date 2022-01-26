let menu=document.querySelector('#menu');
let navbar=document.querySelector('.navbar');

menu.addEventListener('click',function (){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggel');

})
let scroll1=document.querySelector('.scroll');
window.onscroll=function (){
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggel');
    if(window.scrollY > 0){
        scroll1.classList.add('scroll');
    }
    else{
        scroll1.classList.remove('scroll');
    }
}
let switchMenu = document.querySelector('.switch-menu');
let dark = document.querySelector('body');
switchMenu.onclick = function(){
    switchMenu.classList.toggle('active');
    dark.classList.toggle('dark');
}
let toggleMenu = document.querySelector('.toggle-menu');
let nav = document.querySelector('.nav');
toggleMenu.onclick = function(){
    toggleMenu.classList.toggle('active');
    nav.classList.toggle('active');
}    

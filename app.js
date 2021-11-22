'use strict';
const ulLinks = document.querySelector('.navbar-links');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const aLinks = document.querySelectorAll('.nav-item');
const accordions = document.querySelectorAll('.accordion');
// 

hamburgerMenu.addEventListener('click', openMenu);
aLinks.forEach(n => n.addEventListener('click', closeMenu));
accordions.forEach(a => a.onclick = () => {
    accordions.forEach(subA => {subA.classList.remove('active')})
    a.classList.add('active');
});
// 
function openMenu() {
    hamburgerMenu.classList.toggle('active');
    ulLinks.classList.toggle('active');
};
function closeMenu() {
    hamburgerMenu.classList.remove('active');
    ulLinks.classList.remove('active');
};

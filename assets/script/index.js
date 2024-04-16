'use strict';

const hamburgerOpen = document.querySelector('.hamburger.open');
const hamburgerClose = document.querySelector('.hamburger.close');
const verticalNavLinks = document.querySelectorAll('.vertical-nav__link');
const backDrop = document.querySelector('.backdrop');

hamburgerOpen.addEventListener('click', () => {
  hamburgerClose.classList.add('active');
  hamburgerOpen.classList.remove('active');
});

hamburgerClose.addEventListener('click', () => {
  hamburgerOpen.classList.add('active');
  hamburgerClose.classList.remove('active');
});

verticalNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburgerOpen.classList.add('active');
    hamburgerClose.classList.remove('active');
  });
});

backDrop.addEventListener('click', () => {
  hamburgerOpen.classList.add('active');
  hamburgerClose.classList.remove('active');
});

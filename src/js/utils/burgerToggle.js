const burgerLinks = [...document.querySelectorAll('.burger__bar-item')];
const menuToggle = document.querySelector('#menu__toggle');
// const overlay = document.querySelector('.burger__overlay');

burgerLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.checked = false;
    document.body.style.overflow = '';
  })
});

menuToggle.addEventListener('change', () => {
  menuToggle.checked ? 
  document.body.style.overflow = 'hidden':
  document.body.style.overflow = '';
});

// overlay.addEventListener('click', () => {
//   menuToggle.checked = false;
// })
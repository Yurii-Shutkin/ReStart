const burgerLinks = [...document.querySelectorAll('.burger__bar-item')];
const menuToggle = document.querySelector('#menu__toggle');
const closeBtn = document.querySelector('.burger');
const overlay = document.querySelector('.burger__overlay');

burgerLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.checked = false;
    document.body.style.overflow = '';
    overlay.classList.remove('active');
  })
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
})

menuToggle.addEventListener('change', () => {
  menuToggle.checked ? 
  (document.body.style.overflow = 'hidden') && (overlay.classList.add('active')):
  (document.body.style.overflow = '') && (overlay.classList.remove('active'));
});

overlay.addEventListener('click', () => {
  menuToggle.checked = false;
  overlay.classList.remove('active');
})
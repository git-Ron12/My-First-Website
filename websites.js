const nav_circle = document.querySelector('.nav-circle');
const nav_menu = document.querySelector('.nav-menu');

nav_circle.addEventListener('click', () => {
  const currentOpacity = getComputedStyle(nav_menu).opacity;
  if (currentOpacity === '0') {
    nav_menu.style.opacity = '1';
    nav_menu.style.display = 'block';
    nav_circle.classList.add('tooltip-hidden');
  } else {
    nav_menu.style.opacity = '0';
    nav_circle.classList.remove('tooltip-hidden');
  }
  
});

document.body.addEventListener('click', (e) => {
  if (!nav_menu.contains(e.target) && e.target !== nav_circle) {
    nav_menu.style.opacity = '0';
  }
});


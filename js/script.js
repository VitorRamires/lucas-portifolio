const hamburguerIcon = document.querySelector('.hamburguer');
const mobileMenu = document.querySelector('.menu-mobile .links');
const closeMenu = document.querySelector('.close');
const openMenu = document.querySelector('.open');
const linksMenuMobile = document.querySelectorAll('.links ul li');
const animationTargets = document.querySelectorAll('.animation-target');
const linksLanguages = document.querySelectorAll('.work-link');
const defaultPage = document.querySelector('.default-page');

if (hamburguerIcon) {
  hamburguerIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu-opened');
    closeMenu.classList.toggle('show-close-btn');
    openMenu.classList.toggle('show-open-btn');
    linksMenuMobile.forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('menu-opened');
        closeMenu.classList.add('show-close-btn');
        openMenu.classList.add('show-open-btn');
      });
    });
  });
}

function handlerScroll() {
  animationTargets.forEach((target) => {
    let elementFromTop = target.getBoundingClientRect().top;
    let windowHeight = window.innerHeight * 0.9;
    if (elementFromTop < windowHeight) {
      target.classList.add('active-animation');
    } else if (elementFromTop > windowHeight) {
      target.classList.remove('active-animation');
    }
  });
}

setTimeout(() => {
  handlerScroll();
}, 250);

window.addEventListener('scroll', handlerScroll);

/* handlesTranslate */
linksLanguages.forEach((link) => {
  let linkUrl = link.href;
  link.addEventListener('click', () => {
    localStorage.setItem('url', linkUrl);
  });
});

if (localStorage.getItem('url') === null) {
  localStorage.setItem('url', defaultPage.href);
} else {
  localStorage.getItem('url') !== document.location.href
    ? (document.location.href = localStorage.getItem('url'))
    : document.location.href;
}

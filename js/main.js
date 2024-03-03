const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav__wrapper');
const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header');



const burgerMenu = () => {
  burger.classList.toggle('active')
  nav.classList.toggle('active')
  overlay.classList.toggle('active')
  document.body.classList.toggle('disable-scroll')
  if (nav.classList.contains('active')) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }
}

const closeBurgerMenu = () => {
  burger.classList.remove('active')
  nav.classList.remove('active')
  overlay.classList.remove('active')
  document.body.classList.remove('disable-scroll')
  header.classList.remove('active')
}


const smoothScrollToSection = (targetSection) => {
  closeBurgerMenu(); 
  const targetElement = document.getElementById(targetSection);
  if (targetElement) {
    const targetPosition = targetElement.offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  }
};

burger.addEventListener('click', burgerMenu);
nav.addEventListener('click', closeBurgerMenu);
overlay.addEventListener('click', closeBurgerMenu);


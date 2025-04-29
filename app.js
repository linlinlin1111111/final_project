const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')
const body = document.querySelector('body')

// display mobile menu
const  mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

// animations

// Подключаем ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Анимация для секции Hero
gsap.from('.animate-hero', {
  duration: 0.6,     // длительность анимации
  opacity: 0,        // стартовая прозрачность 0
  y: -150,           // стартовая позиция выше на 150px
  stagger: 0.3       // задержка между элементами
});

// Анимация для секции Services

gsap.from('.animate-services', {
    scrollTrigger: '.animate-services', // активируем при прокрутке до элемента
    duration: 0.5,
    opacity: 1,
    x: -150,
    stagger: 0.12
  });

  gsap.from('.animate-img', {
    scrollTrigger: '.animate-img', // активируем при прокрутке до элемента
    duration: 1.2,
    opacity: 0,
    x: -200,
  });

  gsap.from('.animate-membership', {
    scrollTrigger: '.animate-membership', // активируем при прокрутке до элемента
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5
  });

  gsap.from('.animate-card', {
    scrollTrigger: '.animate-card', // активируем при прокрутке до элемента
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.1,
    delay: 0.2
  }); 

  gsap.from('.animate-designer', {
    scrollTrigger: '.animate-designer',
    duration: 0.6,
    opacity: 0,
    y: 50,
    stagger: 0.3
  });
  
  gsap.from('.animate-email', {
    scrollTrigger: '.animate-email',
    duration: 0.8,
    opacity: 0,
    y: -150,
    stagger: 0.24,
    delay: 0.4
  });
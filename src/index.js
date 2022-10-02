import { LocalStorage } from './utils/localstorage.js'

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const iframes = document.querySelectorAll('iframe');

const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark': 'light'
const DEFAUL_LOCALSTORAGE = { darkMode: isDarkMode }
const themeStorage = new LocalStorage('v1', 'theme', DEFAUL_LOCALSTORAGE)


// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const salesMenu = document.querySelector('#Sales-page');
  const shippingMenu = document.querySelector('#Shipping-page');
  const productsMenu = document.querySelector('#Products-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    salesMenu.classList.remove('highlight');
    productsMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    salesMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    shippingMenu.classList.remove('highlight');
    productsMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    shippingMenu.classList.add('highlight');
    salesMenu.classList.remove('highlight');
    productsMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 3345) {
    productsMenu.classList.add('highlight');
    shippingMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

/**
 * Dark mode
 * function toggle dark mode
 */
const toggleDarkModeButton = document.querySelector('#toggle-darkmode')

let currentTheme = 'ligth'

if (themeStorage.getItem('darkMode')) {
  document.querySelector('html').classList.add('dark-mode')
  document.getElementById('moon').classList.add('hidden')
  currentTheme = 'dark'
}

toggleDarkModeButton.addEventListener('click', () => {
  if (currentTheme === 'light') {
    document.querySelector('html').classList.toggle('dark-mode')
    document.getElementById('sun').classList.toggle('hidden')
    document.getElementById('moon').classList.toggle('hidden')

    // save preference in localstorage
    themeStorage.setItem('darkMode', true)
    currentTheme = 'dark'
  }

  if (currentTheme === 'dark') {
    document.querySelector('html').classList.toggle('dark-mode')
    document.getElementById('sun').classList.toggle('hidden')
    document.getElementById('moon').classList.toggle('hidden')
    // save preference in localstorage
    themeStorage.setItem('darkMode', false)
    currentTheme = 'ligth'
  }
})

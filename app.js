const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const iframes = document.querySelectorAll('iframe');
// const theme = localStorage.getItem('theme');
// 	if (theme === "dark") {
// 		document.documentElement.setAttribute('data-theme', 'dark');
// 	}

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

// dark mode
// const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');	

// if (theme === "dark") {
// 	document.getElementById("theme-toggle").innerHTML = "Light Mode";
// } else if (theme === "light") {
// 	document.getElementById("theme-toggle").innerHTML = "Dark Mode";
// } else if  (userPrefers === "dark") {
// 	document.documentElement.setAttribute('data-theme', 'dark');
// 	window.localStorage.setItem('theme', 'dark');
// 	document.getElementById("theme-toggle").innerHTML = "Light Mode";
// } else {
// 	document.documentElement.setAttribute('data-theme', 'light');
// 	window.localStorage.setItem('theme', 'light');
// 	document.getElementById("theme-toggle").innerHTML = "Dark Mode";
// }

// function modeSwitcher() {
// 	let currentMode = document.documentElement.getAttribute('data-theme');
// 	if (currentMode === "dark") {
// 		document.documentElement.setAttribute('data-theme', 'light');
// 		window.localStorage.setItem('theme', 'light');
// 		document.getElementById("theme-toggle").innerHTML = "Dark Mode";
// 	} else {
// 		document.documentElement.setAttribute('data-theme', 'dark');
// 		window.localStorage.setItem('theme', 'dark');
// 		document.getElementById("theme-toggle").innerHTML = "Light Mode";
// 	}
// }

function toggleTheme() {
  for (i = 0; i < iframes.length; i++) {
    iframes[i].classList.toggle('is-dark');
  }
}

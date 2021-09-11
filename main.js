const mobileMenu = document.querySelector(`mobile-menu`);
const menuLinks  = document.querySelector(`navbar_menu`);
const navLogo = document.querySelector("#navbar_logo");

// Mobile menu set up 

const mobileMenu1 = () =>{
    mobileMenu.classList.toogle(`is-active`);
    menuLinks.classList.toogle(`active`);
}

//adding an event listener for click action

mobileMenu.addEventListener(`click`, mobileMenu1);


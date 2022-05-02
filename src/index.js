import {homeTab} from "./home-tab";
import {menuTab} from "./menu-tab";
import {contactTab} from "./contact-tab";
import {pageLoad } from "./page-load";

// Event listeners
pageLoad.home.addEventListener("click", homeHandler)
pageLoad.menu.addEventListener("click", menuTabHandler)
pageLoad.contact.addEventListener("click", contactTabHandler)

//Functions
function menuTabHandler(){
    let currentEl = document.querySelector(".home-content");
    pageLoad.home.style.backgroundColor = "rgb(245, 196, 35)";
    pageLoad.contact.style.backgroundColor = "rgb(245, 196, 35)"
    pageLoad.menu.style.backgroundColor = "white"; 
    currentEl.remove()
    menuTab.createMenuElements();
}

function homeHandler(){
    let currentEl = document.querySelector(".home-content"); 
    pageLoad.home.style.backgroundColor = "white";
    pageLoad.menu.style.backgroundColor = "rgb(245, 196, 35)";
    pageLoad.contact.style.backgroundColor = "rgb(245, 196, 35)"
    currentEl.remove()
    homeTab.createHomeElements();
}

function contactTabHandler(){
    let currentEl = document.querySelector(".home-content"); 
    pageLoad.contact.style.backgroundColor = "white"
    pageLoad.menu.style.backgroundColor = "rgb(245, 196, 35)";
    pageLoad.home.style.backgroundColor = "rgb(245, 196, 35)"
    currentEl.remove()
    contactTab.createContactElements();
}






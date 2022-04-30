import {homeTab} from "./home-tab";
import {menuTab} from "./menu-tab";
import {contactTab} from "./contact-tab";
import {pageLoad } from "./page-load";

pageLoad.pageLoader()

let home = document.querySelector(".homeButton")
let menu = document.querySelector(".menuButton")
let contact = document.querySelector(".contactButton")

// Event listeners
home.addEventListener("click", homeHandler)
menu.addEventListener("click", menuTabHandler)
contact.addEventListener("click", contactTabHandler)

//Functions
function menuTabHandler(){
    let currentEl = document.querySelector(".home-content");
    home.style.backgroundColor = "rgb(245, 196, 35)";
    contact.style.backgroundColor = "rgb(245, 196, 35)"
    menu.style.backgroundColor = "white"; 
    currentEl.remove()
    menuTab.createMenuElements();
}

function homeHandler(){
    let currentEl = document.querySelector(".home-content"); 
    home.style.backgroundColor = "white";
    menu.style.backgroundColor = "rgb(245, 196, 35)";
    contact.style.backgroundColor = "rgb(245, 196, 35)"
    currentEl.remove()
    homeTab.createHomeElements();
}

function contactTabHandler(){
    let currentEl = document.querySelector(".home-content"); 
    contact.style.backgroundColor = "white"
    menu.style.backgroundColor = "rgb(245, 196, 35)";
    home.style.backgroundColor = "rgb(245, 196, 35)"
    currentEl.remove()
    contactTab.createContactElements();
}






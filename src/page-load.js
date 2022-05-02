import { homeTab } from "./home-tab";

export const pageLoad = (() => {

    
        // Top element and his class
        let top = document.createElement("div")
        top.classList.add("header");
    
        // Adding innerHTML and parent for each button
        let home = document.createElement("button")
        home.innerHTML = "home"
        home.type = "button"
        top.appendChild(home)
    
        let menu = document.createElement("button")
        menu.innerHTML = "menu";
        menu.type = "button"
        top.appendChild(menu)
    
        let contact = document.createElement("button")
        contact.innerHTML = "contact"
        contact.type = "button"
        top.appendChild(contact)
    
        let topContainer = document.createElement("div")
        topContainer.classList.add("header-container")
        topContainer.appendChild(top)
        document.querySelector(".content").appendChild(topContainer)
    
        //homeTab.createHomeElements
        homeTab.createHomeElements()
    
    return{
        home,
        menu,
        contact
    }
})()

export const contactTab = (() => {

    function createContactElements(){

        const main = document.createElement("div");
        main.classList.add("home-content");
        document.querySelector(".content").appendChild(main)

        const title = document.createElement("h1");
        title.innerHTML = "Contact us";
        title.classList.add("home-title")
        main.appendChild(title);

        // First contact
        const mamaBearContainer = document.createElement("div");
        mamaBearContainer.classList.add("paragraph-container")
        main.appendChild(mamaBearContainer)

        const mamaBear = document.createElement("h2");
        mamaBear.innerHTML = "Mamma bear"
        mamaBearContainer.appendChild(mamaBear)

        const mamaBearContact = document.createElement("p");
        mamaBearContact.innerHTML = "Chef <br> 555-555-555";
        mamaBearContact.classList.add("info");
        mamaBearContainer.appendChild(mamaBearContact)

        const mamaBearImg = document.createElement("img");
        mamaBearImg.src = "../src/images/mamabear.jpeg";
        mamaBearContainer.appendChild(mamaBearImg)
        
        // Second contact
        const papaBearContainer = document.createElement("div");
        papaBearContainer.classList.add("paragraph-container")
        main.appendChild(papaBearContainer)

        const papaBear = document.createElement("h2");
        papaBear.innerHTML = "Papa bear"
        papaBearContainer.appendChild(papaBear)

        const papaBearContact = document.createElement("p");
        papaBearContact.innerHTML = "Manager <br> 555-555-554";
        papaBearContact.classList.add("info")
        papaBearContainer.appendChild(papaBearContact)

        const papaBearImg = document.createElement("img");
        papaBearImg.src = "../src/images/papabear.jpeg";
        papaBearContainer.appendChild(papaBearImg)

    }
    return{
        createContactElements
    }
})();
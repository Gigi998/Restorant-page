export const homeTab = (() => {

    function createHomeElements(){

        const main = document.createElement("div");
        main.classList.add("home-content");
        document.querySelector(".content").appendChild(main)

        const title = document.createElement("h1");
        title.innerHTML = "Beary's Breakfast Bar";
        title.classList.add("home-title")
        main.appendChild(title);

        // First paragraph
        const aboutUs = document.createElement("div");
        aboutUs.classList.add("paragraph-container")
        main.appendChild(aboutUs)

        const aboutUsText = document.createElement("p");
        aboutUsText.innerHTML = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
        aboutUs.appendChild(aboutUsText)

        const aboutUsSignature = document.createElement("h4");
        aboutUsSignature.innerHTML = "Goldilocks";
        aboutUsSignature.classList.add("home-tab-bottom")
        aboutUs.appendChild(aboutUsSignature)

        // Second paragraph
        const hoursContainer = document.createElement("div");
        hoursContainer.classList.add("paragraph-container")
        main.appendChild(hoursContainer)

        const hourEl = document.createElement("h2")
        hourEl.classList.add("home-tab-bottom")
        hourEl.innerHTML = "Hours";

        const sceduleEl = document.createElement("ul");
        sceduleEl.innerHTML = "Sunday: 8am - 8pm <br> Monday: 6am - 6pm <br> Tuesday 6am - 6pm"

        hoursContainer.appendChild(hourEl);
        hoursContainer.appendChild(sceduleEl)

        //Third paragraph
        const locationContainer = document.createElement("div");
        locationContainer.classList.add("paragraph-container")
        main.appendChild(locationContainer)

        const locationEl = document.createElement("h2");
        locationEl.innerHTML = "Location";
        locationEl.classList.add("home-tab-bottom")
        locationContainer.appendChild(locationEl)

        const adressEl = document.createElement("p")
        adressEl.innerHTML = "123 Forest Drive, Forestville, Maine"
        locationContainer.appendChild(adressEl)

    }
    return{
        createHomeElements
    }
})()
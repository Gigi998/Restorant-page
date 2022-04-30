export const menuTab = (() => {

    function createMenuElements(){

        const main = document.createElement("div");
        main.classList.add("home-content");
        document.querySelector(".content").appendChild(main)

        const title = document.createElement("h1");
        title.innerHTML = "Menu";
        title.classList.add("home-title")
        main.appendChild(title);

        // First dish
        const meal1 = document.createElement("div");
        meal1.classList.add("paragraph-container")
        main.appendChild(meal1)

        const meal1Name = document.createElement("h2");
        meal1Name.innerHTML = "Toast and Jam";
        meal1.appendChild(meal1Name)

        const meal1Discription = document.createElement("p")
        meal1Discription.innerHTML = "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam."
        meal1.appendChild(meal1Discription)

        const meal1Price = document.createElement("div");
        meal1Price.innerHTML = "2$";
        meal1.appendChild(meal1Price)

        const meal1Image = document.createElement("img");
        meal1Image.src = "../src/images/toast_jam.jpeg";
        meal1.appendChild(meal1Image);

        //Second dish
        const meal2 = document.createElement("div");
        meal2.classList.add("paragraph-container")
        main.appendChild(meal2)

        const meal2Name = document.createElement("h2");
        meal2Name.innerHTML = "Pancakes";
        meal2.appendChild(meal2Name)

        const meal2Discription = document.createElement("p")
        meal2Discription.innerHTML = "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup."
        meal2.appendChild(meal2Discription)

        const meal2Price = document.createElement("div");
        meal2Price.innerHTML = "4$";
        meal2.appendChild(meal2Price)

        const meal2Image = document.createElement("img");
        meal2Image.src = "../src/images/pancakes.jpeg";
        meal2.appendChild(meal2Image);

        //Third dist
        const meal3 = document.createElement("div");
        meal3.classList.add("paragraph-container")
        main.appendChild(meal3)

        const meal3Name = document.createElement("h2");
        meal3Name.innerHTML = "Bagel and lox";
        meal3.appendChild(meal3Name)

        const meal3Discription = document.createElement("p")
        meal3Discription.innerHTML = "Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon."
        meal3.appendChild(meal3Discription)

        const meal3Price = document.createElement("div");
        meal3Price.innerHTML = "6$";
        meal3.appendChild(meal3Price)

        const meal3Image = document.createElement("img");
        meal3Image.src = "../src/images/lox.jpeg";
        meal3.appendChild(meal3Image);
    }

    return{
        createMenuElements
    }
})();
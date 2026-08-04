const cards = document.querySelectorAll(".product1");

cards.forEach((card) => {

    card.addEventListener("click", () => {

        if (card.classList.contains("active")) {
            card.classList.remove("active");
            return;
        }

        cards.forEach((item) => {
            item.classList.remove("active");
        });

        card.classList.add("active");

    });

});
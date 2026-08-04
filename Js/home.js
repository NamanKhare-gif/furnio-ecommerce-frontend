//Goblal variables
const cartBtn = document.querySelector(".cart-btn");
const cartBtns = document.querySelector(".cart-btns ");
const checkout = document.querySelector(".checkout-btn ");      
const cartDrawer = document.querySelector(".cart-drawer");
const cartOverlay = document.querySelector(".cart-overlay");
const closeCart = document.querySelector(".close-cart");
const deleteBtns = document.querySelectorAll(".delete-item");
const navLinks = document.querySelectorAll(".nav ul li a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

function openCart() {
    cartDrawer.classList.add("active");
    cartOverlay.classList.add("active");
    document.body.classList.add("no-scroll");
}

if (cartBtn) {
    cartBtn.addEventListener("click", openCart);
}

if (checkout) {
    checkout.addEventListener("click", () => {
        window.location.href = "checkout.html";
    });
}

if (cartBtns) {
    cartBtns.addEventListener("click", () => {
        window.location.href = "cart.html";
    });
}

if (closeCart) {
    closeCart.addEventListener("click", closeCartDrawer);
}

if (cartOverlay) {
    cartOverlay.addEventListener("click", closeCartDrawer);
}

function closeCartDrawer() {

    cartDrawer.classList.remove("active");
    cartOverlay.classList.remove("active");

    document.body.classList.remove("no-scroll");

}

cartBtn.addEventListener("click", openCart);

closeCart.addEventListener("click", closeCartDrawer);

cartOverlay.addEventListener("click", closeCartDrawer);

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        closeCartDrawer();

    }

});

deleteBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

        btn.parentElement.remove();

    });

});
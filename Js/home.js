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
const slider = document.querySelector(".hero-slider");
const slides = document.querySelectorAll(".hero-slider img");
const prevBtn = document.querySelector(".hero-prev");
const nextBtn = document.querySelector(".hero-next");
let currentSlide = 0;
let autoSlide = null;
const totalSlides = slides.length;

function showSlide(index) {
    currentSlide = index;
    slider.style.transform =
        `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    showSlide(currentSlide);
}

function startAutoSlide() {
    autoSlide = setInterval(() => {
        nextSlide();
    }, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = null;
}

nextBtn.addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
});

prevBtn.addEventListener("click", () => {
    stopAutoSlide();
    previousSlide();
});

slides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
        stopAutoSlide();
        showSlide(index);
    });
});

showSlide(0);

startAutoSlide();

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
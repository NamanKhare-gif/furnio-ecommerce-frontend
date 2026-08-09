// ================================
// GLOBAL
// ================================

const cartBtn = document.querySelector(".cart-btn");
const cartBtns = document.querySelector(".cart-btns");
const checkout = document.querySelector(".checkout-btn");
const cartDrawer = document.querySelector(".cart-drawer");
const cartOverlay = document.querySelector(".cart-overlay");
const closeCart = document.querySelector(".close-cart");
const deleteBtns = document.querySelectorAll(".delete-item");
const navLinks = document.querySelectorAll(".nav ul li a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});

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
    }, 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = null;
}

if (slider && slides.length > 0) {
    showSlide(0);
    startAutoSlide();

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            stopAutoSlide();
            nextSlide();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            stopAutoSlide();
            previousSlide();
        });
    }

    slides.forEach((slide, index) => {
        slide.addEventListener("click", () => {
            stopAutoSlide();
            showSlide(index);
        });
    });
}

function openCart() {
    if (!cartDrawer || !cartOverlay) return;
    cartDrawer.classList.add("active");
    cartOverlay.classList.add("active");
    document.body.classList.add("no-scroll");
}

function closeCartDrawer() {
    if (!cartDrawer || !cartOverlay) return;
    cartDrawer.classList.remove("active");
    cartOverlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
}

if (cartBtn) {
    cartBtn.addEventListener("click", openCart);
}

if (closeCart) {
    closeCart.addEventListener("click", closeCartDrawer);
}

if (cartOverlay) {
    cartOverlay.addEventListener("click", closeCartDrawer);
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeCartDrawer();
    }
});

if (cartBtns) {
    cartBtns.addEventListener("click", () => {
        window.location.href = "cart.html";
    });
}

if (checkout) {
    checkout.addEventListener("click", () => {
        window.location.href = "checkout.html";
    });
}

deleteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.parentElement.remove();
    });
});
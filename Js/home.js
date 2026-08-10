// ============================================================
// FURNIO - GLOBAL JAVASCRIPT
// ============================================================


// ============================================================
// GLOBAL ELEMENTS
// ============================================================

const cartBtn = document.querySelector(".cart-btn");
const cartBtns = document.querySelector(".cart-btns");
const checkout = document.querySelector(".checkout-btn");

const cartDrawer = document.querySelector(".cart-drawer");
const cartOverlay = document.querySelector(".cart-overlay");
const closeCart = document.querySelector(".close-cart");

const deleteBtns = document.querySelectorAll(".delete-item");

const navLinks = document.querySelectorAll(".nav ul li a");

const currentPage = window.location.pathname.split("/").pop();


// ============================================================
// NAVBAR - ACTIVE PAGE
// ============================================================

navLinks.forEach((link) => {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }

});


// ============================================================
// BENEFITS SLIDER
// ============================================================

const benefitsContent =
    document.querySelector(".benefits-content");

const benefitItems =
    document.querySelectorAll(".item-1");

const benefitsPrevBtn =
    document.querySelector(".prev-btn");

const benefitsNextBtn =
    document.querySelector(".next-btn");

const visibleItems = 4;

const totalBenefitItems =
    benefitItems.length;

const maxBenefitIndex =
    totalBenefitItems - visibleItems;

let currentBenefitIndex = 0;

let benefitsAutoScroll = null;


// ============================================================
// MOVE BENEFITS SLIDER
// ============================================================

function moveBenefitsSlider() {

    if (!benefitsContent || benefitItems.length === 0) {
        return;
    }

    const itemWidth =
        benefitItems[0].offsetWidth;

    benefitsContent.style.transform =
        `translateX(-${currentBenefitIndex * itemWidth}px)`;
}


// ============================================================
// NEXT BENEFITS SLIDE
// ============================================================

function nextBenefitsSlide() {

    if (!benefitsContent || benefitItems.length === 0) {
        return;
    }


    // --------------------------------------------
    // Move to next item
    // --------------------------------------------

    if (currentBenefitIndex < maxBenefitIndex) {

        currentBenefitIndex++;

        moveBenefitsSlider();

    }

    // --------------------------------------------
    // Last item reached
    // Start again from first item
    // --------------------------------------------

    else {

        currentBenefitIndex = 0;

        /*
            Remove transition temporarily.

            This prevents the slider from moving
            backward through all the items.
        */

        benefitsContent.style.transition = "none";

        moveBenefitsSlider();


        /*
            Enable transition again.
        */

        requestAnimationFrame(() => {

            requestAnimationFrame(() => {

                benefitsContent.style.transition =
                    "transform 0.6s ease";

            });

        });

    }

}


// ============================================================
// PREVIOUS BENEFITS SLIDE
// ============================================================

function previousBenefitsSlide() {

    if (!benefitsContent || benefitItems.length === 0) {
        return;
    }


    if (currentBenefitIndex > 0) {

        currentBenefitIndex--;

        moveBenefitsSlider();

    }

}


// ============================================================
// START BENEFITS AUTO SCROLL
// ============================================================

function startBenefitsAutoScroll() {

    if (!benefitsContent || benefitItems.length === 0) {
        return;
    }

    benefitsAutoScroll = setInterval(() => {

        nextBenefitsSlide();

    }, 2500);

}


// ============================================================
// STOP BENEFITS AUTO SCROLL
// ============================================================

function stopBenefitsAutoScroll() {

    if (benefitsAutoScroll) {

        clearInterval(benefitsAutoScroll);

        benefitsAutoScroll = null;

    }

}


// ============================================================
// BENEFITS - NEXT BUTTON
// ============================================================

if (benefitsNextBtn) {

    benefitsNextBtn.addEventListener("click", () => {

        stopBenefitsAutoScroll();

        nextBenefitsSlide();

    });

}


// ============================================================
// BENEFITS - PREVIOUS BUTTON
// ============================================================

if (benefitsPrevBtn) {

    benefitsPrevBtn.addEventListener("click", () => {

        stopBenefitsAutoScroll();

        previousBenefitsSlide();

    });

}


// ============================================================
// BENEFITS - CLICK ON CONTENT
// ============================================================

benefitItems.forEach((item) => {

    item.addEventListener("click", () => {

        stopBenefitsAutoScroll();

    });

});


// ============================================================
// START BENEFITS SLIDER
// ============================================================

if (
    benefitsContent &&
    benefitItems.length > 0
) {

    moveBenefitsSlider();

    startBenefitsAutoScroll();

}


// ============================================================
// HERO SLIDER
// ============================================================

const heroSlider =
    document.querySelector(".hero-slider");

const heroSlides =
    document.querySelectorAll(".hero-slider img");

const heroPrevBtn =
    document.querySelector(".hero-prev");

const heroNextBtn =
    document.querySelector(".hero-next");

let currentHeroSlide = 0;

let heroAutoSlide = null;

const totalHeroSlides =
    heroSlides.length;


// ============================================================
// SHOW HERO SLIDE
// ============================================================

function showHeroSlide(index) {

    if (!heroSlider || heroSlides.length === 0) {
        return;
    }

    currentHeroSlide = index;

    heroSlider.style.transform =
        `translateX(-${currentHeroSlide * 100}%)`;

}


// ============================================================
// NEXT HERO SLIDE
// ============================================================

function nextHeroSlide() {

    if (!heroSlider || heroSlides.length === 0) {
        return;
    }

    currentHeroSlide++;


    if (currentHeroSlide >= totalHeroSlides) {

        currentHeroSlide = 0;

    }


    showHeroSlide(currentHeroSlide);

}


// ============================================================
// PREVIOUS HERO SLIDE
// ============================================================

function previousHeroSlide() {

    if (!heroSlider || heroSlides.length === 0) {
        return;
    }

    currentHeroSlide--;


    if (currentHeroSlide < 0) {

        currentHeroSlide =
            totalHeroSlides - 1;

    }


    showHeroSlide(currentHeroSlide);

}


// ============================================================
// START HERO AUTO SLIDE
// ============================================================

function startHeroAutoSlide() {

    if (!heroSlider || heroSlides.length === 0) {
        return;
    }

    heroAutoSlide = setInterval(() => {

        nextHeroSlide();

    }, 3000);

}


// ============================================================
// STOP HERO AUTO SLIDE
// ============================================================

function stopHeroAutoSlide() {

    if (heroAutoSlide) {

        clearInterval(heroAutoSlide);

        heroAutoSlide = null;

    }

}


// ============================================================
// HERO - NEXT BUTTON
// ============================================================

if (heroNextBtn) {

    heroNextBtn.addEventListener("click", () => {

        stopHeroAutoSlide();

        nextHeroSlide();

    });

}


// ============================================================
// HERO - PREVIOUS BUTTON
// ============================================================

if (heroPrevBtn) {

    heroPrevBtn.addEventListener("click", () => {

        stopHeroAutoSlide();

        previousHeroSlide();

    });

}


// ============================================================
// HERO - CLICK ON IMAGE
// ============================================================

heroSlides.forEach((slide, index) => {

    slide.addEventListener("click", () => {

        stopHeroAutoSlide();

        showHeroSlide(index);

    });

});


// ============================================================
// START HERO SLIDER
// ============================================================

if (
    heroSlider &&
    heroSlides.length > 0
) {

    showHeroSlide(0);

    startHeroAutoSlide();

}


// ============================================================
// CART DRAWER - OPEN
// ============================================================

function openCart() {

    if (!cartDrawer || !cartOverlay) {
        return;
    }

    cartDrawer.classList.add("active");

    cartOverlay.classList.add("active");

    document.body.classList.add("no-scroll");

}


// ============================================================
// CART DRAWER - CLOSE
// ============================================================

function closeCartDrawer() {

    if (!cartDrawer || !cartOverlay) {
        return;
    }

    cartDrawer.classList.remove("active");

    cartOverlay.classList.remove("active");

    document.body.classList.remove("no-scroll");

}


// ============================================================
// CART BUTTON
// ============================================================

if (cartBtn) {

    cartBtn.addEventListener("click", openCart);

}


// ============================================================
// CLOSE CART BUTTON
// ============================================================

if (closeCart) {

    closeCart.addEventListener(
        "click",
        closeCartDrawer
    );

}


// ============================================================
// CART OVERLAY
// ============================================================

if (cartOverlay) {

    cartOverlay.addEventListener(
        "click",
        closeCartDrawer
    );

}


// ============================================================
// ESCAPE KEY - CLOSE CART
// ============================================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeCartDrawer();

    }

});


// ============================================================
// GO TO CART PAGE
// ============================================================

if (cartBtns) {

    cartBtns.addEventListener("click", () => {

        window.location.href = "cart.html";

    });

}


// ============================================================
// GO TO CHECKOUT PAGE
// ============================================================

if (checkout) {

    checkout.addEventListener("click", () => {

        window.location.href = "checkout.html";

    });

}


// ============================================================
// DELETE CART ITEM
// ============================================================

deleteBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

        btn.parentElement.remove();

    });

});
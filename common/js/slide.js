const slides = document.querySelector(".hero-slides");
const slideItems = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".hero-dot");
const prevButton = document.querySelector(".hero-prev");
const nextButton = document.querySelector(".hero-next");

let currentSlide = 0;
let autoSlide;

function showSlide(index) {
    if (index < 0) {
        currentSlide = slideItems.length - 1;
    } else if (index >= slideItems.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    slides.style.transform =
        `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle(
            "active",
            index === currentSlide
        );
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

nextButton.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
});

prevButton.addEventListener("click", () => {
    previousSlide();
    resetAutoSlide();
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
        resetAutoSlide();
    });
});

/* Touch swipe */

let touchStartX = 0;
let touchEndX = 0;

const slider = document.querySelector(".hero-slider");

slider.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].screenX;
});

slider.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches[0].screenX;

    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) > 50) {
        if (swipeDistance < 0) {
            nextSlide();
        } else {
            previousSlide();
        }

        resetAutoSlide();
    }
});

showSlide(0);
startAutoSlide();

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
let slideIndex = {
    automotiveGallery: 1,
    portraitGallery: 1
};

function plusSlides(n, gallery) {
    showSlides(slideIndex[gallery] += n, gallery);
}

function showSlides(n, gallery) {
    let slides = document.getElementById(gallery).getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex[gallery] = 1; }
    if (n < 1) { slideIndex[gallery] = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex[gallery] - 1].style.display = "block";  
}

// Initialize the first slide for each gallery
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex['automotiveGallery'], 'automotiveGallery');
    showSlides(slideIndex['portraitGallery'], 'portraitGallery');
});

// ... your existing functions ...

function setupSwipeListeners(galleryId) {
    let touchstartX = 0;
    let touchendX = 0;
    
    const gallery = document.getElementById(galleryId);

    gallery.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    }, false);

    gallery.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        handleSwipe(galleryId);
    }, false); 

    function handleSwipe(galleryId) {
        if (touchendX < touchstartX) {
            plusSlides(1, galleryId);
        }
        if (touchendX > touchstartX) {
            plusSlides(-1, galleryId);
        }
    }
}

// Initialize the first slide for each gallery and set up swipe listeners
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex['automotiveGallery'], 'automotiveGallery');
    setupSwipeListeners('automotiveGallery');
    showSlides(slideIndex['portraitGallery'], 'portraitGallery');
    setupSwipeListeners('portraitGallery');
});


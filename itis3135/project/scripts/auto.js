function loadAutomotiveImages() {
    const startImage = 4905;
    const endImage = 4977; 
    const basePath = 'auto/IMG_'; 

    const container = document.getElementById('automotiveGallery');
    for (let i = startImage; i <= endImage; i++) {
        let slide = document.createElement('div');
        slide.className = 'mySlides fade';

        const img = document.createElement('img');
        img.src = `${basePath}${i}.jpg`;
        slide.appendChild(img);
        
        container.appendChild(slide);
    }
}

document.addEventListener('DOMContentLoaded', loadAutomotiveImages);





const images = [
    { src: './images/sliders/hero/one.jpg', alt: 'Example Image 1' },
    { src: './images/sliders/hero/two.jpg', alt: 'Example Image 2' },
    { src: './images/sliders/hero/three.jpg', alt: 'Example Image 3' }
];

images.forEach(image => {
    const imageContainer = document.getElementById('hero-slide-img');
    imageContainer.src = image.src;
    imageContainer.alt = image.alt;
});
const slider = document.getElementById('myRange');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const  imagesContainer = document.getElementById('images');

let heartsFell = false;

slider.addEventListener('input', function() {
    const value = Number(slider.value);
    const containerWidth = imagesContainer.offsetWidth;
    const imgWidth = img1.offsetWidth;
    const maxDis = (containerWidth - imgWidth * 2) / 2;
    const distance = maxDis * (value / 100);

    img1.style.transform = `translateX(${distance}px)`;
    img2.style.transform = `translateX(${-distance}px)`;

    if (value == 100) {
        heartsFell = true;
        for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createFallingHeart();
        }, i * 150);
    }
    }
    if (value < 100) {
        heartsFell = false;
    }
});

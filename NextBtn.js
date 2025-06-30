function showLongParagraph() {
document.getElementById('nextBtn').addEventListener('click', function() {
    document.getElementById('mainDiv').classList.add('hidden');
    const longParagraph = document.getElementById('longParagraph');
    longParagraph.classList.remove('hidden');
    document.body.style.background = 'pink'
    longParagraph.classList.add('pink-bg')

    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createFallingHeart();
        }, i * 150);
    }
});
}

function createFallingHeart() {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 95 + 'vw';
    heart.style.fontSize = (1.5 + Math.random() * 2.5) + 'rem';
   heart.style.transform = `rotate(${Math.random() * 360}deg)`;

   document.getElementById('hearts-container').appendChild(heart);

   heart.addEventListener('animationend', () => {
    heart.remove();
   });
}

document.getElementById('nextBtn').addEventListener('click', showLongParagraph);
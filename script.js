const sparklesContainer = document.querySelector('.sparkles');

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    const size = Math.random() * 6 + 5; // Random size between 5 and 10px
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;

    sparkle.style.left = `${Math.random() * window.innerWidth}px`; // Random horizontal position
    sparkle.style.top = `${Math.random() * window.innerHeight}px`; // Random vertical position

    sparklesContainer.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1500); // Sparkle disappears after the animation duration
}

setInterval(createSparkle, 100); // Create a sparkle every 100 milliseconds

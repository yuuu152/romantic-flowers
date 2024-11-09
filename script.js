function showMessage() {
    const message = document.getElementById("message");
    message.classList.add("show");
    createFallingHearts();
}

function createFallingHearts() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = "💖";
        heart.style.left = `${Math.random() * 100}vw`;  // Random horizontal position
        heart.style.animationDuration = `${3 + Math.random() * 2}s`;  // Random duration for each heart
        document.body.appendChild(heart);

        // Remove heart after animation completes to avoid DOM clutter
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}

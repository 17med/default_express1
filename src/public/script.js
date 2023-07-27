const h1 = document.querySelector(".neon-effect");

function toggleColor() {
    h1.classList.toggle("neon-effect");
}

setInterval(toggleColor, 1500); // Toggle the class every 2 seconds (2000 milliseconds)

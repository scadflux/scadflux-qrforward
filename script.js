// List of SVG assets
const assets = ['arch', 'box', 'cube', 'house', 'star', 'steps'];

// Select a random asset from the list
const randomAsset = assets[Math.floor(Math.random() * assets.length)];

// Set the SVG source based on the selected asset
const logo = document.querySelector('.spinner img');
logo.src = `assets/${randomAsset}.svg`;

// After 2-3 seconds, redirect the user to the new domain
setTimeout(() => {
    window.location.href = 'https://bento.me/scadflux';
}, 3000); // Adjust the timeout value as needed (in milliseconds)

// After the animation completes, hide the loading screen
const loadingScreen = document.querySelector('.loading-screen');
loadingScreen.addEventListener('animationend', () => {
    loadingScreen.classList.add('invisible');
});
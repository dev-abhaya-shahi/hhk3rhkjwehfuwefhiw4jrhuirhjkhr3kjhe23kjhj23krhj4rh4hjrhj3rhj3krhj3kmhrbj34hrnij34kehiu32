// script.js
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('movingButton');

    function moveButton() {
        const maxX = window.innerWidth - button.offsetWidth;
        const maxY = window.innerHeight - button.offsetHeight;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        button.style.position = 'absolute';
        button.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }

    button.addEventListener('mouseover', moveButton);
    button.addEventListener('touchstart', (e) => {
        e.preventDefault();  // Prevent touch triggering other events like click
        moveButton();
    });
});








// Random stop between 30% and 80%
let randomStop = Math.random() * (0.8 - 0.3) + 0.3;

let tl = gsap.timeline();

tl
 .to(".text", {
  duration: 2,
  text: "npm install portfolio@latest"
 })
 .from(".progress-bar", {
  duration: 0.5,
  opacity: 0
 })
 .to(".progress", {
  duration: 1,
  width: `${randomStop * 100}%`
 })
 .to(".progress", {
  duration: 1 - randomStop,
  width: "100%"
 })
 .to(".text, .progress-bar", {
  duration: 0.5,
  opacity: 0
 })
 .to(".preloader", {
  duration: 0.5,
  height: 0,
  onComplete: () => {
   document.querySelector(".preloader").style.display = "none";
  }
 });

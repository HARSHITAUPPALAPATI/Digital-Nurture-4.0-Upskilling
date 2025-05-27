// Toggle mobile menu
document.getElementById("menu-toggle").addEventListener("click", function () {
  const nav = document.querySelector("#nav-container nav");
  nav.classList.toggle("show");
});

// Auto-resize video on screen size change
const video = document.querySelector("video");
function resizeVideo() {
  if (window.innerWidth < 600) {
    video.width = 280;
  } else {
    video.width = 400;
  }
}
resizeVideo();
window.addEventListener("resize", resizeVideo);

// Form submission feedback
const form = document.querySelector("form");
const output = document.querySelector("output");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  output.textContent = "✅ Thank you! We’ll contact you soon.";
  output.style.color = "green";
});

// Fill heart icon on click
const iconHeart = document.querySelectorAll(".icon-heart");

iconHeart.forEach(icon => {
  icon.onclick = () => {
    icon.classList.toggle("filled");
  };
});

// Scroll Reveal
ScrollReveal().reveal('.card', { delay: 200, reset: true });
ScrollReveal().reveal('.card .date', { delay: 300, reset: true });
ScrollReveal().reveal('.card h2', { delay: 400, reset: true });
ScrollReveal().reveal('.card p', { delay: 500, reset: true });
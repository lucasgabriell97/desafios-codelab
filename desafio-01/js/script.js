// Fill heart icon on click
const iconHeart = document.querySelectorAll(".icon-heart");

iconHeart.forEach(icon => {
  icon.onclick = () => {
    icon.classList.toggle("filled");
  };
});

// Scroll Reveal
ScrollReveal().reveal('.card', { delay: 200, reset: true });
ScrollReveal().reveal('.date', { delay: 300, reset: true });
ScrollReveal().reveal('h2', { delay: 400, reset: true });
ScrollReveal().reveal('p', { delay: 500, reset: true });
ScrollReveal().reveal('footer', { delay: 600, reset: true });
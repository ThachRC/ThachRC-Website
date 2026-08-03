document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const button = document.getElementById("exploreBtn");

  hero.style.opacity = "0";
  hero.style.transition = "opacity 0.8s ease";
  requestAnimationFrame(() => {
    hero.style.opacity = "1";
  });

  button.addEventListener("click", (e) => {
    e.preventDefault();
    button.style.transform = "scale(0.95)";
    setTimeout(() => {
      button.style.transform = "";
      hero.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      hero.style.opacity = "0";
      hero.style.transform = "scale(0.92)";
      setTimeout(() => {
        window.location.href = "projects.html";
      }, 420);
    }, 150);
  });
});

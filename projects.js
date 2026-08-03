document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("backBtn");

  backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.style.opacity = "0";
    document.body.style.transform = "scale(0.98)";
    document.body.style.transition = "opacity 0.35s ease, transform 0.35s ease";
    setTimeout(() => {
      window.location.href = "index.html";
    }, 360);
  });

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      card.style.transform = "scale(0.97)";
      setTimeout(() => {
        card.style.transform = "";
      }, 150);
    });
  });

  document.querySelectorAll(".card-link").forEach((card) => {
    card.addEventListener("click", (e) => {
      e.preventDefault();
      const target = card.getAttribute("href");
      document.body.style.opacity = "0";
      document.body.style.transform = "scale(0.98)";
      document.body.style.transition = "opacity 0.35s ease, transform 0.35s ease";
      setTimeout(() => {
        window.location.href = target;
      }, 360);
    });
  });
});

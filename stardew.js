document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("backBtn");

  backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.style.opacity = "0";
    document.body.style.transform = "scale(0.98)";
    document.body.style.transition = "opacity 0.35s ease, transform 0.35s ease";
    setTimeout(() => {
      window.location.href = "projects.html";
    }, 360);
  });
});

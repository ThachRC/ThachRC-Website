document.addEventListener("DOMContentLoaded", () => {
  const layer = document.getElementById("pixelLayer");
  if (!layer) return;

  const colors = ["#ff6ec4", "#4facfe", "#a78bfa", "#7b2ff7"];
  const sizes = [4, 6, 8];

  for (let i = 0; i < 16; i++) {
    const pixel = document.createElement("span");
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    const duration = 12 + Math.random() * 12;
    const delay = Math.random() * 16;

    pixel.className = "pixel-block";
    pixel.style.width = size + "px";
    pixel.style.height = size + "px";
    pixel.style.left = Math.random() * 100 + "vw";
    pixel.style.background = colors[Math.floor(Math.random() * colors.length)];
    pixel.style.animationDuration = duration + "s";
    pixel.style.animationDelay = delay + "s";
    pixel.style.setProperty("--drift", (Math.random() * 80 - 40).toFixed(0) + "px");

    layer.appendChild(pixel);
  }
});

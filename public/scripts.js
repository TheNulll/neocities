// Apply random colors to each blog link
const links = document.querySelectorAll(".blog-links a");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

links.forEach((link) => {
  link.style.color = getRandomColor();
});

// Position images randomly inside .stuff without overlapping the title
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".the-other-left .stuff img");
  const container = document.querySelector(".stuff");

  if (!container) {
    console.error('Container ".stuff" not found!');
    return;
  }

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  images.forEach((img) => {
    img.style.position = "absolute";
    img.style.zIndex = "1";

    const width = img.offsetWidth || 100;
    const height = img.offsetHeight || 40;

    let x = getRandom(0, containerWidth - width);
    let y = getRandom(45, containerHeight - height); // Avoid top area

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    const rotate = getRandom(-20, 20);
    img.style.transform = `rotate(${rotate}deg)`;
  });
});

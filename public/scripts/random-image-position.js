document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".the-other-left .stuff img"); // get the images from the right place
  const container = document.querySelector(".stuff"); // place where the images will be assigned

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
    let y = getRandom(50, containerHeight - height - 50); // 50 to avoid the titles

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    const rotate = getRandom(-20, 20);
    img.style.transform = `rotate(${rotate}deg)`;
  });
});

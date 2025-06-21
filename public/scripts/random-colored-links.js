const links = document.querySelectorAll(".blog-links a");

function getRandomColor() { // generates a hex color
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
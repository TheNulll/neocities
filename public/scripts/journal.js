let entries = [];

fetch("../lib/entries.json")
  .then((res) => res.json())
  .then((data) => {
    entries = data;
    showAll();
  });

function render(list) {
  const container = document.getElementById("entries");
  container.innerHTML = "";

  list.forEach((entry) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <a href="${"entries/" + entry.url}" class="link-entry">
      <article class="entry">  
          <h2>${entry.title}</h2>
          <small>${entry.date}</small>
          <p>${entry.excerpt}</p>
      </article>
    </a>
    `;
    container.appendChild(div);
  });
}

function showAll() {
  const sorted = [...entries].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  render(sorted);
}

function showNewest() {
  const sorted = [...entries].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  render(sorted);
}

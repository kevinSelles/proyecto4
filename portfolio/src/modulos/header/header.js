import "./header.css";

export function getHeader() {

  const header = document.createElement("header");

  const title = document.createElement("h1");
  title.textContent = "KevinFy Webs";

  const slogan = document.createElement("h2");
  slogan.textContent = "Creatividad humana, páginas únicas";

  header.appendChild(title);
  header.appendChild(slogan);

  header.style.display = "none";

  return header;
}
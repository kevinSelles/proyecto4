import "./header.css";

export function getHeader() {

  const header = document.createElement("header");
  const title = document.createElement("h1");
  title.textContent = "KevinFy Webs";

  header.appendChild(title);

  header.style.display = "none";

  return header;
}
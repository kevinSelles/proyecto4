import "./sobreMi.css"

export function getSobreMi() {

  const container = document.createElement("div");
  container.classList.add("sobre-mi-content")

  const img = document.createElement("img");
  img.src = "./assets/avatar-photos/sobre-mi.webp";

  const textContainer = document.createElement("div");
  textContainer.classList.add("sobre-mi-texto");

  const title = document.createElement("h2");
  title.textContent = "Sobre mí";
  
  const parrafos ["¡Hola! soy Kevin"]
  const text = document.createElement("p");
  text.textContent = ;
  
  textContainer.appendChild(title);
  textContainer.appendChild(text);

  container.appendChild(img);
  container.appendChild(textContainer);

  return container;
}
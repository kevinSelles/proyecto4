import "./experienciaLaboral.css";

export function getExperienciaLaboral() {

  const content = document.createElement("div");
  content.classList.add("experiencia-laboral-content");

  const img = document.createElement("img");
  img.src = "./assets/avatar-photos/experiencia-laboral.webp";

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("experiencia-laboral-main");

  const title = document.createElement("h2");
  title.textContent = "Experiencia laboral";

  const paragraph = document.createElement("p");
  paragraph.textContent = "Aún no tengo experiencia laboral como programador, pero me encantaria empezar. Podrías ser tú quien me dé mi primera oportunidad";

  mainContainer.appendChild(title);
  mainContainer.appendChild(paragraph);

  content.appendChild(img);
  content.appendChild(mainContainer);

  return content;
}
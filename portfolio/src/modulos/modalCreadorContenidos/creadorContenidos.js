import "./creadorContenidos.css";

export function getCreadorContenido() {

  const container = document.createElement("div");
  container.classList.add("content-creator-content");

  const img = document.createElement("img");
  img.src = "./assets/avatar-photos/creador-contenido.webp";
  img.alt= "Imagen de creador de contenido";

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("content-creator-container");

  const title = document.createElement("h2");
  title.textContent = "Creador de contenido";

  const academicProjectsGallery = document.createElement("div");
  academicProjectsGallery.classList.add("content-creator-gallery");

  container.appendChild(img);
  container.appendChild(mainContainer);

  return container;
}
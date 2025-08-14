import "./proyectosAcademicos.css";

export function getProyectosAcademicos() {
  
  const container = document.createElement("div");
  container.classList.add("academic-projects-content");

  const img = document.createElement("img");
  img.src = "./assets/avatar-photos/proyectos-academicos.webp";
  img.alt= "Imagen de proyectos académicos";

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("academic-projects-container");

  const title = document.createElement("h2");
  title.textContent = "Proyectos Académicos";

  const academicProjectsGallery = document.createElement("div");
  academicProjectsGallery.classList.add("academic-projects-gallery");

  const ScreenShots = [
    {img: "./assets/projects/playstation-store-simulator.webp", title: "Simulador PlayStation Store", text: "Utilizando solo HTML y CSS, recreo la interfaz visible de una tienda PlayStation.", alt: "Previsualizacion del proyecto PlayStation Store.", link: "https://playstationstoresimulator.netlify.app/"},
    {img: "./assets/projects/pinterest-simulator.webp", title: "Simulador Pinterest", text: "Utilizando HTML, CSS y JavaScript Vanilla, desarrollo una simulación de Pinterest con botones de búsqueda funcionales y consumo de APIs externas para generar imágenes dinámicas.", alt: "Previsualizacion del proyecto Simulador de Pinterest.", link: "https://pinterestsimulator.netlify.app/"},
    {img: "./assets/projects/enciclopedia-marvel.webp", title: "Enciclopedia Marvel", text: "Utilizando HTML, CSS y JavaScript Vanilla, desarrollo una enciclopedia interactiva de personajes Marvel con filtros de búsqueda y modales emergentes para mostrar información detallada.", alt: "Previsualización del proyecto Enciclopedia Marvel.", link: "https://enciclopediamarvel.netlify.app/"}
  ]

  for(const screenShot of ScreenShots) {

    const imgContainer = document.createElement("div")

    const imgTitle = document.createElement("h3");
    imgTitle.textContent = screenShot.title;

    const previewImg = document.createElement("img");
    previewImg.src = screenShot.img;
    previewImg.alt = screenShot.alt;

    const imgText = document.createElement("p");
    imgText.textContent = screenShot.text;

    previewImg.addEventListener("click", () => {
      window.open(screenShot.link, "_blank");
    });

    imgContainer.appendChild(imgTitle);
    imgContainer.appendChild(previewImg);
    imgContainer.appendChild(imgText);

    academicProjectsGallery.appendChild(imgContainer);
  }

  mainContainer.appendChild(title);
  mainContainer.appendChild(academicProjectsGallery);

  container.appendChild(img);
  container.appendChild(mainContainer);
  
  return container;
}
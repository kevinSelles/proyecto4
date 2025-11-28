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
    {img: "./assets/projects/comiquea.webp", title: `Comiquea
      Web de cómics`, text: `La web es un organizador de lectura de cómics, con registro y login de usuarios que podrán dejar opiniones de cada cómic, crear listas de sus cómics favoritos, los que tienen, los leídos, los que quieren comprar... Además, también sirve como enciclopedia de cómics, ya que utiliza una base de datos cuya información crece de forma orgánica gracias a los aportes de los propios usuarios, quienes pueden añadir nuevos cómics y modificar los datos de los ya existentes.

      Frontend: HTML, CSS, React y JavaScript.
      Backend: Node.js, Express y MongoDB Atlas.`, alt: "Previsualizacion del proyecto Comiquea, la web de cómics.", link: "https://comiquea.vercel.app/"},
    {img: "./assets/projects/tvstars.webp", title: `Juego de cartas
      TV STARS Battle Cards`, text: `Videojuego de cartas que combina combate y estrategia mediante un sistema de comparación de ataque y defensa para decidir qué jugador conquista cada casilla del tablero. Incluye ilustraciones de personajes famosos y un diseño propio de cartas realizado en Canva.
      Tecnologías utilizadas: HTML, CSS, React y JavaScript.`, alt: "Previsualizacion del proyecto Juego de cartas TV STARS Battle Cards.", link: "https://tvstarsbattle.vercel.app/"},
    {img: "./assets/projects/enciclopedia-marvel.webp", title: "Enciclopedia Marvel", text: `Enciclopedia interactiva de personajes Marvel, con filtros de búsqueda por categorías y ventanas emergentes para mostrar información más detallada de cada uno.
      Tecnologías utilizadas: HTML, CSS y JavaScript Vanilla.`, alt: "Previsualización del proyecto Enciclopedia Marvel.", link: "https://enciclopediamarvel.netlify.app/"}
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

    imgContainer.addEventListener("click", () => {
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
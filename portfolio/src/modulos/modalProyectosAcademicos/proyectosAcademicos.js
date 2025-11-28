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
    {img: "./assets/projects/splishsplash.webp", title: "Evento Splish Splash Cádiz", text: `Web que simula un evento de verano con diferentes actividades de playa. Incluye registro y login de usuarios, conexión a una base de datos que guarda las actividades a las que los usuarios pueden apuntarse o borrarse si ya estaban apuntados, formulario de contacto, galería de fotos con Cloudinary y un formulario para que los administradores puedan publicar nuevas actividades o modificar las existentes.

      Tecnologías utilizadas:
      Frontend con HTML, CSS y JavaScript Vanilla.
      Backend con Node.js, Express y MongoDB Atlas.`, alt: "Previsualización del proyecto Enciclopedia Marvel.", link: "https://splish-splash-cadiz.vercel.app/"},
    {img: "./assets/projects/tvstars.webp", title: `Juego de cartas
      TV STARS Battle Cards`, text: `Videojuego de cartas que combina combate y estrategia mediante un sistema de comparación de ataque y defensa para decidir qué jugador conquista cada casilla del tablero. Incluye ilustraciones de personajes famosos y un diseño propio de cartas realizado en Canva.

      Tecnologías utilizadas: HTML, CSS, React y JavaScript.`, alt: "Previsualizacion del proyecto Juego de cartas TV STARS Battle Cards.", link: "https://tvstarsbattle.vercel.app/"},
    {img: "./assets/projects/enciclopedia-marvel.webp", title: "Enciclopedia Marvel", text: `Enciclopedia interactiva de personajes Marvel, con filtros de búsqueda por categorías y ventanas emergentes para mostrar información más detallada de cada uno.

      Tecnologías utilizadas: HTML, CSS y JavaScript Vanilla.`, alt: "Previsualización del proyecto Enciclopedia Marvel.", link: "https://enciclopediamarvel.netlify.app/"},
    {img: "./assets/projects/kevinfygames.webp", title: "GamesHub", text: `Portal de juegos que contiene tres videojuegos: Simon, Trivial y Tres en Raya. Incluye contadores de puntuación y récord personal, secuencia aleatoria en cada partida de Simon y un fondo animado en la web.

Tecnologías utilizadas: HTML, CSS y JavaScript Vanilla.`, alt: "Previsualización del proyecto KevinFy Games.", link: "https://kevinfygames.netlify.app/"}
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
import "./experienciaLaboral.css";

export function getExperienciaLaboral() {

  const container = document.createElement("div");
  container.classList.add("job-projects-content");

  const img = document.createElement("img");
  img.src = "./assets/avatar-photos/experiencia-laboral.webp";
  img.alt= "Imagen de experiencia laboral";

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("job-projects-container");

  const title = document.createElement("h2");
  title.textContent = "Experiencia laboral";

  const jobProjectsGallery = document.createElement("div");
  jobProjectsGallery.classList.add("job-projects-gallery");

  const ScreenShots = [
    {img: "./assets/projects/comiquea.webp", title: `Comiquea
      Web de cómics`, text: `La web es un organizador de lectura de cómics, con registro y login de usuarios que podrán dejar opiniones de cada cómic, crear listas de sus cómics favoritos, los que tienen, los leídos, los que quieren comprar... Además, también sirve como enciclopedia de cómics, ya que utiliza una base de datos cuya información crece de forma orgánica gracias a los aportes de los propios usuarios, quienes pueden añadir nuevos cómics y modificar los datos de los ya existentes.

      Frontend: HTML, CSS, React y JavaScript.
      Backend: Node.js, Express y MongoDB Atlas.`, alt: "Previsualizacion del proyecto Comiquea, la web de cómics.", link: "https://comiquea.vercel.app/"},
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

    jobProjectsGallery.appendChild(imgContainer);
  }

  mainContainer.appendChild(title);
  mainContainer.appendChild(jobProjectsGallery);

  container.appendChild(img);
  container.appendChild(mainContainer);
  
  return container;
}
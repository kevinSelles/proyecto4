import "./proyectosAcademicos.css";

export function getTitulacion() {
  
  const container = document.createElement("div");
  container.classList.add("titulacion");

  const img = document.createElement("img");
  img.src = "./assets/avatar-photos/graduado.webp";
  img.alt= "Imagen de la graduación";

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("titulacion-container");

  const title = document.createElement("h2");
  title.textContent = "Títulos";

  const titulacionGallery = document.createElement("div");
  academicProjectsGallery.classList.add("titulacion-gallery");

  const ScreenShots = [
    {img: "./assets/titles/frontend.webp", title: "Desarrollador Frontend", text: "Título que acredita mi formación de HTML, CSS, JavaScript y Vite en la escuela The Power, respaldado por la UCAM (Universidad Católica de Murcia). ", alt: "Previsualización del título de Desarrollador Frontend.", link: "https://splish-splash-cadiz.vercel.app/"},
    {img: "./assets/titles/backend.webp", title: "Desarrollador Backend", text: "Título que acredita mi formación de Node, NoSQL y APIs con Express en la escuela The Power, respaldado por la UCAM (Universidad Católica de Murcia). ", alt: "Previsualización del título de Desarrollador Backend.", link: "https://splish-splash-cadiz.vercel.app/"}
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

    titulacionGallery.appendChild(imgContainer);
  }

  mainContainer.appendChild(title);
  mainContainer.appendChild(titulacionGallery);

  container.appendChild(img);
  container.appendChild(mainContainer);
  
  return container;
}
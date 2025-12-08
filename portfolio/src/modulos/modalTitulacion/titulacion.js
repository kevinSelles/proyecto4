import "./titulacion.css";

export function getTitulacion() {
  
  const container = document.createElement("div");
  container.classList.add("titulacion-content");

  const img = document.createElement("img");
  img.src = "./assets/avatar-photos/graduado.webp";
  img.alt= "Imagen de la graduación";

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("titulacion-container");

  const title = document.createElement("h2");
  title.textContent = "Títulos académicos";

  const titulacionGallery = document.createElement("div");
  titulacionGallery.classList.add("titulacion-gallery");

  const ScreenShots = [
    {img: "https://storage.googleapis.com/verified-storage/cert/34362781302808.png", title: "Desarrollador Frontend", text: "Certificación en desarrollo Frontend (HTML, CSS, JavaScript y Vite) cursada en la escuela The Power y con titulación avalada por la UCAM (Universidad Católica de Murcia).", alt: "Previsualización del título de Desarrollador Frontend.", link: "https://verified.sertifier.com/es/verify/34362781302808/"},
    {img: "https://storage.googleapis.com/verified-storage/cert/26607474659735.png", title: "Desarrollador Backend", text: "Certificación en desarrollo Backend (Node, NoSQL y APIs con Express) cursada en la escuela The Power y con titulación avalada por la UCAM (Universidad Católica de Murcia).", alt: "Previsualización del título de Desarrollador Backend.", link: "https://verified.sertifier.com/es/verify/26607474659735/?ref=email"},
    {img: "assets/titles/ciberwall.webp", title: "C1B3RWALL ACADEMY", text: "Diploma por haber superado el curso “C1B3RWALL ACADEMY” sobre ciberseguridad en sistemas basados en blockchain, impartido por la Universidad de Salamanca y el grupo de investigación BISITE, en colaboración con la Policía Nacional.", alt: "Previsualización del título de CIBERWALL ACADEMY.", link: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:72e648b1-6f4d-4bc0-a519-fe5806c45561"}
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
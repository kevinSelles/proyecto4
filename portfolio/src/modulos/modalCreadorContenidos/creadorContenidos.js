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

  const contentCreatorGallery = document.createElement("div");
  contentCreatorGallery.classList.add("content-creator-gallery");

  const creations = [
    {type: "image", src: "./assets/content-creator/promo-el-nuevo-friki.webp", title: "Blog El Nuevo Friki", alt: "Imagen promocional de la comunidad de El Nuevo Friki", text: "Blog creado en Blogger, que pese a sus limitadas opciones de edición y personalización, me permitió dar mis primeros pasos como creador digital. A partir de él surgió una comunidad en torno a los cómics, los videojuegos y el cine de superhéroes, que con el tiempo se expandió también a redes sociales como Facebook e Instagram.", link: "https://www.elnuevofriki.es"},
    {type: "image", src: "./assets/content-creator/el-nuevo-friki-facebook.webp", title: "Facebook El Nuevo Friki", alt: "Portada de la comunidad de Facebook de El Nuevo Friki", text: "Primera comunidad de El Nuevo Friki en redes sociales, creada en Facebook. Con el tiempo se convirtió en un punto de encuentro para los seguidores del blog y ha ido creciendo de forma constante en número de miembros.", link: "https://www.facebook.com/elnuevofriki.es/"},
    {type: "image", src: "./assets/content-creator/el-nuevo-friki-instagram.webp", title: "Instagram El Nuevo Friki", alt: "Imagen de perfil de El Nuevo Friki en Instagram", text: "Segunda comunidad de El Nuevo Friki, creada en Instagram con el objetivo de ampliar el círculo friki en torno al blog.", link: "https://www.instagram.com/el_nuevo_friki"},
    {type: "video", src: "https://player.vimeo.com/video/1110690885?h=67a107b85c", title: "Intro para videos de El Nuevo Friki", alt: "null", text: "Intro en video diseñada como presentación para los contenidos audiovisuales de la comunidad.", link: "null"},
    {type: "video", src: "https://player.vimeo.com/video/1110873603?h=ef57246df3", title: "Chirigota Las Hermanitas de la Calidad", alt: "null", text: "Video de presentación producido para la chirigota Las Hermanitas de la Calidad, participante en el Carnaval de Cádiz 2023, con una original puesta en escena de monjas futboleras.", link: "null", orientation: "vertical"},
    {type: "video", src: "https://player.vimeo.com/video/1110877209?h=3593e4682d", title: "Cortometraje de la Chirigota Los Activistas Reverdes", alt: "null", text: "Cortometraje producido como presentación de la chirigota Los Activistas Reverdes, participante en el Carnaval de Cádiz 2025, con una divertida propuesta en torno a un grupo de ecologistas peculiares.", link: "null", orientation: "vertical"},
  ];

  let imgVidPreview;

  for (let i = 0; i < creations.length; i++) {
    const creation = creations[i];
    
    const imgVideoContainer = document.createElement("div");

    const imgVideoTitle = document.createElement("h3");
    imgVideoTitle.textContent = creation.title;

    if(i === 1) {
      const division = document.createElement("h2");
      division.textContent = "Redes Sociales:";
      division.classList.add("division");
      contentCreatorGallery.appendChild(division);
    };
    if(i === 3) {
      const division2 = document.createElement("h2");
      division2.textContent = "Editor de vídeos:";
      division2.classList.add("division");
      contentCreatorGallery.appendChild(division2);
    };

    if(creation.type === "image") {
    imgVidPreview = document.createElement("img");
    imgVidPreview.src = creation.src;
    imgVidPreview.alt = creation.alt;
    
    imgVidPreview.addEventListener("click", () => {
      window.open(creation.link, "_blank");
    });
    } else if(creation.type === "video") {
      
      imgVidPreview = document.createElement("iframe");
      imgVidPreview.src = creation.src;
      imgVidPreview.classList.add("video-preview");
      if (creation.orientation === "vertical") {
      imgVidPreview.classList.add("vertical");
      }
      imgVidPreview.setAttribute("frameborder", "0");
      imgVidPreview.setAttribute("allow", "autoplay; fullscreen; picture-in-picture");  
    }
    
    const imgText = document.createElement("p");
    imgText.textContent = creation.text;

    imgVideoContainer.appendChild(imgVideoTitle);
    imgVideoContainer.appendChild(imgVidPreview);
    imgVideoContainer.appendChild(imgText);

    contentCreatorGallery.appendChild(imgVideoContainer);
  };

  mainContainer.appendChild(title);
  mainContainer.appendChild(contentCreatorGallery);

  container.appendChild(img);
  container.appendChild(mainContainer);

  return container;
}
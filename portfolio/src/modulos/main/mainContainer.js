import "./mainContainer.css";
import { getMainButtons } from "../mainButtons/mainButtons";
import { getModal } from "../modal/modal";
import { getSobreMi } from "../modalSobreMi/sobreMi";
import { getContacto } from "../modalContacto/contacto";
import { getProyectosAcademicos } from "../modalProyectosAcademicos/proyectosAcademicos";
import { getCreadorContenido } from "../modalCreadorContenidos/creadorContenidos";
import { getHabilidades } from "../modalHabilidades/habilidades";
import { getExperienciaLaboral } from "../modalExperienciaLaboral/experienciaLaboral";
import { getTitulacion } from "../modalTitulacion/titulacion";

export function getMain(avatarImg) {

  const main = document.createElement("main");
  
  const sections = [
    {text: "Proyectos académicos", imgSrc: "./assets/avatar-photos/proyectos-academicos.webp"},
    {text: "Formación Académica", imgSrc: "./assets/avatar-photos/graduado.webp"},
    {text: "Experiencia laboral", imgSrc: "./assets/avatar-photos/experiencia-laboral.webp"},
    {text: "Creador de contenido", imgSrc: "./assets/avatar-photos/creador-contenido.webp"},
    {text: "Sobre mí", imgSrc: "./assets/avatar-photos/sobre-mi.webp"},
    {text: "Habilidades", imgSrc: "./assets/avatar-photos/habilidades.webp"},
    {text: "Descargar CV", imgSrc: "./assets/avatar-photos/curriculum.webp"},
    {text: "Contacto", imgSrc: "./assets/avatar-photos/contacto.webp"}
  ];

  const clases = ["proyectos-academicos", "creador-de-contenido", "experiencia-laboral", "sobre-mi", "habilidades", "contacto", "titulacion", "cv"];
  const defaultAvatarSrc = avatarImg.src;

  const buttonsLeft = document.createElement("div");
  buttonsLeft.classList.add("buttons-container", "left");
  const buttonsRight = document.createElement("div");
  buttonsRight.classList.add("buttons-container", "right");

  for(let i = 0; i < sections.length; i++) {

    const section = document.createElement("section");
    section.classList.add(clases[i]);

    const button = getMainButtons(sections[i].text);
    section.appendChild(button);

    if(i < 4) {
    buttonsLeft.appendChild(section);
    } else {
      buttonsRight.appendChild(section);
    };

    button.addEventListener("mouseenter", () => {
      avatarImg.src = sections[i].imgSrc;

      if(sections[i].text === "Proyectos académicos" || sections[i].text === "Contacto") {
        avatarImg.classList.add("grande");
      }
    });

    button.addEventListener("mouseleave", () => {
      avatarImg.src = defaultAvatarSrc;
      avatarImg.classList.remove("grande");
    });

  button.addEventListener("click", () => {
  if (sections[i].text === "Proyectos académicos") {
    getModal(getProyectosAcademicos());
  } else if (sections[i].text === "Formación Académica") {
    getModal(getTitulacion());
  } else if (sections[i].text === "Creador de contenido") {
    getModal(getCreadorContenido());
  } else if (sections[i].text === "Sobre mí") {
    getModal(getSobreMi());
  } else if (sections[i].text === "Contacto") {
    getModal(getContacto());
  } else if (sections[i].text === "Habilidades") {
    getModal(getHabilidades());
  } else if (sections[i].text === "Experiencia laboral") {
    getModal(getExperienciaLaboral());
  }
});

}

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  imgContainer.appendChild(avatarImg);

  main.appendChild(buttonsLeft);
  main.appendChild(imgContainer);
  main.appendChild(buttonsRight);

  main.style.display = "none";

  return main;
}
import "./mainContainer.css";
import { getMainButtons } from "../mainButtons/mainButtons";
import { getModal } from "../modal/modal";
import { getSobreMi } from "../modalSobreMi/sobreMi";
import { getContacto } from "../modalContacto/contacto";
import { getProyectosAcademicos } from "../modalProyectosAcademicos/proyectosAcademicos";
import { getCreadorContenido } from "../modalCreadorContenidos/creadorContenidos";
import { getHabilidades } from "../modalHabilidades/habilidades";
import { getExperienciaLaboral } from "../modalExperienciaLaboral/experienciaLaboral";

export function getMain(avatarImg) {

  const main = document.createElement("main");
  
  const sections = [
    {text: "Proyectos académicos", imgSrc: "./assets/avatar-photos/proyectos-academicos.webp"},
    {text: "Creador de contenido", imgSrc: "./assets/avatar-photos/creador-contenido.webp"},
    {text: "Sobre mí", imgSrc: "./assets/avatar-photos/sobre-mi.webp"},
    {text: "Contacto", imgSrc: "./assets/avatar-photos/contacto.webp"},
    {text: "Habilidades", imgSrc: "./assets/avatar-photos/habilidades.webp"},
    {text: "Experiencia laboral", imgSrc: "./assets/avatar-photos/experiencia-laboral.webp"}
  ];

  const clases = ["proyectos-academicos", "creador-de-contenido", "sobre-mi", "contacto", "habilidades", "experiencia-laboral"];
  const defaultAvatarSrc = avatarImg.src;

  for(let i = 0; i < sections.length; i++) {

    const section = document.createElement("section");
    section.classList.add(clases[i]);

    const button = getMainButtons(sections[i].text);

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
    
    section.appendChild(button);
    main.appendChild(section);
  }

  main.style.display = "none";

  return main;
}
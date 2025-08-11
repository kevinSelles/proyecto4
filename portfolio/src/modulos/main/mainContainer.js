import "./mainContainer.css";
import { getMainButtons } from "../mainButtons/mainButtons";

export function getMain() {

  const main = document.createElement("main");
  

  const sections = ["Proyectos académicos", "Creador de contenido", "Sobre mí", "Contacto"];
  const clases = ["proyectos-academicos", "creador-de-contenido", "sobre-mi", "contacto"];

  for(let i = 0; i < sections.length; i++) {

    const section = document.createElement("section");
    section.classList.add(clases[i]);

    const button = getMainButtons(sections[i]);
    
    section.appendChild(button);
    main.appendChild(section);
  }

  main.style.display = "none";

  return main;
}
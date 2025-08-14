import "./sobreMi.css"

export function getSobreMi() {

  const container = document.createElement("div");
  container.classList.add("sobre-mi-content")

  const img = document.createElement("img");
  img.src = "./assets/avatar-photos/sobre-mi.webp";

  const textContainer = document.createElement("div");
  textContainer.classList.add("sobre-mi-texto");

  const title = document.createElement("h2");
  title.textContent = "Sobre mí";

  textContainer.appendChild(title);

  const paragraphs = [
    "¡Hola! soy Kevin. Y no siempre he desarrollado páginas web.",
    "Vivo en Cádiz y mi carrera profesional comenzó estudiando electromecánica de vehículos. Pronto, empecé a trabajar como conductor, que es una de mis grandes aficiones. Transporte de mercancias, chofer de empresa, chofer privado... Con el tiempo, me fui dando cuenta de que ese es un mercado laboral con poca estabilidad, así que decidí reinventarme a mi mismo.",
    "Llegó el momento de tomar un nuevo rumbo. Ya habia escrito algunos blogs por pura afición y uno de ellos estaba creciendo bastante en número de lectores. Se me ocurrian muchas ideas que añadir a dicho blog, pero no tenia los conocimientos para hacerlo, así que... ¿Por qué no estudiar y aprender sobre ello?",
    "Por este motivo decidí aprender programación y desarrollo web. Nunca es tarde para cambiar de rumbo y aquí estoy, exchofer convertido en -Desarrollador Web Full Stack-. Vaya nombrecito ¿Eh? suena hasta importante.",
    "Actualmente estoy estudiando un master en desarrollo web full stack con la escuela The Power MBA y no paro de poner en práctica diferentes proyectos web que se me van ocurriendo para lanzarme al mercado laboral",
    "Gracias por visitar mi portfolio y te invito a curiosear todos los proyectos que voy lanzando.",
    "Kevin Selles."
  ];

  for(const paragraph of paragraphs) {
  const text = document.createElement("p");
  text.textContent = paragraph;
  
  textContainer.appendChild(text);
  }

  container.appendChild(img);
  container.appendChild(textContainer);

  return container;
}
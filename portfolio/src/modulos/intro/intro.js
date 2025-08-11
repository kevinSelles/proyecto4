import "./intro.css";

export function getIntro(header, main) {

  const intro = document.createElement("div");
  intro.id = "intro";

  const p1 = document.createElement("p");
  p1.className = "leftP";
  p1.textContent = "HOLA, SOY KEVIN";

  const p2 = document.createElement("p");
  p2.className = "rightP";
  p2.textContent = "Y DESARROLLO WEBS";

  intro.appendChild(p1);
  intro.appendChild(p2);

  document.body.appendChild(intro);

  setTimeout(() => {
    intro.classList.add("fadeOut");
    setTimeout(() => {
      intro.style.display = "none";
      header.style.display = "block";
      main.style.display = "flex";
    }, 1000);
  }, 4000);

  return intro;
}
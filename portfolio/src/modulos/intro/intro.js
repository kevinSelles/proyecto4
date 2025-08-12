import "./intro.css";

export function getIntro(header, main) {

  const intro = document.createElement("div");
  intro.id = "intro";

  const p1 = document.createElement("p");
  p1.className = "leftP";
  p1.textContent = "¡Hola! Soy Kevin";

  const p2 = document.createElement("p");
  p2.className = "rightP";
  p2.textContent = "y desarrollo webs";

  intro.appendChild(p1);
  intro.appendChild(p2);

  document.body.appendChild(intro);

  setTimeout(() => {
    intro.classList.add("fadeOut");
    setTimeout(() => {
      intro.style.display = "none";

      const avatar = main.querySelector("img");
      const buttons = main.querySelectorAll("button");

      header.style.display = "block";
      main.style.display = "flex";

      header.style.opacity = 0;
      avatar.style.opacity = 0;
      avatar.style.transform = "scale(0.1)";
      for(const button of buttons) {
        button.style.opacity = 0;
      }

      avatar.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        avatar.style.opacity = 1;
        avatar.style.transform = "scale(1)";
      });
    });

        setTimeout(() => {
        header.style.transition = "opacity 0.8s ease";
        header.style.opacity = 1;
          
        for(const button of buttons) {
        button.style.transition = "opacity 0.8s ease";
        button.style.opacity = 1;
        }
      }, 1000);
    }, 1000);
  }, 4000);

  return intro;
}
import "./habilidades.css";

export function getHabilidades() {

  const content = document.createElement("div");
  content.classList.add("skills-content");

  const img = document.createElement("img");
  img.src = "./assets/avatar-photos/habilidades.webp";

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("skills-container");

  const title = document.createElement("h2");
  title.textContent = "Habilidades";
  mainContainer.appendChild(title);

  const title2 = document.createElement("h2");
  title2.textContent = "Aprendiendo";

  const skillsGallery = document.createElement("div");
  skillsGallery.classList.add("skills-gallery");

  const skills = [
    {imgSrc: "./assets/icons/html.webp", alt: "Logo de HTML5", text: "HTML"},
    {imgSrc: "./assets/icons/css.webp", alt: "Logo de CSS3", text: "CSS"},
    {imgSrc: "./assets/icons/js.webp", alt: "Logo de JavaScript", text: "JavaScript"},
    {imgSrc: "./assets/icons/react.webp", alt: "Logo de React", text: "React"},
    {imgSrc: "./assets/icons/node.webp", alt: "Logo de Node JS", text: "Node JS"},
    {imgSrc: "./assets/icons/mongo.webp", alt: "Logo de MongoDB", text: "MongoDB Atlas"},
    {imgSrc: "./assets/icons/nosql.webp", alt: "Logo de NoSQL", text: "NoSQL"},
    {imgSrc: "./assets/icons/vite.webp", alt: "Logo de Vite", text: "Vite"},
    {imgSrc: "./assets/icons/visual-studio-code.webp", alt: "Logo de Visual Studio Code", text: "Visual Studio Code"},
    {imgSrc: "./assets/icons/blogger.webp", alt: "Logo de Blogger", text: "Blogger"},
    {imgSrc: "./assets/icons/canva.webp", alt: "Logo de Canva", text: "Canva"},
    {imgSrc: "./assets/icons/kinemaster.webp", alt: "Logo de KineMaster", text: "KineMaster"}
  ];

  const futureSkills = [
    {imgSrc: "./assets/icons/python.webp", alt: "Logo de Python", text: "Python"}
  ];

  for(const skill of skills) {

    const skillContent = document.createElement("div");
    skillContent.classList.add("skill-content");

    const skillImg = document.createElement("img");
    skillImg.src = skill.imgSrc;
    skillImg.alt = skill.alt;

    const skillP = document.createElement("p");
    skillP.textContent = skill.text;
    
    skillContent.appendChild(skillImg);
    skillContent.appendChild(skillP);

    skillsGallery.appendChild(skillContent);
  };

  mainContainer.appendChild(skillsGallery);
  mainContainer.appendChild(title2);

  const futureSkillsGallery = document.createElement("div");
  futureSkillsGallery.classList.add("future-skills-gallery");

  for(const futureSkill of futureSkills) {

    const futureSkillContent = document.createElement("div");
    futureSkillContent.classList.add("future-skill-content");

    const futureSkillImg = document.createElement("img");
    futureSkillImg.src = futureSkill.imgSrc;
    futureSkillImg.alt = futureSkill.alt;

    const futureSkillP = document.createElement("p");
    futureSkillP.textContent = futureSkill.text;

    futureSkillContent.appendChild(futureSkillImg);
    futureSkillContent.appendChild(futureSkillP);

    futureSkillsGallery.appendChild(futureSkillContent);
  };

  mainContainer.appendChild(futureSkillsGallery);

  content.appendChild(img);
  content.appendChild(mainContainer);

  return content;
}
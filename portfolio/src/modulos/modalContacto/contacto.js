import "./contacto.css";

export function getContacto () {

  const container = document.createElement("div");
  container.classList.add("contacto-content");

  const img = document.createElement("img");
  img.src = "./assets/avatar-photos/contacto.webp";
  img.alt= "Imagen de contacto"

  const textContainer = document.createElement("div");
  textContainer.classList.add("contacto-text");

  const title = document.createElement("h2");
  title.textContent = "Contacto";

  textContainer.appendChild(title);

  const list = document.createElement("ul");

  const contactList = [ 
    {icon: "./assets/icons/gmail.webp", text: "kevin.selles.c@gmail.com", link: "mailto: kevin.selles.c@gmail.com"},
    {icon: "./assets/icons/whatsApp.webp", text: "+34 626 899 629", link: null},
    {text: "Si te interesa algun tipo de publicidad o colaboración en la red de El Nuevo Friki, también puedes contactarme en:", link: null},
    {icon: "./assets/icons/gmail.webp", text: "blogelnuevofriki@gmail.com", link: "mailto: blogelnuevofriki@gmail.com"},
    {icon: "./assets/icons/facebook.webp", text: "@elnuevofriki.es", link: "https://www.facebook.com/elnuevofriki.es"},
    {icon: "./assets/icons/instagram.webp", text: "@el_nuevo_friki", link: "https://www.instagram.com/el_nuevo_friki"}
  ];

  for(const contact of contactList) {

    const li = document.createElement("li");

    if(contact.icon) {
    const icon = document.createElement("img");
    icon.src = contact.icon;
    icon.alt = contact.text;
    li.appendChild(icon);
    }
    
    let content;

    if(contact.link) {
      content = document.createElement("a");
    } else {
      content = document.createElement("span");
    };
    content.textContent = contact.text;
    if(contact.link) {
      content.href = contact.link;
      content.target = "_blank";
    }
    content.textContent = contact.text;

    li.appendChild(content);
    list.appendChild(li);
  }
  textContainer.appendChild(list);
  container.appendChild(img);
  container.appendChild(textContainer);

  return container;
}
import "./avatarImg.css";

export function getAvatarImg () {

  const avatarImg = document.createElement("img");
  avatarImg.src = "./assets/avatar-photos/imagen-saludo.webp";

  return avatarImg;
}
import "./avatarImg.css";

export function getAvatarImg () {

  const avatarImg = document.createElement("img");
  avatarImg.src = "./assets/avatar-photos/saludo.webp";
  avatarImg.classList.add("avatar-img");

  return avatarImg;
}
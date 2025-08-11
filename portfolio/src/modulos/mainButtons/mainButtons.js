import "./mainButtons.css";

export function getMainButtons(text) {

  const mainButton = document.createElement("button");
  mainButton.textContent = text;

  return mainButton;
}
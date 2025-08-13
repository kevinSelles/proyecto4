import "./modal.css";

export function getModal (content) {

  const externalContainer = document.createElement("div");
  externalContainer.classList.add("capa-externa");

  const modal = document.createElement("article");
  modal.classList.add("modal");

  const closeButton = document.createElement("button");
  closeButton.classList.add("close");
  closeButton.textContent = "X";

  closeButton.addEventListener("click", closeModal);
  externalContainer.addEventListener("click", (e) => {
    if(e.target === externalContainer) closeModal();
  });

  function closeModal() {
    setTimeout(() => externalContainer.remove(), 300);
  };

  modal.appendChild(closeButton);
  modal.appendChild(content);
  externalContainer.appendChild(modal);
  document.body.appendChild(externalContainer);
};
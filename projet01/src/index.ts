// Sélectionner les éléments HTML
const title = document.getElementById("title") as HTMLHeadingElement;
const button = document.getElementById("action-button") as HTMLButtonElement;

// Modifier le contenu du titre
title.textContent = "TypeScript lié avec HTML !";

// Ajouter un événement de clic au bouton
button.addEventListener("click", () => {
  alert("Bouton cliqué !");
  title.style.color = "blue";
});

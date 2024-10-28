/**
 *
 * @param {*} inputElement
 */
// Fonction pour afficher le message d'alerte pour le champ de mot de passe
export function showPasswordAlert(inputElement) {
  // Créer l'élément de popup
  let popup = document.createElement("div");
  popup.innerText =
    "Votre mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une minuscule, un chiffre et un caractère spécial.";
  // Appliquer quelques styles de base pour que le message ressemble à une popup
  popup.style.position = "absolute";
  popup.style.backgroundColor = "#f8d7da";
  popup.style.color = "#721c24";
  popup.style.border = "1px solid #f5c6cb";
  popup.style.borderRadius = "5px";
  // Ajouter l'élément après le champ de mot de passe
  inputElement.parentNode.insertBefore(popup, inputElement.nextSibling);
  // Retirer la popup après quelques secondes
  setTimeout(function () {
    popup.remove();
  }, 5000); // La popup disparaît après 5 secondes
}
/**
 *
 * @param {*} inputElement
 */
// Fonction pour afficher le message d'alerte pour le champ de mot de passe
export function showPasswordAlertLight(inputElement) {
  // Créer l'élément de popup
  let popup = document.createElement("div");
  popup.innerText =
    "Votre mot de passe est faible !";
  // Appliquer quelques styles de base pour que le message ressemble à une popup
  popup.style.position = "absolute";
  popup.style.backgroundColor = "#f6f8d7";
  popup.style.color = "#72641c";
  popup.style.border = "1px solid #f5c6cb";
  popup.style.borderRadius = "5px";
  // Ajouter l'élément après le champ de mot de passe
  inputElement.parentNode.insertBefore(popup, inputElement.nextSibling);
  // Retirer la popup après quelques secondes
  setTimeout(function () {
    popup.remove();
  }, 5000); // La popup disparaît après 5 secondes
}

/**
 *
 * @param {*} inputElement
 */
// Fonction pour afficher le message d'alerte pour le champ de mot de passe
export function showPasswordAlertStrong(inputElement) {
  // Créer l'élément de popup
  let popup = document.createElement("div");
  popup.innerText =
    "Votre mot de passe est fort !";
  // Appliquer quelques styles de base pour que le message ressemble à une popup
  popup.style.position = "absolute";
  popup.style.backgroundColor = "#daf8d7";
  popup.style.color = "#1c7229";
  popup.style.border = "1px solid #f5c6cb";
  popup.style.borderRadius = "5px";
  // Ajouter l'élément après le champ de mot de passe
  inputElement.parentNode.insertBefore(popup, inputElement.nextSibling);
  // Retirer la popup après quelques secondes
  setTimeout(function () {
    popup.remove();
  }, 5000); // La popup disparaît après 5 secondes
}

/**
 *
 * @param {*} inputElement
 */
// Fonction pour afficher le message d'alerte pour le champ de mot de passe
export function showMailAlert(inputElement) {
  // Créer l'élément de popup
  let popup = document.createElement("div");
  popup.innerText =
    "Votre mail est mal écrit !";
  // Appliquer quelques styles de base pour que le message ressemble à une popup
  popup.style.position = "absolute";
  popup.style.backgroundColor = "#f8d7da";
  popup.style.color = "#721c24";
  popup.style.border = "1px solid #f5c6cb";
  popup.style.borderRadius = "5px";
  // Ajouter l'élément après le champ de mot de passe
  inputElement.parentNode.insertBefore(popup, inputElement.nextSibling);
  // Retirer la popup après quelques secondes
  setTimeout(function () {
    popup.remove();
  }, 5000); // La popup disparaît après 5 secondes
}

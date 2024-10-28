import { getDatas } from "./storage.js";

export function initProfil() {
  const profilPage = document.getElementById("profilPage");
  if (!profilPage) {
    // console.error(
    //   "L'élément avec l'ID 'profilPage' est introuvable dans le DOM."
    // );
    return; // Arrêter l'exécution si l'élément n'existe pas
  }
  // Récupérer l'utilisateur connecté dans le localStorage
  const currentUser = getDatas("currentUser");
  const users = getDatas("users");

  // Si aucun utilisateur n'est trouvé (non connecté)
  if (!currentUser) {
    alert("Aucun utilisateur connecté");
    window.location.href = "../connection.html"; // Redirige vers la page de connexion si nécessaire
  } else {
    // Afficher les informations de l'utilisateur sur la page
    document.getElementById("email").textContent = currentUser.email;

    // Afficher tous les scores liés à l'email de currentUser
    const userScores = users
      .filter((user) => user.email === currentUser.email) // Filtrer les utilisateurs ayant le même email
      .map((user) => user.score); // Extraire leurs scores

    const scoreListElement = document.getElementById("allScores");
    //  grab l'élément avec l'ID 'allScores' dans  l'HTML
    scoreListElement.innerHTML = "";
    // Vider le contenu avant d'ajouter les scores

    // Ajouter chaque score au DOM sous forme de liste
    userScores.forEach((score) => {
      if (score !== 0 && score != null) {
        const scoreItem = document.createElement("li");
        scoreItem.textContent = `${score}`;
        scoreListElement.appendChild(scoreItem);
      }
    });
  }
}

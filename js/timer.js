import { coef } from "./game.js";
import { getDatas, setData } from "./storage.js";

let seconds = 0;
let timerElement = document.getElementById("timer");
let timer; // Variable pour stocker l'intervalle

function startTimer() {
  // Démarrer le timer si il n'a pas déjà été lancé
  if (!timer) {
    timer = setInterval(function () {
      seconds++;
      timerElement.textContent = "Temps: " + seconds + "s";
    }, 1000);
  }
}

function stopTimer() {
  const currentUser = getDatas("currentUser");
  const users = getDatas("users");
  let scoreAlert = (99 - seconds) * coef;
  if (currentUser && users) {
    const userIndex = users.findIndex(
      (user) => user.email === currentUser.email
    );
    if (userIndex !== -1) {
      const user = users[userIndex];
      // Ajouter ou mettre à jour le champ "score" avec le temps écoulé
      currentUser.score = scoreAlert;
      user.score = scoreAlert;
      // Mettre à jour le localStorage avec les nouvelles infos de l'utilisateur
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      // setData("currentUser", currentUser);
      setData("users", user);
    }
  } else {
    console.log("Utilisateur non trouvé dans le localStorage !");
  }

  // scoreAlert = (99 - seconds) * coef
  alert("Votre score est de : " + scoreAlert);
  clearInterval(timer); // Arrête le timer
  timer = null; // Réinitialise la variable pour permettre de relancer le timer
}

function resetTimer() {
  stopTimer(); // Arrête le timer
  seconds = 0; // Réinitialise le compteur de secondes
  timerElement.textContent = "Temps: 0s"; // Met à jour l'affichage
}

export { startTimer, stopTimer, resetTimer };

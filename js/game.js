import { startTimer, stopTimer } from "./timer.js";

/* ------------------- Gestion du jeu ------------------- */
export const cardsArray = [
  { name: "pomme", image: "../ressources/light/1.png" },
  { name: "banane", image: "../ressources/light/2.png" },
  { name: "brocoli", image: "../ressources/light/3.png" },
  { name: "cerise", image: "../ressources/light/4.png" },
  { name: "haricot", image: "../ressources/light/6.png" },
  { name: "fraise", image: "../ressources/light/7.png" },
];

// Jeux d'images pour les deux thèmes
export const darkModeImages = [
  { name: "singe", image: "../ressources/dark/a.png" },
  { name: "elephant", image: "../ressources/dark/b.png" },
  { name: "croco", image: "../ressources/dark/c.png" },
  { name: "facho", image: "../ressources/dark/d.png" },
  { name: "buffle", image: "../ressources/dark/e.png" },
  { name: "egnis", image: "../ressources/dark/f.png" },
];

export function initMemoryGame() {
  const game = document.getElementById("game");
  if (!game) {
    // console.error("L'élément avec l'ID 'game' est introuvable dans le DOM.");
    return; // Arrêter l'exécution si l'élément n'existe pas
  }

  // Fonction pour récupérer les images selon le thème actuel
  function getImagesForCurrentTheme() {
    const currentTheme = localStorage.getItem("theme") || "light-mode";
    return currentTheme === "dark-mode" ? darkModeImages : cardsArray;
  }
  // Récupérer les images correspondant au thème actuel
  const imagesArray = getImagesForCurrentTheme();
  // Doubler le tableau pour avoir des paires et mélanger
  const gameGrid = shuffleCards([...imagesArray, ...imagesArray]);
  // Créer la grille de jeu
  const grid = createGameGrid(gameGrid);
  // Ajouter la grille au DOM
  game.appendChild(grid);
  // Gérer les clics sur les cartes
  manageCardClicks(grid);
}

// Fonction utilitaire pour mélanger les cartes
function shuffleCards(array) {
  return array.sort(() => 0.5 - Math.random());
}

// Création de la grille de jeu et des cartes
function createGameGrid(gameGrid) {
  const grid = document.createElement("section");
  grid.setAttribute("class", "grid");

  gameGrid.forEach((item) => {
    const card = createCard(item);
    grid.appendChild(card);
  });

  return grid;
}

// Création d'une carte
function createCard(item) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.name = item.name;

  const front = document.createElement("div");
  front.classList.add("front");

  const back = document.createElement("div");
  back.classList.add("back");
  back.style.backgroundImage = `url(${item.image})`;

  card.appendChild(front);
  card.appendChild(back);

  return card;
}

/* ------------------- Gestion des clics sur les cartes ------------------- */
let firstGuess = "";
let secondGuess = "";
let count = 0;
let previousTarget = null;
let matchCounter = 0;
export let coef = 0;
const totalPairs = cardsArray.length;

function manageCardClicks(grid) {
  grid.addEventListener("click", function (event) {
    const clicked = event.target;
    startTimer();
    if (shouldIgnoreClick(clicked)) return;
    count++;
    if (count === 1) {
      firstGuess = assignGuess(clicked, "first");
    } else {
      secondGuess = assignGuess(clicked, "second");
      checkMatch();
    }
    previousTarget = clicked;
  });
}

function shouldIgnoreClick(clicked) {
  return (
    clicked === previousTarget ||
    clicked.parentNode.classList.contains("selected") ||
    clicked.parentNode.classList.contains("match")
  );
}

function assignGuess(clicked) {
  clicked.parentNode.classList.add("selected");
  return clicked.parentNode.dataset.name;
}

function checkMatch() {
  if (firstGuess && secondGuess) {
    if (firstGuess === secondGuess) {
      setTimeout(handleMatch, 500);
      matchCounter++;
      coef = matchCounter;
      if (matchCounter === totalPairs) {
        stopTimer();
        setTimeout(bravoGame, 500);
      }
    } else {
      setTimeout(resetGuesses, 1000);
    }
  }
}

function handleMatch() {
  document.querySelectorAll(".selected").forEach((card) => {
    card.classList.add("match");
  });
  resetGuesses();
}

function resetGuesses() {
  firstGuess = "";
  secondGuess = "";
  count = 0;
  document.querySelectorAll(".selected").forEach((card) => {
    card.classList.remove("selected");
  });
  previousTarget = null;
}

/* ------------------- Gestion du redémarrage du jeu ------------------- */
export function restartGame() {
  alert("Le jeu va recommencer.");
  location.reload(true);
}
/* ------------------- Gestion partie remportée ------------------- */
export function bravoGame() {
  alert("Bravo! Toutes les paires ont été trouvées.");
  setTimeout(restartGame, 1000);
}
/* ------------------- Gestion des événements clavier ------------------- */
document.addEventListener("keydown", function (event) {
  if (event.code === "Space" || event.key === " ") {
    console.log("Barre d'espace appuyée!");
    stopTimer();
    restartGame();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  initThemeToggle();
  initMemoryGame();
  initKeyboardEvents();
});

/* ------------------- Gestion du thème ------------------- */
function initThemeToggle() {
  const toggleButton = document.querySelector(".theme-toggle button");
  const body = document.body;

  // Fonction pour appliquer un thème
  const applyTheme = (theme) => {
    body.classList.toggle("dark-mode", theme === "dark-mode");
    toggleButton.classList.toggle("light-mode", theme === "dark-mode");
  };

  // Récupération du thème stocké et application
  const storedTheme = localStorage.getItem("theme") || "light-mode";
  applyTheme(storedTheme);

  // Gestion du clic sur le bouton de thème
  toggleButton.addEventListener("click", function () {
    const newTheme = body.classList.contains("dark-mode")
      ? "light-mode"
      : "dark-mode";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  });
}

/* ------------------- Gestion du jeu ------------------- */
const cardsArray = [
  { name: "pomme", image: "ressources/1.svg" },
  { name: "banane", image: "ressources/2.svg" },
  { name: "brocoli", image: "ressources/3.svg" },
  { name: "cerise", image: "ressources/4.svg" },
  { name: "haricot", image: "ressources/5.svg" },
  { name: "fraise", image: "ressources/6.svg" },
];

function initMemoryGame() {
  const gameGrid = shuffleCards([...cardsArray, ...cardsArray]);
  const game = document.getElementById("game");
  const grid = createGameGrid(gameGrid);

  game.appendChild(grid);
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
const totalPairs = cardsArray.length;

function manageCardClicks(grid) {
  grid.addEventListener("click", function (event) {
    const clicked = event.target;

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
    clicked.nodeName === "SECTION" ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains("selected") ||
    clicked.parentNode.classList.contains("match")
  );
}

function assignGuess(clicked, guessType) {
  clicked.parentNode.classList.add("selected");
  return clicked.parentNode.dataset.name;
}

function checkMatch() {
  if (firstGuess && secondGuess) {
    if (firstGuess === secondGuess) {
      setTimeout(handleMatch, 1000);
      matchCounter++;
      if (matchCounter === totalPairs) {
        setTimeout(restartGame, 1000);
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
function restartGame() {
  alert("Bravo ! Toutes les paires trouvées. Le jeu va recommencer.");
  location.reload(true); // Peut être remplacé par une vraie réinitialisation des variables
}

/* ------------------- Gestion des événements clavier ------------------- */
function initKeyboardEvents() {
  document.addEventListener("keydown", function (event) {
    if (event.code === "Space" || event.key === " ") {
      console.log("Barre d'espace appuyée!");
      restartGame();
    }
  });
}

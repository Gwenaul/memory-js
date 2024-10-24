import { restartGame } from "./game.js";

/* ------------------- Gestion du thème ------------------- */
export function initThemeToggle() {
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
    restartGame();
  });
  
}


import { getDatas, setData } from "./storage.js";
// import { refresh } from "./refresh.js";
import { showPasswordAlert, showPasswordAlertLight, showPasswordAlertStrong, showMailAlert } from "./popup.js";
import {
  emailValidator,
  passwordValidator,
  passwordValidatorLight,
} from "./validators.js";

// window.onload = init;
export function initUserList() {
  // Get datas
  let datas = getDatas("users");
  if (!datas) {
    // console.error("L'élément avec l'ID 'datas' est introuvable dans le DOM.");
    return; // Arrêter l'exécution si l'élément n'existe pas
  }
  // Display datas
  // refresh(datas, "user-list");
  // Get datas
  // Add event
  // Target
  const $signupForm = document.getElementById("signup-form");
  // Listen
  let verif = true;
  $signupForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh
    // Parcourir tous les inputs
    const $inputs = this.querySelectorAll("input");
    // pour ne sélectionner que les champs de type mot de passe
    // querySelector('input[type="password"]')
    // Objet User en devenir
    const user = {};
    // for of
    for (const input of $inputs) {
      switch (input.id) {
        
        case "signup-email": {
          const mailTry = input.value;
          if (emailValidator(mailTry)) {
            user.email = input.value;
          } else {
            showMailAlert(input);
            verif = false;
          }
          break;
        }

        case "signup-password": {
          const passTry = input.value;
          if (passwordValidatorLight(passTry)) {
            user.password = input.value;
            showPasswordAlertLight(input);
          } else if (passwordValidator(passTry)) {
            user.password = input.value;
            showPasswordAlertStrong(input);
          } else {
            showPasswordAlert(input);
            verif = false;
          }
          break;
        }

        default:
          console.error("Canaille");
          break;
      }
    }
    // save datas
    if (verif) {
      datas = setData("users", user);
      // Refresh
      // Clear inputs
      this.reset();
    } else {
      verif = true;
    }
    // focus
    this.querySelector("#password").focus();
  });
}

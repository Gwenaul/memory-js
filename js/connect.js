export function initConnect() {
  const formConnexion = document.getElementById("formConnexion");

  // Si le formulaire de connexion n'est pas présent, arrêter l'exécution
  if (!formConnexion) {
    // console.error(
    //   "Le formulaire de connexion est introuvable, initConnect ne sera pas exécuté."
    // );
    return;
  }

  formConnexion.addEventListener("submit", function (event) {
    event.preventDefault();
    // Récupérer les valeurs saisies dans le formulaire
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    console.log(email);

    // Récupérer les utilisateurs stockés dans le localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users);

    // Chercher un utilisateur avec le même pseudo et mot de passe
    let usersFind = users.find(
      (user) => user.email === email && user.password === password
    );

    if (usersFind) {
      // Sauvegarder les informations du joueur connecté
      localStorage.setItem("currentUser", JSON.stringify(usersFind));
      alert("Connexion réussie !");
      window.location.href = "../profil.html";
    } else {
      alert("Pseudo ou mot de passe incorrect");
    }
  });
}

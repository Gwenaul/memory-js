/**
 *
 * @param {*} email
 * @returns
 */
function emailValidator(email) {
  // Expression régulière pour l'email
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // Vérifie si correspond à l'expression régulière
  return emailPattern.test(email);
}
/**
 *
 * @param {*} password
 * @returns
 */
function passwordValidatorLight(password) {
  // Expression régulière pour le mot de passe
  const passwordPattern =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{3,7}$/;
  // Vérifie si le mot de passe correspond à l'expression régulière
  return passwordPattern.test(password);
}
function passwordValidator(password) {
  // Expression régulière pour le mot de passe
  const passwordPattern =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
  // Vérifie si le mot de passe correspond à l'expression régulière
  return passwordPattern.test(password);
}
export { emailValidator, passwordValidator, passwordValidatorLight };

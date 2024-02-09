import { isEmail } from "validator";
import { isEmpty, isEqual, showError, disableError } from "./MethodValidations";

// declarations
const form = document.querySelector("#form") as HTMLFormElement;
const inputUsername = document.querySelector("#username") as HTMLInputElement;
const inputEmail = document.querySelector("#email") as HTMLInputElement;
const inputPassword = document.querySelector("#password") as HTMLInputElement;
const inputPassword2 = document.querySelector("#password2") as HTMLInputElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validation()) return;
});

function validation(): boolean {
  // Verifica se o input username está vazio
  const spanUsername = inputUsername.nextElementSibling as HTMLSpanElement;
  if (isEmpty(inputUsername)) {
    const errorMsg: string = "O campo username não pode estar vazio";
    showError(spanUsername, errorMsg);
    return false;
  } else disableError(spanUsername);

  // verifica se email está vazio e se é um email
  const spanEmail = inputEmail.nextElementSibling as HTMLSpanElement;
  if (isEmpty(inputEmail)) {
    const errorMsg: string = "O campo email não pode estar vazio";
    showError(spanEmail, errorMsg);
    return false;
  } else disableError(spanEmail);

  if (!isEmail(inputEmail.value)) {
    const errorMsg: string = "E-mail inválido";
    showError(spanEmail, errorMsg);
    return false;
  } else disableError(spanEmail);

  // verifica se os inputs de password estão vazio
  const spanPassword = inputPassword.nextElementSibling as HTMLSpanElement;
  const spanPassword2 = inputPassword2.nextElementSibling as HTMLSpanElement;

  if (isEmpty(inputPassword)) {
    const errorMsg: string = "O campo senha não pode estar vazio";
    showError(spanPassword, errorMsg);
    return false;
  } else disableError(spanPassword);

  // Verifica igualdade entre as senhas
  if (!isEqual(inputPassword, inputPassword2)) {
    const errorMsg: string = "Os campos não coincidem";
    showError(spanPassword, errorMsg);
    showError(spanPassword2, errorMsg);
    return false;
  } else {
    disableError(spanPassword);
    disableError(spanPassword2);
  }

  console.log("Forms enviado!");

  return true;
}

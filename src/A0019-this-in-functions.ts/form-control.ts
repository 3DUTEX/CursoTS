// primeiro argumento da função pode ser a tipagem do this
// obs: não é um argumento é apenas a tipagem do this
function showMessage(this: Date, msg: string): void {
  console.log(this);
  console.log(msg);
}

// showMessage("mensagem"); // Error

// Maneira de chamar função quando o this é típado
showMessage.call(new Date(), "Mensagem");
showMessage.apply(new Date(), ["Mensagem"]);

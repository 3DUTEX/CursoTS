// never informa que algo "nunca" vai retornar nada
// pode-se ser usada para funções de erro
function criaErro(): never {
  throw new Error("Erro qualquer");
}

criaErro();

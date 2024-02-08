// const objetoA = {
//   chaveA: "Valor A",
//   chaveB: "Valor B",
// };

// objetoA.chaveC = "teste"; // não é possível adicionar uma nova chave ao objeto

// "readonly" faz com que a chave não possa mais ser alterada

const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  [key: string]: unknown; // index signature // [chave: tipoDaChave]: tipoValor
} = {
  chaveA: "VALOR A",
  chaveB: "VALOR B",
};

objetoA.chaveC = "Valor C com index signature";
console.log(objetoA);

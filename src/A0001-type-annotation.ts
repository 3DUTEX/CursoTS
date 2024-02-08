/* eslint-disable */

/* Por padrão ocorre um inferência de tipos
  const isValid: boolean = true;
  definir o tipo boleano para essa variável é redundante pois o TS já entende que por conter boolean
  deve ser típado como boolean
*/

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = "Luiz"; // Qualquer tipo de strings: '' "" ``
let idade: number = 0b1010; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol("qualquer-symbol"); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
// let arrayDeNumeros: number[] = [1,2,3] // Outra forma de instânciar um array
let arrayDeStrings: Array<string> = ["teste", "legal", "typescript"];

// Objetos
// informando chaves do objeto e tipos, é utilizado "?" para definir um atributo opcional
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: "Edduardo",
  idade: 18,
};

// Funções
function soma(x: number, y: number) {
  // TS infere que o retorno é um número, pois estou retornando um número
  return x + y;
}

// Tipando arrow function
// dentro dos parênteses tipos dos parâmetros, depois da seta, tipo de retorno
const soma2: (x: number, y: number) => number = (x, y) => x + y;

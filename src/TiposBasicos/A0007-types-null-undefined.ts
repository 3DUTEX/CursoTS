// undefined geralmente é utilizado pelo próprio motor JS
// para informar que algo não foi definido
// exemplo
let x; // undefined
if (typeof x === "undefined") x = 20; // verificando e atribuindo
console.log(x * 2); // number

// exemplo de undefined com parâmetro opcional
function createPerson(
  // parâmetros da função
  firstName: string,
  lastName?: string,
): {
  // tipo retorno da função
  firstName: string;
  lastName?: string; // opcional, ou seja, valor rebido ou undefined
} {
  // corpo da função
  return {
    firstName,
    lastName,
  };
}

// exemplo de null
function squareOf(x: any) {
  if (typeof x === "number") return x * x;
  return null;
}

const quadradoDeDois = squareOf(2);

if (quadradoDeDois === null) {
  console.log("conta inválida");
} else {
  // o TS entende que eu chequei de é nulo e se chegou até aqui é um número
  console.log(quadradoDeDois * 2);
}

export default 1;

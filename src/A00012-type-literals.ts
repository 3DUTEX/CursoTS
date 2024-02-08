// Usar tipos literais é usar valores como tipo
let x = 10; // tipo number
x = 1000;

// informando que essa variável deve ser somente o número 100, o tipo dela é um valor literal
let a: 100 = 100;

// uma variável constante se comporta da mesma maneira por baixo dos panos
const y = 10; // tipo literal (passa o mouse em cima de y)

// exemplo
function escolhaCor(cor: "Vermelho" | "Azul"): string {
  return cor;
}

console.log(escolhaCor("Vermelho"));

// transformando let em const
// asserção de const
let h = 100 as const;

// exemplo
const person = {
  name: "Eduardo" as const,
  age: 18,
};

// module mode
export default x;

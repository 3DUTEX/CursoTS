// interseção é equivalente a "&"
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

// O tipo pessoa deve ter todos os outros tipos
type Pessoa = TemNome & TemSobrenome & TemIdade;

// TS reclama que não há as chaves desse tipo
const pessoa2: Pessoa = {
  nome: "Eduardo",
  sobrenome: "Souza",
  idade: 21,
};

console.log(pessoa2);

export default 1;

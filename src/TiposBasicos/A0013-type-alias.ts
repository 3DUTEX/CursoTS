// Alias
// com "type" é possível criar o seu próprio tipo
// por convenção é importante começar com letra maiúscula
type Age = number; // tipo idade é igual ao tipo number

// criando tipo pessoa
type Pessoa = {
  name: string;
  age: Age;
  money: number; // "_" serve para separar números grandes, TS entende sem o "_"
  favoriteColor?: Cores; // Opcional key
};

// criando objeto pessoa
const pessoa: Pessoa = {
  name: "Eduardo",
  age: 18,
  money: 200_000, // 200000
};

// Outro exemplo
type Cores = "Vermelho" | "Azul" | "Amarelo"; // o tipo Cores é equivalente aos tipos literais...

function createPessoa(pessoa: Pessoa, cor: Cores): Pessoa {
  return { ...pessoa, favoriteColor: cor };
}

console.log(createPessoa(pessoa, "Azul"));

// module mode
export default 1;

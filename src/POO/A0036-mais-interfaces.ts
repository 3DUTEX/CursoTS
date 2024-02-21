// declaration merging
// duas interfaces com o mesmo nome, se juntam

interface Pessoa {
  nome: string;
}

interface Pessoa {
  sobrenome: string;
  enderecos: string[];
}

const pessoa: Pessoa = {
  nome: "Eduardo",
  sobrenome: "Souza",
  enderecos: ["Rua teste"],
};

console.log(pessoa);

export default false;

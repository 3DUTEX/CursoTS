// protected pode ser visto pela classe e pelas subclasses
// porém não pode ser visto fora da classe

// private pode ser visto somente na classe

export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private _idade: number,
    protected cpf: string,
  ) {}

  // getter
  get idade() {
    // validações
    return this._idade;
  }

  set idade(idade: number) {
    // se idade for menor do que 20, então pode alterar
    if (idade >= 20) return;
    this._idade = idade;
  }
}

const pessoa = new Pessoa("Eduardo", "Souza", 16, "123.123.123");

pessoa.idade = 20;
console.log(pessoa.idade);

console.table(pessoa);

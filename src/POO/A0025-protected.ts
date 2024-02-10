// protected pode ser visto pela classe e pelas subclasses
// porém não pode ser visto fora da classe

// private pode ser visto somente na classe

export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

// exemplo utilizando super
export class Aluno extends Pessoa {
  // Sobreescrevendo método
  getNomeCompleto(): string {
    console.log(super.getNomeCompleto()); // chamando método da super classe
    return this.nome;
  }
}

export class Cliente extends Pessoa {
  readonly endereco: string;

  // reescrevendo construtor
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    endereco: string,
  ) {
    super(nome, sobrenome, idade, cpf);
    this.endereco = endereco;
  }

  // método possível pois cpf é protected
  getCpf(): string {
    return this.cpf;
  }
}

const aluno: Aluno = new Aluno("Eduardo", "Souza", 17, "123.2312.12");

const cliente: Cliente = new Cliente(
  "Luzia",
  "Castro",
  34,
  "4332.3432.34",
  "rua assincrona",
);

console.table(aluno);
console.log(aluno.getNomeCompleto());

console.table(cliente);
console.log(cliente.getNomeCompleto());

// console.log(cliente.cpf); // Error: cpf é "protected" não pode ser visto fora da classe
console.log(cliente.getCpf);

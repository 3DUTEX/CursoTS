// super é utilizado para acessar a classe mãe ou a super classe

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

  getCpf(): string {
    return this.cpf;
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

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

export class Aluno extends Pessoa {
  // Sobreescrevendo método
  getNomeCompleto(): string {
    return this.nome;
  }
}

export class Cliente extends Pessoa {}

const aluno: Aluno = new Aluno("Eduardo", "Souza", 17, "123.2312.12");

const cliente: Cliente = new Cliente("Luzia", "Castro", 34, "4332.3432.34");

console.table(aluno);
console.log(aluno.getNomeCompleto());

console.table(cliente);
console.log(cliente.getNomeCompleto());

// interfaces são contratos com classes
// serve para obrigar uma classe a reescrever métodos ou atributos
// semelhante a classes abstratas porém pode ter mais de uma
// não é possível definir modificador de acesso

type TipoSobrenome = {
  readonly sobrenome: string;
};

interface TipoNome {
  readonly nome: string;
}

export class Pessoa implements TipoNome, TipoSobrenome {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

const pessoa = new Pessoa("Luiz", "Miranda");
console.log(pessoa.nomeCompleto());

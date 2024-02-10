export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  // se for ocultado o modificador de acesso, por padrão será public
  adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
}

class Colaborador {
  // Atalho para criar atributos diretamente no construtor
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa = new Empresa("Udemy", "12312.12313.32.3");
// empresa.nome = "Facebook"; // Error: não é possível reassinar atributo com readonly

const colaborador = new Colaborador("Luiz", "Otávio");

empresa.adicionarColaborador(colaborador);

console.log(empresa);
console.log(colaborador);

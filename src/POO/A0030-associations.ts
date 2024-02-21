export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta) {
    this._ferramenta = ferramenta;
  }

  escrever(): void {
    if (this._ferramenta === null) {
      console.log(`${this.nome} não pode escrever sem ferramenta...`);
    } else {
      this._ferramenta.escrever();
    }
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  public abstract escrever(): void;
}

export class Caneta extends Ferramenta {
  public escrever(): void {
    console.log(this.nome + " está escrevendo...");
  }
}

export class MaquinaEscrever extends Ferramenta {
  public escrever(): void {
    console.log(this.nome + " está digitando...");
  }
}

const escritor = new Escritor("Luiz");
const caneta = new Caneta("Bic");
const maquina = new MaquinaEscrever("X7VH");

// associando escrito a ferramenta passando a ferramenta
// mesmo assim são classes independentes
escritor.ferramenta = caneta;
escritor.escrever();

escritor.ferramenta = maquina;
escritor.escrever();

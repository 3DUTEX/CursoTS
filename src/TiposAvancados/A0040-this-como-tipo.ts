export class Calculadora {
  constructor(public number: number) {}

  add(n: number): this {
    this.number + n;
    return this;
  }

  sub(n: number): this {
    this.number - n;
    return this;
  }

  div(n: number): this {
    this.number / n;
    return this;
  }

  multi(n: number): this {
    this.number * n;
    return this;
  }
}

const calculadora = new Calculadora(10);

/*
  por estar retornando o "this" é possível fazer chamadas em cadeia
  é como se eu tivesse retornando o próprio objeto e usando um método diferente
*/
calculadora.add(5).multi(5).div(1).sub(5);

console.log(calculadora);

// Exemplo de um Builder - GoF
// Builder: Configurando a classe aos poucos
export class RequestBuilder {
  private method: "get" | "post" | null = null;
  private url: string | null = null;

  // Retornando this para conseguir utilizar métodos em cadeia
  setMethod(method: "get" | "post"): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request: RequestBuilder = new RequestBuilder();
request.setMethod("get").setUrl("https:www.google.com").send();

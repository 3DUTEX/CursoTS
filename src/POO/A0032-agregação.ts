/*
  Agregação de classes é quando uma classe não depende de outra, porém
  não consegue funcionar/executar todas as tarefas sem uma outra classe
*/

// carrinho de compras precisa de um produto para ser útil
export class CarrinhoDeCompras {
  private _produtos: Array<Produto> = [];

  inserirProduto(produto: Produto): Array<Produto> {
    this._produtos.push(produto);
    return this._produtos;
  }

  quantidade(): number {
    return this._produtos.length;
  }

  total(): number {
    let total: number = 0;
    for (const produto of this._produtos) {
      total += produto.preco;
    }
    return total;
  }
}

export default false;

export class Produto {
  constructor(
    public nome: string,
    public preco: number,
  ) {}
}

const carrinho = new CarrinhoDeCompras();
const banana = new Produto("Banana", 120);
const maca = new Produto("Maça", 120);

console.log(carrinho);
carrinho.inserirProduto(banana);
carrinho.inserirProduto(maca);
console.log(carrinho);
console.log(carrinho.quantidade());
console.log(carrinho.total());

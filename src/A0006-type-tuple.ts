// tuple é um array de tipos e tamanho definidos
const dadosCliente: [number, string?] = [1, "Luiz"];
const dadosCliente1: [number, string, ...boolean[]] = [1, "Luiz", false, true];
const dadosCliente2: readonly [number, string] = [1, "Luiz"];

dadosCliente[0] = 3; // ainda é possível alterar o valor de um índice
// para deixar imutável deve-se utilizar readonly
// dadosCliente2[0] = 3; error: pois essa tuple readonly

// array com readonly
const array: ReadonlyArray<string> = ["eduardo"];

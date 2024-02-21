// com typeof é possível transformar o tipo de um obj em um tipo literal
// com keyof é possível pegar as chaves de um objeto

type Colors = typeof cores; // o tipo de desse type vai ser equivalente ao objeto "cores"
type ColorsKeys = keyof Colors; // As chaves do tipo colors vão ser tipos leterais nesse type

const cores = {
  vermelho: "red",
  azul: "blue",
  verde: "green",
};

/*

  essa função recebe o parâmetro "cor" que é uma chave do objeto cores
  e também recebe o o parâmetro "colors" que é o próprio objeto
  como o tipo do objeto foi pego com typeof então é possível alterar os valores das chaves em um novo objeto
  contanto que seja do mesmo tipo

*/

function translateColor(cor: ColorsKeys, colors: Colors): string {
  return colors[cor];
}

console.log(translateColor("vermelho", cores));

export default false;

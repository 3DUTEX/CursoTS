// Definindo um tipo para função
// a função recebe um parâmetro "item" do tipo string e o retorno dela é string
type MapStringsCallback = (item: string) => string;

function mapStrings(
  array: Array<string>,
  callbackfn: MapStringsCallback,
): Array<string> {
  const newArray: string[] = [];

  for (const item of array) {
    newArray.push(callbackfn(item));
  }

  return newArray;
}

const arrayDeLetras = ["a", "b", "c"];

console.log(mapStrings(arrayDeLetras, (item) => item.toUpperCase()));

export default 1;

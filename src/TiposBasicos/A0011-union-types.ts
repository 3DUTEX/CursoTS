// union types representa: um tipo ou outro
function addOrConcat(x: number | string, y: number | string): number | string {
  // TS me obriga a verificar os tipos para decidir o retorno
  if (typeof x === "number" && typeof y === "number") return x + y;
  return `${x}${y}`;
}

console.log(addOrConcat(10, 20)); // soma
console.log(addOrConcat("10", 20)); // concatena

export default 1;

// type guard é a validação de um tipo antes de realizar uma ação

function sum(a: unknown, b: unknown) {
  // verificando se é um número antes de somar
  if (typeof a === "number" && typeof b === "number") return a + b;
  return `${a}${b}`;
}

console.log(sum(10, 10)); // 20

interface Animal {
  color: string;
}

interface Person {
  name: string;
}

type AnimalOrPerson = Animal | Person;

class Aluno implements Person {
  constructor(public readonly name: string) {}
}

function showName(obj: AnimalOrPerson): void {
  // type guard
  if ("name" in obj) {
    console.log(obj.name);
    return;
  }
  console.log("Isso é um animal");
}

const animal: Animal = {
  color: "Red",
};

showName(animal); // output: "Isso é um animal"
showName(new Aluno("Eduardo")); // output: "Eduardo"

export default false;

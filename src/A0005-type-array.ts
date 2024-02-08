// Array<T> - T[]

function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatenaStrings(...args: string[]): string {
  let str: string = "";
  for (const strArg of args) {
    str += strArg;
  }
  return str;
}

function toUpperCase(...args: string[]): string[] {
  return args.map((arg) => arg.toUpperCase());
}

console.log(multiplicaArgs(10, 10));
console.log(concatenaStrings("a", "b", "c"));
console.log(toUpperCase("qweqw", "eduardo"));

// unknow é semelhante ao any porém é mais seguro
let x: unknown;

x = 100;
x = "Eduardo";
x = 900;
x = 10;

const y: number = 800;

// console.log(x + y); // o TS não permite, pois ele entende que unknown pode ser qualquer coisa

// só é possível realizar alguma operação se validado antes
if (typeof x === "number") console.log(x + y);

export { x }; // alterando para module mode

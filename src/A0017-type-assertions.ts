// Condicional
const body1 = document.querySelector("body");
// TS informa que body pode ser um HTMLBodyElement ou nulo
// E me obriga a verificar
if (body1) body1.style.background = "red";

// Non-null assertion (!)
// Ao utilizar "!" no final da declaração, estou garatindo que não é nulo
const body2 = document.querySelector("body")!;
body2.style.background = "red";

// Type assertion
// Informando ao TS que o tipo dessa variável é garantido 100% "HTMLBodyElement"
const body3 = document.querySelector("body") as HTMLBodyElement;
body3.style.background = "red";

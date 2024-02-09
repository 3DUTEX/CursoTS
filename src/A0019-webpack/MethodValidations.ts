// verifica se um input está vazio
export function isEmpty(input: HTMLInputElement): boolean {
  return input.value === "";
}

// verifica igualdade de valor entre dois inputs
export function isEqual(
  inputOne: HTMLInputElement,
  inputTwo: HTMLInputElement,
): boolean {
  return inputOne.value === inputTwo.value;
}

// torna o span visível e mostra mensagem
export function showError(span: HTMLSpanElement, msgError: string): void {
  span.style.display = "block";
  span.innerText = msgError;
}

// desativa span
export function disableError(span: HTMLSpanElement): void {
  span.style.display = "none";
}

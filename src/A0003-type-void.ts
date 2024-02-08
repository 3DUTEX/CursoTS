// void não retorna nada, apenas executa algo
// "...args" array de strings
function semRetorno(...args: string[]): void {
  for (const str of args) {
    console.log(str);
  }
}

semRetorno("teste", "affs", "legal");

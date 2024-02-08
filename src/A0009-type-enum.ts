enum Cores {
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 200,
  ROXO = "ROXO",
  VERDE = 201,
  Rosa,
}

// Enum é semelhante a um objeto e pode ser acessado tanto pela chave, quanto pelo valor e ele retorna o seu valor contrário
// se buscar pela chave, retorna valor, se buscar pelo valor retorna a chave
console.log(Cores.AMARELO); // 200
console.log(Cores[10]); // Vermelho

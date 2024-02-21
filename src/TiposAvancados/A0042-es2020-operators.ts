type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: "Título",
  texto: "Conteúdo",
};

// Impedindo que o programa quebre, utilizando "?"
// Se tiver um valor ele executa a açãp, se não ele retorna undefined
console.log(documento.data?.toDateString());

// Utilizando "?" com null coalescing
// caso seja undefined, retorna uma string
console.log(documento.data?.toDateString() ?? "Vixi, não tem data!");

// relembrando: "??" verifica apenas null e undefined, se for, executa a ação definida

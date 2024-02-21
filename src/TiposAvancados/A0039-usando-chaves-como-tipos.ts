type Veiculo = {
  marca: string;
  ano: string;
};

type Car = {
  // espelhando o tipo da chave marca do tipo Veiculo
  // ou seja, se lá a marca é string, aqui também serás
  brand: Veiculo["marca"];
  year: Veiculo["ano"];
};

export default false;

/* 
  o TS não se importa se um objeto é ou não do tipo requerido, ele só se importa se atende as regras
  por exemplo...
  type User = {
    username: string,
    password: string,
  }
  esse tipo para o TS é a mesma coisa que...
  const user = {
    username: "João",
    passowrd: "123"
  }
  se eu pedir um objeto do tipo "User" em uma função e enviar esse objeto mesmo não sendo do tipo User,
  o TS vai aceitar, porque atende os requisitos do tipo User
  
  exemplo abaixo:
*/

// User
type User = {
  username: string;
  password: string;
};

// tipo da função
type VerifyUserFn = (user: User, sentValue: User) => boolean;

// verifica se o usuário do banco corresponde aos dados enviados
const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

// não é do tipo User
const bdUser = {
  username: "3DUTEX",
  password: "123",
};

// não é do tipo User
const sentUser = {
  username: "3DUTEX",
  password: "123",
};

// mas atende aos requisitos do tipo User

console.log(verifyUser(bdUser, sentUser));

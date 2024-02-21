// Singleton - GoF
// Singleton -> só cria uma instância se não tiver sido criada antes
// somente uma instância
export class Database {
  private static database: Database;

  // construtor privado não é possível instânciar
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static createDatabase(
    host: string,
    user: string,
    password: string,
  ): Database {
    // se já tiver instância retorna
    if (Database.database) return Database.database;

    // caso não tetnha instância crie
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1: Database = Database.createDatabase("localhost", "root", "root");
const db2 = Database.createDatabase("localhost", "root", "root");

console.table(db1);
db1.connect();
console.log(db1 === db2);

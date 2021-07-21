const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./src/infra/database.db')

const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "CPF" varchar(11),
    "QUARTO" VARCHAR(64)
  );`;

function criarTblClientes(){

    db.run(CLIENTES_SCHEMA, (error) => {
        if(error) console.log("Erro ao criar tabela de CLIENTES")
    })
}

db.serialize( ()=>{
    criarTblClientes()
})
const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./src/infra/database.db')

const ADD_CLIENTES_DATA = `
INSERT INTO CLIENTES (ID, NOME, EMAIL, CPF, QUARTO)
VALUES 
    (1, 'testenome', 'testeemail', '12345678987', 'testequarto1')`

function populaTabelacli() {
    db.run(ADD_CLIENTES_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de usuários");
    });
}


populaTabelacli();

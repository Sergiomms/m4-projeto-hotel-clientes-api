class ClienteDAO{

    constructor(db){
        this.db = db
    }
    getAllClients(){
        return new Promise((resolve, reject) =>{
            this.db.all("SELECT * FROM CLIENTES", (err, rows) =>{
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }
            })
        })
    }
    insertClients(cliente){
        return new Promise((resolve, reject) =>{
            this.db.run("INSERT INTO CLIENTES(NOME, EMAIL, CPF, QUARTO) VALUES (?,?,?,?)", Object.values(cliente), (err) =>{
                if(err){
                    reject(err)
                }else{
                    resolve()
                }
            })
        })
    }
}

module.exports = ClienteDAO
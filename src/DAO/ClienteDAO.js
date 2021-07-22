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
    getClientFromEmail(email){
        return new Promise((resolve, reject) =>{
            this.db.all("SELECT * FROM CLIENTES WHERE EMAIL = (?)", email, (err, rows) =>{
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
    deleteClientFromEmail(email){
        return new Promise((resolve, reject) =>{
            this.db.all("DELETE FROM CLIENTES WHERE EMAIL = (?)", email, (err) =>{
                if(err){
                    reject(err)
                }else{
                    resolve()
                }
            })
        })
    }
    updateClient(nome, email, cpf, quarto, id){
       
        return new Promise((resolve, reject) =>{

            let params = [id]
            let query = "UPDATE CLIENTES SET"
            let dados = []
            let changes = 0;

            if(nome != null){
                params.unshift(nome)
                dados.unshift(" NOME =?")
                ++changes
            }
            if(email != null){
                params.unshift(email)
                dados.unshift(" EMAIL =?")
                ++changes
            }
            if(cpf != null){
                params.unshift(cpf)
                dados.unshift(" CPF =?")
                ++changes
            }
            if(quarto != null){
                params.unshift(quarto)
                dados.unshift(" QUARTO =?")
                ++changes
            }
            
            query += dados.join(',') + " WHERE ID = ?"

            this.db.run(query, params, (err) =>{
                if(err){
                    reject(err)
                }else{
                    resolve({Changes:changes})
                }
            })
        })
    }
}

module.exports = ClienteDAO
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
                    resolve({result:rows,
                        count:rows.length})
                }
            })
        })
    }
    getClientFromEmail(id){
        return new Promise((resolve, reject) =>{
            this.db.all("SELECT * FROM CLIENTES WHERE ID = (?)", id, (err, rows) =>{
                if(err){
                    reject(err)
                }else{
                    resolve({result:rows,
                        count:rows.length})
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
                    resolve({message:"Cliente inserido com sucesso",
                        Error:false})
                }
            })
        })
    }
    deleteClientFromEmail(id){
        return new Promise((resolve, reject) =>{
            this.db.all("DELETE FROM CLIENTES WHERE ID = (?)", id, (err) =>{
                if(err){
                    reject(err)
                }else{
                    resolve({message:"Cliente deletado com sucesso"})
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
                    resolve({Changes:changes,
                            Message:"Alteração realizada com sucesso"
                    })
                }
            })
        })
    }
}

module.exports = ClienteDAO
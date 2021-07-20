class ClienteDAO{

    constructor(db){
        this.db = db
    }

    getAllClients(){
        return new Promise((resolve, reject) =>{
            this.db.all("Select * from clientes", (err, rows) =>{
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }
            })
        })
    }
}

module.exports = ClienteDAO
const { request, response } = require("express")
const ClienteDAO = require("../DAO/ClienteDAO.js")
const Cliente = require("../model/ClienteModel.js")

module.exports = (app, db) => {

    let clienteDb = new ClienteDAO(db)

    app.get('/clientes', (request, response)=>{
        clienteDb.getAllClients()
        .then((rows) =>{
            response.json({
                result:rows,
                count:rows.length
            })
        })
        .catch((err)=>{
            response.json({err})
        })
    })
    app.post('/clientes', (request, response)=>{
        const {nome, email, cpf, quarto} = request.body
        let newClient = new Cliente(nome, email, cpf, quarto)
        clienteDb.insertClients(newClient)
        .then(()=>{
            response.json({
                message:"Cliente inserido com sucesso",
                error:false
            })
        })
        .catch(()=>{
            response.json({
                message:"Erro ao inserir Cliente",
                Error:true
            })
        })
    })



}




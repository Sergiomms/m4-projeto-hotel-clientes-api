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
    app.get('/clientes/:email', (request, response) =>{
        const email = request.params.email
        clienteDb.getClientFromEmail(email)
        .then((rows) => {
            response.json({
                result:rows,
                count:rows.length
            })
        })
        .catch((err) => {
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
    app.delete('/clientes/:email', (request, response) =>{
        const email = request.params.email
        clienteDb.deleteClientFromEmail(email)
        .then(() =>{
            response.json({
                message:"Cliente deletado com sucesso"
            })
        })
        .catch((err) =>{
            response.json({
                message:"Erro ao deletar cliente",
                Error:err
            })
        })
    })
    app.put('/clientes/:id', (request, response) =>{
        const id = request.params.id
        const {nome, email, cpf, quarto} = request.body
        clienteDb.updateClient(nome, email, cpf, quarto, id)
        .then(() =>{
            response.json({
                Message:"Alteração realizada com sucesso"
            })
        })
        .catch((err) =>{
            response.json({
                message:"Erro ao alterar cliente",
                Error:err
            })
        })    
    })

}




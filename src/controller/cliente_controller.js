const { request, response } = require("express")
const ClienteDAO = require("../DAO/ClienteDAO.js")
const Cliente = require("../model/ClienteModel.js")

module.exports = (app, db) => {

    let clienteDb = new ClienteDAO(db)

    app.get('/clientes', async (request, response)=>{
        try{
        let resposta = await clienteDb.getAllClients()
        response.json(resposta)
        }
        catch(err){
            response.json({error:err.message})
        }
    })
    app.get('/clientes/:id', async (request, response) =>{
        try{
        const id = request.params.id
        let resposta = await clienteDb.getClientFromEmail(id)
            response.json(resposta)
        }
        catch(err){
            response.json({error:err.message})
        }
    })
    app.post('/clientes', async (request, response)=>{
        try{
        const {nome, email, cpf, quarto} = request.body
        let newClient = new Cliente(nome, email, cpf, quarto)
        let resposta = await clienteDb.insertClients(newClient)
        response.json(resposta)
        }
        catch(err){
            response.json({
                message:"Erro ao inserir Cliente",
                Error:true,
                Error:err.message
            })
        }
    })
    app.delete('/clientes/:id', async (request, response) =>{
        try{
        const id = request.params.id
        let resposta = await clienteDb.deleteClientFromEmail(id)
        response.json(resposta)
        }
        catch(err){
            response.json({
                message:"Erro ao deletar cliente",
                Error:err.message
            })
        }
    })
    app.put('/clientes/:id', async (request, response) =>{
        try{
        const id = request.params.id
        const {nome, email, cpf, quarto} = request.body
        let resposta = await clienteDb.updateClient(nome, email, cpf, quarto, id)
        response.json(resposta)
        }
        catch(err){
            response.json({
                message:"Erro ao alterar cliente",
                Error:err.message
            })
        }      
    })

}




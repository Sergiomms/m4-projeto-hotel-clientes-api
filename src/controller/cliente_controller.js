const { request, response } = require("express")
const ClienteDAO = require("../DAO/ClienteDAO.js")
const Cliente = require("../model/ClienteModel")

module.exports = (app) => {
    let clienteDb = new ClienteDAO
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
}


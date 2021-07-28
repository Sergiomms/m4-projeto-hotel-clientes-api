const express = require('express')
const app = express()
const porta = process.env.PORT || 3089
const cors = require('cors')

const mostraCliente = require("./controller/cliente_controller")

const db = require('./infra/sqlite-db')

app.use(express.json())
app.use(cors())

mostraCliente(app, db)

app.listen(porta, () => {
    console.log(`app listening at http://localhost:${porta}`)
});

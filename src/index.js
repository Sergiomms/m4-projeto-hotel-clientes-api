const express = require('express')
const app = express()
const porta = 3089

const mostraCliente = require("./controller/cliente_controller")

app.use(express.json())

mostraCliente(app)

app.listen(porta, () => {
    console.log(`app listening at http://localhost:${porta}`)
});

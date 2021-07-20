const express = require('express')
const app = express()
const porta = 3089

app.use(express.json())

app.listen(porta, () => {
    console.log(`app listening at http://localhost:${porta}`)
});

const express = require('express')
const app = express()
const porta = 3089

app.use(express.json())

app.listen(port, () => {
    console.log(`app listening at http://localhost:${porta}`)
});

const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hi This is Home Page hakeem edited!')
})
app.get('/api/product', (req, res) => {
    res.send("product pahge")
})

app.listen(3000, () => {
    console.log('port running');
})
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hi This is Home Page hakeem!')
})

app.listen(3000, () => {
    console.log('port running');
})
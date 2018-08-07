const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'))
app.get('/home', (req, res) => res.send('Home'))

app.listen(3030, () => console.log('Example app listening on port 3030!'))
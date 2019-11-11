var express = require('express')
var app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile('public/index.html', {
        root: __dirname
    })
})

app.get('/home', (req, res) => {
    res.sendFile('public/index.html', {
        root: __dirname
    })
})

app.get('/register', (req, res) => {
    res.sendFile('public/register.html', {
        root: __dirname
    })
})

app.post('/register', (req, res) => {
    res.redirect('/register')
})

app.post('/confirm', (req, res) => {
    res.sendFile('public/confirm.html', {
        root: __dirname
    })
})

app.post('/home', (req, res) => {
    res.redirect('/home')
})

app.listen(port, () => console.log(`http://localhost:${port}`))
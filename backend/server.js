const resume = require('./resume/cv.json')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const porta = 3003
const app = express()

app.use(bodyParser.json())
/* os metodos put delete get e tal. */

app.use(cors())


app.get('/resume', (req, resp) => {
    resp.send(resume)
})

app.listen(porta)
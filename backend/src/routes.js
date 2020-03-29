const express = require('express')
const routes = express.Router()
const resume = require('./resume/cv.json')

routes.get('/resume', (req, resp) => {
    resp.send(resume)
})

module.exports = routes

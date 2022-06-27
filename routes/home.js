const { render } = require('ejs')
const express = require('express')
const homeRouter = express.Router()

homeRouter.get('', (req,res)=>{
    res.render('index', {text:'sample'})
})


module.exports = homeRouter
const { render } = require('ejs')
const express = require('express')
const aboutRouter = express.Router()

aboutRouter.get('', (req,res)=>{
    res.render('about', {text:'sample'})
})


module.exports = aboutRouter
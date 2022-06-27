const { render } = require('ejs')
const express = require('express')
const loginRouter = express.Router()

loginRouter.get('', (req,res)=>{
    res.render('login', {text:'sample'})
})


module.exports = loginRouter
//import
const express = require('express')
const app =  express()
const ejs = require('ejs')
const bodyParser = require('body-parser')
const homeRouter = require('./routes/home.js')
const aboutRouter = require('./routes/about.js')
const loginRouter = require('./routes/login.js')
const port = 3000

//static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/partials', express.static(__dirname + 'public/partials'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))


//views
app.set('views','./views')
app.set('view engine','ejs')

// middleware


//routes
app.use('/home', homeRouter)
app.use('/about', aboutRouter)
app.use('/login', loginRouter)



// set server connection
app.listen(port, () => {
    console.log('The port is working', port)
}) 

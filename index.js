//import
const express = require('express');
const app =  express();
// const cookieParser = require('cookie-parser');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes.js');
const newConnection = require('./lib/mySqlDb.js');
const fileUpload = require('express-fileupload');
const path = require('path');
const port = 5050;


//static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/partials', express.static(__dirname + 'public/partials'));
app.use(express.static(path.join(__dirname, 'public')));


//views
app.set('views', './views');
app.set('view engine', 'ejs');


// middleware
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
// app.use(cookieParser());

//routes
app.use('/', studentRoutes);


// set server connection
newConnection.connect(function(error){
    try {
        console.log('Connection to the database is Successful')    
    } catch (error) {
        console.log(err)
    }

})


app.listen(port, () => {
    console.log('The port is working', port);
}); 

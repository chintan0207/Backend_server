const express = require('express')
const app = express()
const port = process.env.PORT || 3002

const mongo = require("./views/db/conn");

const sendEmail = require('./views/controller/sendEmail')


const middleware =(req,res,next)=>{
    console.log('hello middleware');
}
 
app.set('view engine','ejs')

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/home', function (req, res) {
    res.render('Home')
  })

app.get('/sendemail', sendEmail)  
  
app.get('/about', function(req, res) {
    res.render('About')

  })

app.get('/contact', function (req, res) {
    res.render('Contact')
  })

app.get('/signup', function (req, res) {
    res.render('Signup')
  })  
app.get('/signin', function (req, res) {
    res.render('Signin')
  })  
  
app.listen(port, () =>{
  console.log(`server is running on port no ${port}`);
})
 

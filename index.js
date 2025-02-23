require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const  route  = require('./router/router')
const app = express()
const PORT = process.env.PORT || 4000


mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error',(error)=>console.log(error)
)
db.once('open',()=>console.log('connection sucseefull'))

//middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(session({
    secret:'my secret key',
    saveUninitialized:true,
    resave:false
}))

app.use((req,res,next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next()
})



//set template engin
app.set("view engine","ejs")

app.use('/',route)

app.get('/',(req,res)=>{
    res.send("Hello World")
})



app.listen(PORT,()=>{
    console.log(`server is running Port : ${PORT}`);
    
})
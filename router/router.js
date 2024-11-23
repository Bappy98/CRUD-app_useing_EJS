const express = require('express')
const router = express.Router()

router.get('/',(req,res) =>{
    res.render('index',{title:'home page'})
})

router.get('/add',(req,res)=>{
    res.render('add_user',{title:'add user'})
})

module.exports = router
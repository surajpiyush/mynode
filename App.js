const express=require('express')
const app=express()
const port=3333
const mongoose=require('mongoose')
const {MONGOURL} = require('./secret.js')
mongoose.connect(MONGOURL)
//TRUE CASE
mongoose.connection.on("connected",()=>{"mongodb is connected "})
//FALSE CASE
mongoose.connection.on('error',(err)=>{"error i connecting mongodb",err})

app.get('/',
(req,res)=>{res.send("Home Page")})

app.listen(port,()=>{console.log(`server is runing ${port}`)})
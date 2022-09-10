App.js extra code :



const express=require('express')
const app=express()
const port=4444
const customMiddleware=(req,res,next)=>{
    console.log("hello,this is middleware")
    next()
}
app.use(customMiddleware)

app.get('/',
(req,res)=>{res.send("Home Page")})


app.post('/',
(req,res)=>{res.send("this is post api")})

app.get('/blog/',(req,res)=>{res.send("This is blog page")})

app.listen(port,()=>{console.log(`server is runing ${port}`)})
const express = require('express');
const app = express();
const port = 7000
const router = require("./router/Routes")

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(router)
//routin
app.get("/",(req,res)=>{
    res.status(200).send("home page")
})


// server
app.listen(port,(req,res)=>{
    console.log(`server is runing on port:${port}`)
})
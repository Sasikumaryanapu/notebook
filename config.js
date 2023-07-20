const mongoose=require("mongoose")
const express = require("express")

const app=express() 
const dotenv=require("dotenv")

//config
dotenv.config()

//port number
PORT=process.env.PORT || 5000

//server connection
mongoose.connect(process.env.MONGO_URL)
.then(app.listen(PORT,()=>{
    console.log("server started on "+PORT)
}))
.catch((error)=>{
    console.log(error)
})

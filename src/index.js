const cors=require("cors")
require("../config")
const express = require("express")
const app=express()

//quotes 
const quotes=require("./quotes.json")

//importing routes
const userRouter=require("./routes/userRouter")
const notesRouter=require("./routes/noteRouter")

app.use(express.json())
app.use(cors())



//routes
app.use("/users",userRouter)
app.use("/notes",notesRouter)

app.get("/read",(req,res)=>{
    res.send("readding")
})

app.get("/random",(req,res)=>{
    const index=Math.floor(Math.random()*quotes.length)
    res.json(quotes[index])
})

app.post("/write",(req,res)=>{
    res.send("writting")
})



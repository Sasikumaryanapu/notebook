const express=require("express");
const { getNote, createNote, deleteNote, upadteNote } = require("../Controllers/noteController");
const noteRouter=express.Router()

const auth=require("../middlewares/auth")

noteRouter.get("/",auth,getNote)

noteRouter.post("/",auth,createNote)

noteRouter.delete("/:id",auth,deleteNote)

noteRouter.put("/:id",auth,upadteNote)

module.exports=noteRouter;


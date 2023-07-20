const mongoose=require("mongoose")

const noteSchema=mongoose.Schema({
    
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    }

},{timestamps:true})

module.exports=mongoose.model("notes",noteSchema)
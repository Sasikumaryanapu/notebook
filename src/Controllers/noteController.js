const notesModel=require("../models/notes")


const getNote=async (req,res)=>{


    try{
        const notes=await notesModel.find({userid:req.userid})

        res.status(200).json(notes)
    }
    catch(error){
        res.status(500).json({"msg":"something went wrong"})

    }


}

const createNote=async (req,res)=>{

    const {title,description}=req.body

    const newNote=await notesModel.create({
        title:title,
        description:description,
        userid:req.userid
    })

    try{

        await newNote.save()

        res.status(200).json(newNote)

    }
    catch(error){
        console.log(error)
        res.status(500).json({"msg":"something went wrong"})

    }

}

const upadteNote=async (req,res)=>{

    const id=req.params.id

    const newNote={
        title:title,
        description:description,
        userid:req.userid
    }

    try{
        await notesModel.findByIdAndUpdate(id,newNote,{new:true})
        res.status(200).json(newNote)
    }
    catch(error){
        res.status(500).json({"msg":"something went wrong"})

    }

}

const deleteNote=async (req,res)=>{

    const id=req.params.id
    try{
        const note= await notesModel.findByIdAndRemove(id)
        res.status(200).json(note)
    }
    catch(error){
        res.status(500).send({"msg":"something went wrong"})

    }
    
}

module.exports={createNote,getNote,deleteNote,upadteNote}
const userModel=require("../models/users")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const SECRET=process.env.SECRET_KEY


const signup=async (req,res)=>{

    const {username,email,password}=req.body

    try{

        const exisitinguser=await userModel.findOne({email:email})

    if(exisitinguser){
        return res.status(400).json({"msg":"user already exists"})
    }
   
    const hashPassword=await bcrypt.hash(password,10)

    const result=await userModel.create({
        username:username,
        email:email,
        password:hashPassword
    })

    const token=jwt.sign({email:email,id:result._id},SECRET)
    res.status(201).json({user:result,token:token})

    }
    catch(error){

        res.status(500).json({"msg":"something went wrong"})
    }

    

}

const signin=async (req,res)=>{

    const {username,email,password}=req.body

    try{

        const exisitinguser=await userModel.findOne({email:email})

    if(!exisitinguser){
        return res.status(400).json({"msg":"user does not exists"})
    }
    
    const matchPassword=bcrypt.compare(password,exisitinguser.password)
    
    if(!matchPassword){
        return res.status(400).json({"msg":"password does not match"})
    }

    const token=jwt.sign({email:exisitinguser.email,id:exisitinguser._id},SECRET)
    res.status(201).json({user:exisitinguser,token:token})
    
    }
    catch(error){
        
        res.status(500).json({"msg":"something went wrong"})
    }

}

module.exports={signup,signin}
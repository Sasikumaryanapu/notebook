const jwt=require("jsonwebtoken")
const SECRET=process.env.SECRET_KEY

const auth=(req,res,next)=>{

    try{

        let token=req.headers.authorization;

        if(token){
            token=token.split(" ")[1]
            console.log(token)
            let user=jwt.verify(token,SECRET)
            req.userid=user.id
        }
        else{
            res.status(401).json({"msg":"unauthorized user"})
        }

        next()

    }
    catch(error){
        console.log(error)
        res.status(401).json({"msg":"unauthorized user"})

    }
}

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlhbmFwdSIsImlkIjoiNjQzNzk1NTg1MTM2OTMzOWI2NWY5YzcwIiwiaWF0IjoxNjgxMzY0MzEzfQ.oXVlkXKk0O2mk96WKPm6RYQnSUGyCH2iqDR4cBJAHm0


// {
//     "title":"yanapu",
//     "description":"yanapu"
//   }

// {
//     "username":"yanapu",
//     "email":"yanapu",
//     "password":"password"
//   }


module.exports=auth


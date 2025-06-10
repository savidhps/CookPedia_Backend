const jwt=require('jsonwebtoken')

const jwtMiddleware=(req,res,next)=>{
    const token=req.headers['authorization'].split(' ')[1]
    
    if (token) {
        try{

        const responce=jwt.verify(token,process.env.SECRETKEY)
        console.log(responce);

        req.payload=responce.userId
        next()
        
    }catch(error){
        res.status(401).json("Authorization failed due to",error)
    }
    }else{
        res.status(404).json('authroziaton failed')
    }
    
}
module.exports=jwtMiddleware
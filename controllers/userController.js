//register
const users=require('../models/userModel')

exports.registerController=async(req,res)=>{
    const {username,email,password}=req.body
    console.log(username,email,password);
    try{
        const existingUser=await users.findOne({email})
        if(existingUser){
            res.status(401).json('Aulredy Exist')
        }else{
            const newUser=new users({
                username,
                email,
                password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch(error){
        res.status(500).json(error)
    }
    
}
//register
const users=require('../models/userModel')
const bcrypt = require('bcrypt');
jwt = require('jsonwebtoken');

//RegisterController
exports.registerController=async(req,res)=>{
    const {username,email,password}=req.body
    console.log(username,email,password);
    try{
        const existingUser=await users.findOne({email})
        if(existingUser){
            res.status(401).json('Aulredy Exist')
        }else{
            const hashedPswd=await bcrypt.hash(password,10)
            const newUser=new users({
                username,
                email,
                password:hashedPswd
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch(error){
        res.status(500).json(error)
    }
    
}
//Login controller 
exports.loginController = async (req, res) => {
    const { email, password } = req.body
    console.log(email, password);

    try {
        const existingUser = await users.findOne({email})
        if (existingUser) {
            const existingUserPassword=await bcrypt.compare(password,existingUser.password)
            console.log(existingUserPassword);
            if (existingUserPassword==true) {
                const token=jwt.sign({userId:existingUser._id},process.env.SECRETKEY)
                console.log(token);
                res.status(200).json({existingUser,token})
                
            }else{
                res.status(401).json('incorrect email or password')
            }
            
        } else {
            res.status(404).json('incorrect email or password')
        }

    } catch (error) {
        res.status(500).json(error)
    }

}
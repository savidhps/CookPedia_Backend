const express=require('express')
const routes=express.Router()
const userController=require('./controllers/userController')

//register
routes.post('/user-register',userController.registerController)



module.exports=routes
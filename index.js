//sd
require('dotenv').config()//to get data from env to processenv

//1import express
const express=require('express')
//2import cors
const cors=require('cors')
//3const routs 
const routes=require('./routes')
//extablishing connextion to mongodb data base
require('./connection')



//1create server
const cookPediaServer=express()
cookPediaServer.use(cors())
cookPediaServer.use(express.json({limit:'10mb'}))
cookPediaServer.use(routes)
//1setPort
const PORT=4000 || process.env.PORT

cookPediaServer.listen(PORT,()=>{
    console.log(`server running sucessfully at port: ${PORT}`);
    
})


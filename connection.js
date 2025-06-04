//import mongoose
const mongoose=require('mongoose')
const connectionString=process.env.DATABASE
mongoose.connect(connectionString).then((res)=>{
    console.log('Mongodb running sucessfully');
    
}).catch((error)=>{
    console.log(`Mongodb connection failed dut to ${error}`);
    
})
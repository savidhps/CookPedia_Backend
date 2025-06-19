const mongoose=require('mongoose')

const testiSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
     email:{
        type:String,
        required:true
    },
     message:{
        type:String,
        required:true
    },
     PermissionStatus:{
        type:String,
        default:'pending'
    },
})

const testimonials=mongoose.model('testimonial',testiSchema)
module.exports=testimonials
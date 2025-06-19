// add testominial controller 
const testimonials=require('../models/testimonialModel')

exports.addTestimonialController=async(req,res)=>{
    const {name,email,message}=req.body;
    try{
        const newTestmonial=new testimonials({
            name,email,message
        })
        await newTestmonial.save()
        res.status(200).json(newTestmonial)

    }catch(error){
        res.status(500).json(error)
    }
}
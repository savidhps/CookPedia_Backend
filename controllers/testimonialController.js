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

// get all testimonials 
exports.getAllTestimonialController=async(req,res)=>{
    try{
        const alltestimonial=await testimonials.find()
        res.status(200).json(alltestimonial)
    }catch(error){
        res.status(500).json(error)
    }
}

// testominal status update controller

exports.updateTestominialStatusController=async(req,res)=>{
    const {id}=req.params
        const {status}=req.body
        console.log(id,status);
    try {
            const existingTestominal=await testimonials.find({_id:id})
            if(existingTestominal){
                const newTestominial=await testimonials.findByIdAndUpdate({_id:id},{
                    name:existingTestominal.name,
                    email:existingTestominal.email,
                    message:existingTestominal.message,
                    PermissionStatus:status
                },{new:true})
                res.status(200).json(newTestominial)
            }else{
                res.status(401).json("something went worng")
            }
        
    } catch (error) {
        res.status(500).json(error)
    }
}

//get all approved testominials
exports.allApprovedTestominalsController=async(req,res)=>{
    try {
        const allapprovedTestominial=await testimonials.find({PermissionStatus:'approved'})
        res.status(200).json(allapprovedTestominial)
    } catch (error) {
        res.status(500).json(error)
    }
}
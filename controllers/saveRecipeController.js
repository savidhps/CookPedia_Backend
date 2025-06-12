const savedRecipes=require('../models/saveModel')

exports.addsaveRecipeController=async(req,res)=>{
    const {recipeId}=req.params
    const {name,image}=req.body
    const userId=req.payload
    try{
        const recipe=await savedRecipes.findOne({recipeId,userId})
        if(recipe){
            res.status(406).json('Already saved')
        }else{
            const newSavedRecipe=new savedRecipes({
                recipeId,
                name,
                image,
                userId
            })
            await newSavedRecipe.save()
            res.status(200).json(newSavedRecipe)
        }
    }catch(error){
        res.status(500).json(error)
    }
}

exports.getAllSavedRecipeController=async(req,res)=>{
    const userId=req.payload
    try{
        const allsavedRecipes=await savedRecipes.find({userId})
        res.status(200).json(allsavedRecipes)
    }catch(error){
        res.status(500).json(error)
    }
}

exports.deleteAllSavedRecipes=async(req,res)=>{
    const {id}=req.params
    try{
        await savedRecipes.findByIdAndDelete({_id:id})
        res.status(200).json('deleted Sucessfully')

    }catch(error){
        res.status(500).json(error)
    }
}
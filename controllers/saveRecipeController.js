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
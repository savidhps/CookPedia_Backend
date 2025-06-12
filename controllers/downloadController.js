const downloads=require('../models/downloadModel')

exports.addDownloadRecipeController=async(req,res)=>{
    const {recipeId}=req.params
    const {name,cuisine,image}=req.body
    const userId=req.payload
    try{
        const existingRecipe=await downloads.findOne({recipeId})
        if(existingRecipe){
            existingRecipe.count+=1
            await existingRecipe.save()
            res.status(200).json(existingRecipe)
        }else{
            const newRecipe=new downloads({
                recipeId,
                name,
                cuisine,
                image,
                count:1,
                userId
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }

    }catch(error){
        res.status(500).json(error)
    }
}

exports.getAlldownloadRecipes=async(req,res)=>{
    const userId=req.payload
    try{
        const allDownloadRecipes=await downloads.find({userId})
        res.status(200).json(allDownloadRecipes)
    }catch(error){
        res.status(500).json(error)
    }
}
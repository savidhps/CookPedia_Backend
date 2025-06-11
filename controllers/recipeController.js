//to get three recipes from data base
const recipes=require('../models/recipeModel')

exports.getHomeRecipeController=async(req,res)=>{
    try {
        const homeRecipes=await recipes.find().limit(6)
        res.status(200).json(homeRecipes)

    } catch (error) {
        res.status(500).json(error)
    }
}

//All recipes
exports.getAllRecipeController=async(req,res)=>{
    try {
        const homeRecipes=await recipes.find()
        res.status(200).json(homeRecipes)

    } catch (error) {
        res.status(500).json(error)
    }
}
// single recipies 
exports.viewRecipeController=async(req,res)=>{
    const {id}=req.params
    try{
        console.log("inside view recipe");
        const recipeDetails=await recipes.findOne({_id:id})
        res.status(200).json(recipeDetails)

    }catch(error){
        res.status(500).json(error)
    }
}

exports.getAllRelatedrecipes=async(req,res)=>{
    try{
        const cuisine=req.query.cuisine
        console.log(cuisine);
        const allrelatedRecipes=await recipes.find({cuisine})
        res.status(200).json(allrelatedRecipes)

    }
    catch(error){
        res.status(500).json(error)
    }
}
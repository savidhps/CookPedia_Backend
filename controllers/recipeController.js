//to get three recipes from data base
const recipes=require('../models/recipeModel')

exports.getHomeRecipeController=async(req,res)=>{
    try {
        const homeRecipes=await recipes.find().limit(3)
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
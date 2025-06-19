//to get three recipes from data base
const recipes = require('../models/recipeModel')

exports.getHomeRecipeController = async (req, res) => {
    try {
        const homeRecipes = await recipes.find().limit(6)
        res.status(200).json(homeRecipes)

    } catch (error) {
        res.status(500).json(error)
    }
}

//All recipes
exports.getAllRecipeController = async (req, res) => {
    console.log("inside get recipe");

    try {
        const homeRecipes = await recipes.find()
        res.status(200).json(homeRecipes)

    } catch (error) {
        res.status(500).json(error)
    }
}
// single recipies 
exports.viewRecipeController = async (req, res) => {
    const { id } = req.params
    try {
        console.log("inside view recipe");
        const recipeDetails = await recipes.findOne({ _id: id })
        res.status(200).json(recipeDetails)

    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getAllRelatedrecipes = async (req, res) => {
    try {
        const cuisine = req.query.cuisine
        console.log(cuisine);
        const allrelatedRecipes = await recipes.find({ cuisine })
        res.status(200).json(allrelatedRecipes)

    }
    catch (error) {
        res.status(500).json(error)
    }
}

// admin recipe add 
exports.addNewRecipeController = async (req, res) => {
    const { recipeName, pretime, calories, serving, cookingTime, rating, modeofCooking, mealType, cuisineTypes, ingredients, instructions, image
    } = req.body

    console.log(recipeName, pretime, calories, serving, cookingTime, rating, modeofCooking, mealType, cuisineTypes, ingredients, instructions, image
    );

    try {

        const newRecipe = new recipes({
            name:recipeName,
            ingredients:ingredients,
            instructions:instructions,
            prepTimeMinutes:pretime,
            cookTimeMinutes:cookingTime,
            servings:serving,
            difficulty:modeofCooking,
            cuisine:cuisineTypes,
            caloriesPerServing:calories,
            image:image,
            rating:rating,
            mealType:mealType,
        })
        await newRecipe.save()
        res.status(200).json(newRecipe)

    } catch (error) {
        res.status(500).json(error)
    }

}

exports.deleteRecipeController=async(req,res)=>{
    const {id}=req.params
    console.log(id)
    try {
        await recipes.findByIdAndDelete({_id:id})
        res.status(200).json('deleted Sucessfully')
    } catch (error) {
        res.status(500).json(error)
    }
}
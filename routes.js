const express=require('express')
const routes=express.Router()
const userController=require('./controllers/userController')
const recipeController=require('./controllers/recipeController')
const jwtMiddleware = require('./middleware/jwtMiddleware')


//register
routes.post('/user-register',userController.registerController)
// lOGIN
routes.post('/user-login',userController.loginController)

//home Recipes
routes.get('/home-recipes',recipeController.getHomeRecipeController)
//get all recipes
routes.get('/all-recipes',recipeController.getAllRecipeController)

// get view a recipe
routes.get('/view/:id',jwtMiddleware,recipeController.viewRecipeController)



module.exports=routes
const express=require('express')
const routes=express.Router()
const userController=require('./controllers/userController')
const recipeController=require('./controllers/recipeController')
const jwtMiddleware = require('./middleware/jwtMiddleware')
const saveRecipeController=require('./controllers/saveRecipeController')
const downloadController=require("./controllers/downloadController")

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

// get all related recipes
routes.get('/related-recipes',jwtMiddleware,recipeController.getAllRelatedrecipes)

// to save recipe
routes.post('/save-recipe/:recipeId',jwtMiddleware,saveRecipeController.addsaveRecipeController)

// path to download recipe routes
routes.post('/download-recipe/:recipeId',jwtMiddleware,downloadController.addDownloadRecipeController)

module.exports=routes
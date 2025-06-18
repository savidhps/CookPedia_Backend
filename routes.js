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

//path to get all saved userRecipes
routes.get('/saved-user-recipes',jwtMiddleware,saveRecipeController.getAllSavedRecipeController)

//path to delete a saved Recipes
routes.delete('/delete-saved-user-recipe/:id',saveRecipeController.deleteAllSavedRecipes)

//path to get all downloaded savedrecipes
routes.get('/downloaded-user-recipes',jwtMiddleware,downloadController.getAlldownloadRecipes)

// path to update Profiler
routes.put('/profile-update',jwtMiddleware,userController.updateProfileController)

// -------------------Admin Routes ------------------------------------------------------------------
routes.get('/all-users',userController.getAllUserController);
//get all downloads

routes.get('/all-downloads',downloadController.getAllDownloadsController);

// path to add recipe 
routes.post('/add-recipe',recipeController.addNewRecipeController)

//path to delet a recipe
routes.delete('/delete-recipe/:id',recipeController.deleteRecipeController)


module.exports=routes
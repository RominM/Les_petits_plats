import { recipes } from "./data.js";
import { displayRecipes } from "./view/displayRecipes.js";


export const updateIngRecipe = (listIng) => {
   const ings = listIng; //List of ingredients
   let listRecipe = [];
   let STATEDATA = [...recipes];
   let count = 0;

   STATEDATA.forEach(recipe => { // ON REINITIALISE LES RECETTES EN LES PASSANT TOUTES À: FALSE
      recipe.display = false;
   });

   STATEDATA.forEach(recipe => {
      for (let i = 0; i < recipe.ingredients.length; i++) {

         const ingredient = recipe.ingredients[i];
         const ingMemo = ingredient.ingredient.toLowerCase();

         for (let ing of ings) { //Citron , Kiwi
            if (ing.toLowerCase() === ingMemo) {
               count++;
            }
         }         
      };
      if (count === ings.length) recipe.display = true;
         
      count = 0;
   });
   displayRecipes(STATEDATA);
}

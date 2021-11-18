import {
   displayError
} from "../view/Display/displayError.js"
import {
   UpdateState
} from "./UpdateState.js";

export const searchRecipe = (listRecipe) => {

   const searchBy = document.querySelector('#searchBy');
   searchBy.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
         upRecipe(listRecipe);

      }
   });
}

const upRecipe = (listRecipe) => {

   toggleRecipes(listRecipe ,false);
   const updateState = new UpdateState(listRecipe);

   let valueInput = searchBy.value;

   let recipes = updateState.updateRecipe(valueInput);

   if (recipes.length == 0) {
      toggleRecipes(listRecipe ,true);
   }

}

const toggleRecipes = (list , bool) => {

   list.forEach(recipe => { // ON REINITIALISE LES RECETTES EN LES PASSANT TOUTES À: FALSE
      recipe.display = bool;
   });

}
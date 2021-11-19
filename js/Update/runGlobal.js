import {
   displayError
} from "../view/Display/displayError.js"
import { closeIngDropBox } from "../view/Display/displayIngDropBox.js";
import { closeAppDropBox } from "../view/Display/displayAppDropBox.js";
import { closeUstDropBox } from "../view/Display/displayUstDropBox.js";
import {
   UpdateState
} from "./UpdateState.js";

export const searchRecipe = (listRecipe) => {

   const searchBy = document.querySelector('#searchBy');
   const searchBtn = document.querySelector('.searchBtn');

   ['keyup','click'].forEach(evt => {
      searchBy.addEventListener(evt, (e) => {
         if (e.keyCode === 13) {
            upRecipe(listRecipe);
         }
         if(evt == 'click') {
            closeIngDropBox();
            closeAppDropBox();
            closeUstDropBox();
         }
      });
   })
   searchBtn.addEventListener('click', () => {
      upRecipe(listRecipe);
   });
}

const upRecipe = (listRecipe) => {

   toggleRecipes(listRecipe ,false);
   const updateState = new UpdateState(listRecipe);

   let valueInput = searchBy.value;

   let recipes = updateState.updateRecipe(valueInput);

   if (recipes.length == 0) {
      toggleRecipes(listRecipe ,true);
      displayError();
   }

}

const toggleRecipes = (list , bool) => {

   list.forEach(recipe => { // ON REINITIALISE LES RECETTES EN LES PASSANT TOUTES À: FALSE
      recipe.display = bool;
   });

}
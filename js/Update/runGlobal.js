import { displayError, removeMainError, removeSpanError } from "../view/Display/displayError.js"
import { closeIngDropBox } from "../view/Display/displayIngDropBox.js";
import { closeAppDropBox } from "../view/Display/displayAppDropBox.js";
import { closeUstDropBox } from "../view/Display/displayUstDropBox.js";
import { UpdateData } from "./UpdateState.js";
import { displayRecipes } from "../view/Display/displayRecipes.js";
import { deletedTagGlobal } from "../view/Display/displayTags.js";

export const runGlobal = (listRecipe) => {
   const searchBy = document.querySelector('#searchBy');
   const searchBtn = document.querySelector('.searchBtn');

   ['keyup', 'click'].forEach(evt => {
      searchBy.addEventListener(evt, (e) => {
         if (e.keyCode === 13) {
            deletedTagGlobal();
            updateGlobal(listRecipe);
         }
         if (evt == 'click') {
            closeIngDropBox();
            closeAppDropBox();
            closeUstDropBox();
            removeSpanError();
         }
      });
   })
   
   searchBtn.addEventListener('click', () => {
      if (searchBy.value.length > 2) {
         deletedTagGlobal();
         updateGlobal(listRecipe);
      } else {
         displayRecipes(STATEDATA);
      }
   });
};

const updateGlobal = (listRecipe) => {
   toggleRecipes(listRecipe, false);
   const updateState = new UpdateData(listRecipe);

   let valueInput = searchBy.value.toLowerCase();
   let recipes = updateState.updateRecipe(valueInput);

   console.log("Recipes lentgh : " + recipes.length)

   if (recipes.length == 0) {
      // toggleRecipes(listRecipe ,false);
      console.log('display');
      displayError();
   } else {
      console.log('remove');
      removeMainError();
   }
};

const toggleRecipes = (list, bool) => {
   list.forEach(recipe => { // ON REINITIALISE LES RECETTES EN LES PASSANT TOUTES À: FALSE
      recipe.display = bool;
   });
};
 
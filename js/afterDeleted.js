import {
   recipes
} from "./data.js";
import {
   displayRecipes
} from "./view/displayRecipes.js";
// import { UpdateState } from "./Update/UpdateState.js";
// import { displayError } from "./view/displayError.js";

export const afterDeletedTag = (tag) => {
   const tags = document.querySelectorAll('.tag'); // TOUS LES TAGS DU DOM

   const tagToDeleted = tag.innerHTML; // LE TAG SUPPRIMÉ
   const dataAttribute = tag.getAttribute('data-attribute'); // DATA-ATTRIBUTE DU TAG (ING, APP, UST)

   const tagList = {
      ing: [],
      app: [],
      ust: []
   };
   tags.forEach(tag => {
      if (tag.innerHTML != tagToDeleted) {
         tagList[tag.getAttribute('data-attribute')].push(tag.innerHTML); // ENCORE PAS CLAIR...
         // console.log(tagList); // LISTE PERMETANT DE RANGER LES TAGS RESTANT DANS LEURS ATTRIBUTS
      }
   });

   let STATEDATA = [...recipes];
   STATEDATA.forEach(recipe => { // ON REINITIALISE LES RECETTES EN LES PASSANT TOUTES À: FALSE
      recipe.display = false;
   });

   const arrayTagIng = tagList.ing;
   const arrayTagApp = tagList.app;
   const arrayTagUst = tagList.app;
   if (arrayTagIng.length > 0) {
      console.log(arrayTagIng.length);
      for (let i = 0; i < arrayTagIng.length; i++) {
         const ingToSearch = arrayTagIng[i].toLowerCase();
         for (let j = 0; j < recipes.length; j++) {
            const recipe = recipes[j];
            for (let k = 0; k < recipe.ingredients.length; k++) {
               const ingredient = recipe.ingredients[k];
               const ingMemo = ingredient.ingredient.toLowerCase();
               if (ingToSearch.includes(ingMemo)) {
                  console.log(ingToSearch);
                  recipe.display = true;
                  displayRecipes(recipes);
                  break
               }
            };
         }
      }
   } else {
      let STATEDATA = [...recipes];
      STATEDATA.forEach(recipe => { // ON REINITIALISE LES RECETTES EN LES PASSANT TOUTES À: FALSE
         recipe.display = true;
      });
      displayRecipes(STATEDATA);
   }
}
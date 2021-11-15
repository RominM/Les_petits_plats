import { recipes } from "./data.js";
import { displayRecipes } from "./view/displayRecipes.js";

export const afterDeletedTag = (tag) => {
   const tags = document.querySelectorAll('.tag'); // TOUS LES TAGS DU DOM

   const tagToDeleted = tag.innerHTML; // LE TAG SUPPRIMÉ

   const tagList = { // LISTE PERMETANT DE RANGER LES TAGS RESTANT DANS LEURS ATTRIBUTS
      ing: [],
      app: [],
      ust: []
   };
   console.log("On a peut être réussi je re test");

   tags.forEach(tag => {
      if (tag.innerHTML != tagToDeleted) {
         tagList[tag.getAttribute('data-attribute')].push(tag.innerHTML);
      }
   });

   let STATEDATA = [...recipes];
   STATEDATA.forEach(recipe => { // ON REINITIALISE LES RECETTES EN LES PASSANT TOUTES À: FALSE
      recipe.display = false;
   });

   if (tagList.ing.length > 0) {
      for (let i = 0; i < tagList.ing.length; i++) {
         const ingToSearch = tagList.ing[i].toLowerCase();

         for (let j = 0; j < recipes.length; j++) {
            const recipe = recipes[j];
            for (let k = 0; k < recipe.ingredients.length; k++) {
               const ingredient = recipe.ingredients[k];
               const ingMemo = ingredient.ingredient.toLowerCase();
               if (ingToSearch.includes(ingMemo)) {
                  recipe.display = true;
                  displayRecipes(recipes);
                  break
               }
            };
         }
      }
   } 
   else if (tagList.ust.length > 0) {
      for (let i = 0; i < tagList.ust.length; i++) {
         const ustToSearch = tagList.ust[i].toLowerCase();
         
         for (let j = 0; j < recipes.length; j++) {
            const recipe = recipes[j];
            for (let k = 0; k < recipe.ustensils.length; k++) {
               const ustMemo = recipe.ustensils[k].toLowerCase();
               if (ustToSearch.includes(ustMemo)) {
                  recipe.display = true;
                  displayRecipes(recipes);
                  break
               }
            }
         }
      }
   } 
   else {
      let STATEDATA = [...recipes];
      STATEDATA.forEach(recipe => { // ON REINITIALISE LES RECETTES EN LES PASSANT TOUTES À: FALSE
         recipe.display = true;
      });
      displayRecipes(STATEDATA);
   }
}
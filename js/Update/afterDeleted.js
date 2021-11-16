import { recipes } from "../data.js";
import { displayRecipes } from "../view/Display/displayRecipes.js";

export const updateIngRecipe = (listIng) => {

   const ings = listIng; //List of remaining ingredients
   // let listRecipe = [];
   let count = 0;
   
   let STATEDATA = [...recipes];
   STATEDATA.forEach(recipe => { // ON REINITIALISE LES RECETTES EN LES PASSANT TOUTES À: FALSE
      recipe.display = false;
   });

   STATEDATA.forEach(recipe => {
      for (let i = 0; i < recipe.ingredients.length; i++) {

         const ingredient = recipe.ingredients[i];
         const ingMemo = ingredient.ingredient.toLowerCase();

         for (let ing of ings) {
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

export const updateUstRecipe = (listUst) => {
   const usts = listUst;

   let count = 0;

   let STATEDATA = [...recipes];
   STATEDATA.forEach(recipe => {
      for (let i = 0; i < recipe.ustensils.length; i++) {

         const ustensils = recipe.ustensils[i];
         const ustMemo = ustensils.toLowerCase();

         for (let ust of usts) { //Citron , Kiwi
            if (ust.toLowerCase() === ustMemo) {
               count++;
            }
         }         
      };
      if (count === usts.length) recipe.display = true;
         
      count = 0;
   });

   displayRecipes(STATEDATA);
} 

export const updateAllRecipes = () => {

}
































export const afterDeletedTag = (tag) => {
   const tags = document.querySelectorAll('.tag'); // TOUS LES TAGS DU DOM

   const tagToDeleted = tag.innerHTML; // LE TAG SUPPRIMÉ

   const tagList = { // LISTE PERMETANT DE RANGER LES TAGS RESTANT DANS LEURS ATTRIBUTS
      ing: [],
      app: [],
      ust: []
   };

   tags.forEach(tag => {
      if (tag.innerHTML != tagToDeleted) {
         tagList[tag.getAttribute('data-attribute')].push(tag.innerHTML);
      }
   });
   console.log(tagList);
   const ingRecipe = [];


   let STATEDATA = [...recipes];
   STATEDATA.forEach(recipe => { // ON REINITIALISE LES RECETTES EN LES PASSANT TOUTES À: FALSE
      recipe.display = false;
   });

   if (tagList.ing.length > 0) {
      for (let i = 0; i < tagList.ing.length; i++) {
         const ingToSearch = tagList.ing[i].toLowerCase(); //Tag 1

         for (let j = 0; j < recipes.length; j++) {
            const recipe = recipes[j]; //Recette 1 
            for (let k = 0; k < recipe.ingredients.length; k++) {
               const ingredient = recipe.ingredients[k]; //Ingrédient 1 
               const ingMemo = ingredient.ingredient.toLowerCase();
               if (ingToSearch === ingMemo) {

                  //recipe.display = true;
                  //displayRecipes(recipes);
                  //break
               }
            };
         }
      }
   } else if (tagList.ust.length > 0) {
      for (let i = 0; i < tagList.ust.length; i++) {
         const ustToSearch = tagList.ust[i].toLowerCase();

         for (let j = 0; j < recipes.length; j++) {
            const recipe = recipes[j];
            for (let k = 0; k < recipe.ustensils.length; k++) {
               const ustMemo = recipe.ustensils[k].toLowerCase();
               if (ustToSearch === ustMemo) {
                  recipe.display = true;
                  displayRecipes(recipes);
                  break
               }
            }
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
// import { runIng } from "./runIng.js";
import {
   recipes
} from "../data.js";

export const runGlobalResearch = (STATEDATA) => {
   const searchBy = document.querySelector('#searchBy');
   // searchBy.addEventListener('click', () => {
   // runIng();
   // });

   const searchBtn = document.querySelector('.searchBtn');
   searchBtn.addEventListener('click', () => {
      const value = searchBy.value;
      recipes.forEach(recipe => {

         // RECETTE
         const description = recipe.description;
         // INGREDIENTS
         let ingA = [];
         const ingredients = recipe.ingredients;
         ingredients.forEach(ingredient => {
            ingA.push(ingredient.ingredient)
         })
         // APPAREILS
         const appliances = recipe.appliance;
        // USTENSILS
         const ustensils = recipe.ustensils;
         let ustA = [];
         ustensils.forEach(ustensil => {
            ustA.push(ustensil)
         })
         const fullRecipe = [description, ...ingA, appliances, ...ustA];
         console.log(fullRecipe);
         // console.table('DESCRIPTION: ' + description, 'INGREDIENTS: ' + [...ingA], 'APPAREIL: ' + appliances, 'USTENSILS: ' + [...ustA]);

         // SI LA VALUE INCLUE UN INGREDIENT => runIngredient
         if(value.includes(ingA)) {
            console.log('yep !');
         }
         else {
            console.log('nope');
         }
      })
   })
}
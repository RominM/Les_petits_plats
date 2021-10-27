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

         const description = recipe.description;
         console.log('La recette est: ' + '( ' + description + ' )');// recettes

         let ingA = [];
         const ingredients = recipe.ingredients;
         ingredients.forEach(ingredient => {
            ingA.push(ingredient.ingredient)
         })
         console.log('Les ingredients sont: ' + ingA);// ingredients

         const appliances = recipe.appliance;
         console.log('l\'appareil est: ' + appliances);// appareils

         const ustensils = recipe.ustensils;
         let ustA = [];
         ustensils.forEach(ustensil => {
            ustA.push(ustensil)
         })
         console.log('Les ustensils sont: ' + ustA);// ustensils
      })
   })
}
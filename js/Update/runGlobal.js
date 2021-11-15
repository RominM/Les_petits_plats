// import { runIng } from "./runIng.js";
import { recipes } from "../data.js";
import { displayError } from "../view/displayError.js"
import { getFilterIng } from "../Handler/handlerIng.js";
import { UpdateState } from "./UpdateState.js";

// PRESSE ENTER
export const runGlobalResearch = (STATEDATA) => {
   const searchBy = document.querySelector('#searchBy');
   searchBy.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
         searchAction();
      }
   });

// CLICK ON SEARCH
   const searchBtn = document.querySelector('.searchBtn');
   searchBtn.addEventListener('click', () => {
      searchAction();
   });

// WHAT'S APPEND ?
   const searchAction = () => {
      const inpValue = searchBy.value.toLowerCase();
      // FOR EACH RECIPE
      recipes.forEach(recipe => {
         
         // RECETTE
         const description = recipe.description.toLowerCase();

         // INGREDIENTS
         let ing = [];
         const ingredients = recipe.ingredients;
         ingredients.forEach(ingredient => {
            ing.push(ingredient.ingredient.toLowerCase());
         });

         // APPAREILS
         const appliances = recipe.appliance.toLowerCase();

        // USTENSILS
         const ustensils = recipe.ustensils;
         let ust = [];
         ustensils.forEach(ustensil => {
            ust.push(ustensil.toLowerCase())
         });

         const fullRecipe = [description, ...ing, appliances, ...ust];
         // console.table('DESCRIPTION: ' + description, 'INGREDIENTS: ' + [...ing], 'APPAREIL: ' + appliances, 'USTENSILS: ' + [...ust]);

         // SI INPVALUE EST CONTENU DANS LES INGREDIENTS => TRIE PAR INGREDIENT
         
         if(inpValue.length > 2) {
            if(ing.includes(inpValue) || appliances.includes(inpValue) || ust.includes(inpValue)) {
               // const filtIng = getFilterIng(inpValue);

               // const updateState = new UpdateState(STATEDATA, inpValue);
               // updateState.updateIngData(filtIng);
               console.log('yes');
            }
            else {
               console.log('nope');
               displayError();
            }  
         }
      })
   }
}



import { displayRecipes } from "./displayRecipes.js";
import { displayIngredients } from "./handlerIngredient.js";

export class UpdateState {
   constructor(STATEDATA, inpValue) {
      this.STATEDATA = STATEDATA;
      this.inpValue = inpValue;
   }
   stateData(STATEDATA, inpValue) {
      searchIngredients();
      searchAppliance();
      searchUstensils();
      return stateData
   }
   updateIngData(STATEDATA, inpValue) {
      // console.log('in searchIngredient()');
      // console.log(this.inpValue);

      this.STATEDATA.forEach(recipe => {
         recipe.ingredients.forEach(ingredient => {
            const ingMemo = ingredient.ingredient;
            const sliced = ingMemo.slice(0, this.inpValue.length);

            if(sliced.toLowerCase() !== this.inpValue.toLowerCase()) {
               console.log('recipe.display = false');
               this.STATEDATA.forEach(recipe => {
                  recipe.display = false;
               });
            }
            else {
               // console.log('recipe.display = true');
               displayRecipes();
            }
         })
      });
   }
   updateAppData(STATEDATA, inpValue) {
      console.log('in searchAppliance()');
   }
   updateUstData(STATEDATA, inpValue) {
      console.log('in searchUstensils()');
   }
}




//si(inputValue != ingredient) { //si pas d'ingredient
   // affiche error() // Affiche le message d'erreur
   //} else {
   // displayRecipe(ingredient) // sinon affiche les recettes qui contiennent "Ingredient"
// }



/* 
const callback = () => {
   if(inpValue == Ingredient || appliance || ustensli) {
      maj DATA
   }

displayRecipe(callback)
} */


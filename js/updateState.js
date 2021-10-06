import {
   displayRecipes
} from "./displayRecipes.js";
import {
   displayIngredients
} from "./handlerIngredient.js";

export class UpdateState {
   constructor(STATEDATA, inpValue) {
      this.STATEDATA = STATEDATA;
      this.inpValue = inpValue;
   }
   stateData(STATEDATA, inpValue) {
      updateIngData();
      searchAppliance();
      searchUstensils();
      return stateData
   }
   updateIngData(inpValue) {
      console.log(inpValue);

      // console.log('in searchIngredient()');
      // console.log(this.inpValue);

      this.STATEDATA.forEach(recipe => {
         if(recipe.display == true) {
            for (let i = 0; i < recipe.ingredients.length; i++) {
               const ingredient = recipe.ingredients[i];
               const ingMemo = ingredient.ingredient.toLowerCase();
   
               if (inpValue.includes(ingMemo)) {
                  recipe.display = true;
                  break
               } else {
                  recipe.display = false;
               }
            }
         }
      })
      displayRecipes(this.STATEDATA)
   }
   updateAppData(STATEDATA, inpValue) {
      console.log('in searchAppliance()');
   }
   updateUstData(STATEDATA, inpValue) {
      console.log('in searchUstensils()');
   }
}



/*
créer un nouveau dossier pour ranger les fichier js

gérer les 3 inputs
si je tape 'coco' et que je click (garder les recettes selectionné)
refermer la dropBox
ajout d'une bulle avec l'ingredient
vider l'input
garder les recettes >>> displayIngredient() + ...

penser a garder les recette en display = true
*/
import { displayRecipes } from "../view/Display/displayRecipes.js";

export class UpdateState {
   constructor(STATEDATA) {
      this.STATEDATA = STATEDATA;
   }

   /* STATEDATA;
    inpValue;

   constructor(data , value) {
      this.STATEDATA = data;
      this.inpValue = value;
   }
*/

   stateData() {
      updateIngData();
      updateAppData();
      updateUstData();
      return stateData
   }
   // INGREDIENTS
   updateIngData(inpValue) {
      this.STATEDATA.forEach(recipe => {
         if (recipe.display == true) {
            for (let i = 0; i < recipe.ingredients.length; i++) {
               const ingredient = recipe.ingredients[i];
               const ingMemo = ingredient.ingredient.toLowerCase();

               if (inpValue.includes(ingMemo)) {
                  recipe.display = true;
                  break
               } else {
                  recipe.display = false;
               };
            };
         }
      });
      displayRecipes(this.STATEDATA);
   };
   // APPLIANCES
   updateAppData(inpValue) {
      this.STATEDATA.forEach(recipe => {
         if (recipe.display == true) {
            const appliance = recipe.appliance;
            const appMemo = appliance.toLowerCase();

            if (inpValue.includes(appMemo)) {
               recipe.display = true;
            } else {
               recipe.display = false;
            };
         };
      })
      displayRecipes(this.STATEDATA);
   };
   // USTENSILS
   updateUstData(inpValue) {

      this.STATEDATA.forEach(recipe => {
         if (recipe.display == true) {
            for (let i = 0; i < recipe.ustensils.length; i++) {
               const ustensil = recipe.ustensils[i];
               const ustMemo = ustensil.toLowerCase();
               
               if (inpValue.includes(ustMemo)) {
                  recipe.display = true;
                  break
               } else {
                  recipe.display = false;
               };
            };
         };
      })
      displayRecipes(this.STATEDATA);
   };
};
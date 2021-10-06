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
      console.log('in searchIngredient()');
      console.log(this.inpValue);

      this.STATEDATA.forEach(recipe => {
         recipe.ingredients.forEach(ingredient => {
            const ingMemo = ingredient.ingredient;
            const sliced = ingMemo.slice(0, this.inpValue.length);

            if(sliced.toLowerCase() !== this.inpValue.toLowerCase()) {
               console.log('hell no');
               this.STATEDATA.forEach(recipe => {
                  recipe.display = false;
               });
            }
            else {
               console.log('yes');
            }
            // STATEDATA.forEach(recipe => {
            //    recipe.display = true;
            // });
         })
      });
      // displayIngredients(STATEDATA);
   }
   updateAppData(STATEDATA, inpValue) {
      console.log('in searchAppliance()');
   }
   updateUstData(STATEDATA, inpValue) {
      console.log('in searchUstensils()');
   }
}
import { error } from "../error.js";
import { displayRecipes } from "../view/displayRecipes.js";

export class UpdateState {
   constructor(STATEDATA, inpValue) {
      this.STATEDATA = STATEDATA;
      this.inpValue = inpValue;
   }
   
   stateData() {
      updateIngData();
      updateAppData();
      updateUstData();
      return stateData
   }
   // INGREDIENTS
   updateIngData(inpValue) {
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
               };
            };
         }
      });
      displayRecipes(this.STATEDATA);
   };
   // APPLIANCES
   updateAppData(inpValue) {
      const recipes = this.STATEDATA;
      for (let i = 0; i < recipes.length; i++) {
         const recipe = recipes[i];
         
         if(recipe.display == true) {
            const appMemo = recipe.appliance.toLowerCase();
            if (inpValue.includes(appMemo)) {
               recipe.display = true;
               break
            } else {
               recipe.display = false;
            };
         };
      };
      displayRecipes(this.STATEDATA);
   };
   // USTENSILS
   updateUstData(inpValue) {
      const recipes = this.STATEDATA;
      recipes.forEach(recipe => {
         for (let i = 0; i < recipe.ustensils.length; i++) {
            const ustensil = recipe.ustensils[i];
            
            if(recipe.display == true) {
               const ustMemo = ustensil.toLowerCase();
               if(inpValue.includes(ustMemo)) {
                  recipe.display = true;
                  break
               } else {
                  recipe.display = false;
               };
            }  ; 
         };
      });
      displayRecipes(this.STATEDATA);
   };
};

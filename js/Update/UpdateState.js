import {
   displayRecipes
} from "../view/Display/displayRecipes.js";

export class UpdateData {
   constructor(STATEDATA) {
      this.STATEDATA = STATEDATA;
   }
 
   //Update General
   updateAllData(nameIng, type) {
      switch (type) {
         case "ing":
            this.updateIngData(nameIng);
            break;
         case "app":
            this.updateAppData(nameIng);
            break;
         case "ust":
            this.updateUstData(nameIng);
            break;
         default:
            break;
      }
   };

   initTabsIng(recipe) {

      let ingMemo = [];

      recipe.ingredients.forEach(ings => {
         ingMemo.push(ings.ingredient.toLowerCase());
      });

      return ingMemo;
   }

   initApp(recipe) {

       return recipe.appliance.toLowerCase();
    }

   initTabsUst(recipe) {

      let ustMemo = [];

      recipe.ustensils.forEach(usts => {
         console.log();
         ustMemo.push(usts.toLowerCase());
      });

      return ustMemo;
   }

   // INGREDIENTS
   updateIngData(inpValue, type) {

      this.STATEDATA.map(recipe => { //recipe true
         if (recipe.display === true) {
            let ingMemo = this.initTabsIng(recipe);

            if (ingMemo.includes(inpValue)) {
               console.log('is true');
               recipe.display = true;
            } else {
               console.log('is false');
               recipe.display = false;
            }
         }
      });

      displayRecipes(this.STATEDATA);
   };











   // APPLIANCES
   updateAppData(inpValue) {
      this.STATEDATA.map(recipe => {
         if (recipe.display == true) {
            const appMemo = this.initApp(recipe);

            if (inpValue === appMemo) {
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

      this.STATEDATA.map(recipe => {
         if (recipe.display == true) {
            const ustMemo = this.initTabsUst(recipe);

            if (ustMemo.includes(inpValue)) {
               recipe.display = true;
            } else {
               recipe.display = false;
            };
         };
      })
      displayRecipes(this.STATEDATA);
   };

   updateRecipe(inpValue) {
      let listRecipe = [];

      if (inpValue.length > 2) {

         this.STATEDATA.forEach(recipe => {
            for (let i = 0; i < recipe.ingredients.length; i++) {
               const ingredient = recipe.ingredients[i];
               const ingMemo = ingredient.ingredient.toLowerCase();
               if (ingMemo.includes(inpValue)) {
                  recipe.display = true;
                  if (!listRecipe.includes(recipe)) listRecipe.push(recipe);
               }
            };

            const name = recipe.name;
            const nameMemo = name.toLowerCase();
            if (nameMemo.includes(inpValue)) {
               recipe.display = true;
               if (!listRecipe.includes(recipe)) listRecipe.push(recipe);
            }

            const desc = recipe.description;
            const descMemo = desc.toLowerCase();
            if (descMemo.includes(inpValue)) {
               recipe.display = true;
               if (!listRecipe.includes(recipe)) listRecipe.push(recipe);
            }
         });

         displayRecipes(listRecipe);
         return listRecipe;
      }
   };
}
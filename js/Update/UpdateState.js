import { displayRecipes } from "../view/Display/displayRecipes.js";

export class UpdateData {

   constructor(STATEDATA) {
      this.STATEDATA = STATEDATA;
   }
   stateData() {
      updateState();
   }

   updateState = (inpValue) => {
      console.log(inpValue);
      this.STATEDATA.forEach(recipe => {
         if (recipe.display == true) {
            // INGREDIENT
            let ingMemo = [];
            for (let i = 0; i < recipe.ingredients.length; i++) {
               const ingredient = recipe.ingredients[i];
               ingMemo.push(ingredient.ingredient.toLowerCase());
            }
            // APPLIANCES
            const appliance = recipe.appliance;
            const appMemo = appliance.toLowerCase();
            // USTENSILS
            let ustMemo = [];
            for (let i = 0; i < recipe.ustensils.length; i++) {
               const ustensil = recipe.ustensils[i];
               ustMemo.push(ustensil.toLowerCase());
            }
            switch (inpValue.includes()) {
               case ingMemo:
                  console.log('Ingredients');
                  recipe.display = true;
                  break;
      
               case appMemo:
                  console.log('Appliances');
                  recipe.display = true;
                  break;
      
               case ustMemo:
                  recipe.display = true;
                  console.log('Ustensils');
                  break;
      
               default:
                  recipe.display = false;
                  break;
            }
         }
      });
   };
}


/*
   constructor(STATEDATA) {
      this.STATEDATA = STATEDATA;
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
*/
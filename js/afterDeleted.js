import {
   recipes
} from "./data.js";
import {
   UpdateState
} from "./Update/UpdateState.js";
import {
   displayError
} from "./view/displayError.js";
import {
   displayRecipes
} from "./view/displayRecipes.js";

export const afterDeletedTag = (tag) => {
   const tags = document.querySelectorAll('.tag');

   const tagToDeleted = tag.innerHTML;
   const dataElement = tag.getAttribute('data-element');

   const tagList = {
      ing: [],
      app: [],
      ust: []
   };

   recipes.forEach(recipe => {
      recipe.display = false;
   });

   tags.forEach(tag => {
      if (tag.innerHTML != tagToDeleted) {
         tagList[tag.getAttribute('data-element')].push(tag.innerHTML)
      }
   });

   const arrayIng = tagList.ing;
   if (arrayIng.length > 0) {
      for (let i = 0; i < arrayIng.length; i++) {
         const ingToSearch = arrayIng[i].toLowerCase();
         for (let j = 0; j < recipes.length; j++) {
            const recipe = recipes[j];
            for (let k = 0; k < recipe.ingredients.length; k++) {
               const ingredient = recipe.ingredients[k];
               // const ing = ingredient.ingredient;
               const ingMemo = ingredient.ingredient.toLowerCase();
               console.log(ingToSearch);
               console.log(ingMemo);
               if (ingToSearch.includes(ingMemo)) {
                  recipe.display = true;
                  break
               } else {
                  displayRecipes(recipes);
               }
            };
         }
      }
   }

   // displayRecipes(recipes);
}
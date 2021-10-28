import { recipes } from "./data.js";
import { displayRecipes } from "./view/displayRecipes.js";

export const afterDeletedTag = (tag) => {
   const containsTags = document.querySelector('.contains-tags');
   let STATEDATA = [...recipes];

   for (let i = 0; i < containsTags.childNodes.length; i++) {
      if (containsTags.childNodes[i].style.display !== 'none') {
         recipes.forEach(recipe => {

            recipe.ingredients.forEach(ingredients => {
               const ing = ingredients.ingredient;
               containsTags.childNodes[i].childNodes.forEach(span => {
                  const spanTag = span.innerHTML;
                  
                  if(ing.toLowerCase() === spanTag.toLowerCase()) {
                     const registre = document.querySelector('.registre');
                     registre.innerHTML = '';
                     displayRecipes(STATEDATA)
                  }
               })
            })
         })
      }
   }
}

// je veux UNIQUEMENT les tags restant dans la <div.contains-tags> après la suppression d'un tag === CHECK ! >>> containsTags.childNodes[i]
// Je veux boucler sur recipe.ingredient. Si containsTags.childNodes[i] == recipe.ingredient, tu affiches les recettes



/*
const const deletedFunction = (tag) => {
   console.log(tag) >>> return the tag clicked

   const allTags = document.querySelectorAll('.tag-ing', '.tag-app', '.tag-ust')
   data.forEache(recipe => {
      if(recipe.ingredient == contains)
   })
}
*/
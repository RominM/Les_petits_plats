import { recipes } from "./data.js";
// import { displayRecipes } from "./view/displayRecipes.js";

export const afterDeletedTag = (tag) => {// (tag) = tag cliqué/supprimer
   const containsTags = document.querySelector('.contains-tags');// div parents contenant les div(ing, app, ust)
   let STATEDATA = [...recipes];// data

   for (let i = 0; i < containsTags.childNodes.length; i++) {// boucle sur les div(ing, app, ust) enfant de ".contains-tags"
      if (containsTags.childNodes[i].style.display !== 'none') {// celles qui restent
         recipes.forEach(recipe => {
            // INGREDIENTS
            let ing;
            recipe.ingredients.forEach(ingredients => {
               const ingArray = ingredients.ingredient;
               ing = ingArray;
            });

            // APPAREIL
            let app;
            app = recipe.appliance;

            // USTENSILS
            let ust;
            recipe.ustensils.forEach(ustensil => {
               ust = ustensil;
            })

            // boucle sur les tags (dans les div (ing, app, ust))
            containsTags.childNodes[i].childNodes.forEach(span => {
               const spanTag = span.innerHTML;
               if(ing.toLowerCase() === spanTag.toLowerCase()) {// comparer ingredient et tag (string). Si identique...
                  //update en fonction des spanTag restants
                  console.log(ing);
               } else if (app.toLowerCase() === spanTag.toLowerCase()) {// comparer appareil et tag (string). Si identique...
                  //update en fonction des spanTag restants
                  console.log(app);
               } else if (ust.toLowerCase() === spanTag.toLowerCase()) {// comparer ustensil et tag (string). Si identique...
                  //update en fonction des spanTag restants
                  console.log(ust);
               }
            });
         });
      };
   };
};

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
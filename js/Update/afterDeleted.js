import { recipes } from "../data.js";
import { displayRecipes } from "../view/Display/displayRecipes.js";

export const updateIngRecipe = (listIng) => {
   
   const ings = listIng; //List of remaining ingredients
   // let listRecipe = [];
   let count = 0;
   
   let STATEDATA = [...recipes];
   STATEDATA.forEach(recipe => { // ON REINITIALISE LES RECETTES EN LES PASSANT TOUTES À: FALSE
      recipe.display = false;
   });

   STATEDATA.forEach(recipe => {
      for (let i = 0; i < recipe.ingredients.length; i++) {

         const ingredient = recipe.ingredients[i];
         const ingMemo = ingredient.ingredient.toLowerCase();

         for (let ing of ings) {
            if (ing.toLowerCase() === ingMemo) {
               count++;
            }
         }         
      };
      if (count === ings.length) recipe.display = true;
         
      count = 0;
   });
   displayRecipes(STATEDATA);
}

export const updateUstRecipe = (listUst) => {
   const usts = listUst;

   let count = 0;

   let STATEDATA = [...recipes];
   STATEDATA.forEach(recipe => {
      for (let i = 0; i < recipe.ustensils.length; i++) {

         const ustensils = recipe.ustensils[i];
         const ustMemo = ustensils.toLowerCase();

         for (let ust of usts) { //Citron , Kiwi
            if (ust.toLowerCase() === ustMemo) {
               count++;
            }
         }         
      };
      if (count === usts.length) recipe.display = true;
         
      count = 0;
   });

   displayRecipes(STATEDATA);
} 

export const updateAllRecipes = () => {

}
































export const afterDeletedTag = (tag) => {
   
   const tags = document.querySelectorAll('.tag'); // TOUS LES TAGS DU DOM
   const tagToDeleted = tag.innerHTML; // LE TAG SUPPRIMÉ

   const tagList = { // LISTE PERMETANT DE RANGER LES TAGS RESTANT DANS LEURS ATTRIBUTS
      ing: [],
      app: [],
      ust: []
   };
   const arrayAllTags = [];

   tags.forEach(tag => {
      if (tag.innerHTML != tagToDeleted) {
         arrayAllTags.push(tag.innerHTML);
         tagList[tag.getAttribute('data-attribute')].push(tag.innerHTML);
      }
   });

 
   const tagListIng = tagList.ing;
   const tagListApp = tagList.app;
   const tagListUst = tagList.ust;
   const tagsLength = tagListIng.length + tagListApp.length + tagListUst.length;
   console.log('tagLength is : ' + tagsLength);

   let count = 0;

   let STATEDATA = [...recipes];
   STATEDATA.forEach(recipe => { // ON REINITIALISE LES RECETTES EN LES PASSANT TOUTES À: FALSE
      recipe.display = false;

      // INGREDIENTS
      for (let ingredient of recipe.ingredients) {
         const ingMemo = ingredient.ingredient.toLowerCase();
         tagListIng.forEach(tagIng => {
            if (tagIng.toLowerCase() === ingMemo) {
               count++;
               console.log('ing in recipe : ' + ingMemo);
               console.log('count is : ' + count);
            };
         });
      };

      // APPLIANCES
      const appMemo = recipe.appliance.toLowerCase();
      tagListApp.forEach(tagApp => {
         if (tagApp.toLowerCase() === appMemo) {
            count++;
            console.log('app in recipe : ' + appMemo);
            console.log('count is : ' + count);
         };
      });

      // USTENSILS
      for (const ustensil of recipe.ustensils) {
         const ustMemo = ustensil.toLowerCase();
         tagListUst.forEach(tagUst => {
            if (tagUst.toLowerCase() === ustMemo) {
               count++;
               console.log('ust in recipe : ' + ustMemo);
               console.log('count is : ' + count);
            };
         });
      };

      // console.log('count is : ' + count);
      if (count === tagsLength) recipe.display = true;
      console.log(recipe.display);
      count = 0;
   });
   displayRecipes(STATEDATA);





















   // if (tagListIng.length > 0) {
   //    console.log('Ing superior to 0');
   //    for (let i = 0; i < tagListIng.length; i++) {
   //       const ingToSearch = tagList.ing[i].toLowerCase(); //Tag 1

   //       console.log(ingToSearch);

   //       for (let j = 0; j < recipes.length; j++) {
   //          const recipe = recipes[j]; //Recette 1 
   //          for (let k = 0; k < recipe.ingredients.length; k++) {
   //             const ingredient = recipe.ingredients[k]; //Ingrédient 1 
   //             const ingMemo = ingredient.ingredient.toLowerCase();
   //             if (ingToSearch === ingMemo) {

   //                //recipe.display = true;
   //                //displayRecipes(recipes);
   //                //break
   //             }
   //          };
   //       }
   //    }
   // } else if (tagListApp.length > 0) {
   //    for (let i = 0; i < tagList.ust.length; i++) {
   //       const ustToSearch = tagList.ust[i].toLowerCase();

   //       for (let j = 0; j < recipes.length; j++) {
   //          const recipe = recipes[j];
   //          for (let k = 0; k < recipe.ustensils.length; k++) {
   //             const ustMemo = recipe.ustensils[k].toLowerCase();
   //             if (ustToSearch === ustMemo) {
   //                recipe.display = true;
   //                displayRecipes(recipes);
   //                break
   //             }
   //          }
   //       }
   //    }
   // } else {
   //    let STATEDATA = [...recipes];
   //    STATEDATA.forEach(recipe => { // ON REINITIALISE LES RECETTES EN LES PASSANT TOUTES À: FALSE
   //       recipe.display = true;
   //    });
   //    displayRecipes(STATEDATA);
   // }
}
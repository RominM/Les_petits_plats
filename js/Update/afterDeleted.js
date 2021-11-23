import { recipes } from "../data.js";
import { displayRecipes } from "../view/Display/displayRecipes.js";

export const afterDeletedTag = (tag) => {

   const tags = document.querySelectorAll('.tag');
   const tagToDeleted = tag.innerHTML; // LE TAG SUPPRIMÉ

   // LISTE PERMETANT DE RANGER LES TAGS RESTANT DANS LEURS ATTRIBUTS
   const tagList = { 
      ing: [],
      app: [],
      ust: []
   };

   tags.forEach(tag => {
      if (tag.innerHTML != tagToDeleted) {
         tagList[tag.getAttribute('data-attribute')].push(tag.innerHTML);
      }
   });
   const tagListIng = tagList.ing;
   const tagListApp = tagList.app;
   const tagListUst = tagList.ust;
   const tagsLength = tagListIng.length + tagListApp.length + tagListUst.length;

   let count = 0;

   let STATEDATA = [...recipes];
   STATEDATA.forEach(recipe => { 
      recipe.display = false; // ON REINITIALISE LES RECETTES EN LES PASSANT TOUTES À: FALSE

      // INGREDIENTS
      for (let ingredient of recipe.ingredients) {
         const ingMemo = ingredient.ingredient.toLowerCase();
         tagListIng.forEach(tagIng => (tagIng.toLowerCase() === ingMemo) && count++);
      };

      // APPLIANCES
      const appMemo = recipe.appliance.toLowerCase();
      tagListApp.forEach(tagApp => (tagApp.toLowerCase() === appMemo) && count++);

      // USTENSILS
      for (const ustensil of recipe.ustensils) {
         const ustMemo = ustensil.toLowerCase();
         tagListUst.forEach(tagUst => (tagUst.toLowerCase() === ustMemo) && count++);
      };

      if (count === tagsLength) recipe.display = true;
      count = 0;
   });
   displayRecipes(STATEDATA);
};
import { recipes } from "../data.js";

export const getAllIng = (STATEDATA) => {
   let arrayIng = [];
   STATEDATA.forEach(recipe => {
      if (recipe.display) {
         recipe.ingredients.forEach(ingredient => {
            const ingredientList = ingredient.ingredient
            arrayIng.push(ingredientList)
         })
      }
   })
   const filtIngArray = arrayIng.filter(function (ele, pos) {
      return arrayIng.indexOf(ele) == pos;
   })
   return filtIngArray
};

// Includes to lower case
export const getFilterIng = (inpValue) => {
   let filtIng = [];

   let STATEDATA = [...recipes];
   STATEDATA.forEach(recipe => {
      if (recipe.display) {
         recipe.ingredients.forEach(ingredient => {
            const ingMemo = ingredient.ingredient.toLowerCase();
            ingMemo.includes(inpValue.toLowerCase()) && filtIng.push(ingMemo);
         })
      }
   })
   return filtIng
};

// RETIRE DE LA LISTE LES INGREDIENTS DEJA CLICKÉ
export const handlerIngLi = () => {
   const ingLis = document.querySelectorAll('.ing-li');
   const tagsSelected = document.querySelectorAll('.tag-ing span');
   const tagsToErase = [];

   if (tagsSelected.length > 0) {
      tagsSelected.forEach(span => {
         tagsToErase.push(span.innerHTML);
      })
      tagsToErase.forEach(tag => {
         ingLis.forEach(li => {
            if (li.innerHTML.toLocaleLowerCase() == tag.toLocaleLowerCase()) {
               li.style.display = 'none';
            };
         });
      });
   }
}
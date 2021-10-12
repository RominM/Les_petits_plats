import { recipes } from "../data.js";

// Get filtered Ingredient from data
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
// Create DOM Elements
export const displayIng = (arrayIng) => {
   const containerIng = document.querySelector('.inp-container-ing');
   let ingUl = document.querySelector('.all-ing');
   // If ingUl existe get empty
   if (ingUl) {
      ingUl.innerHTML = '';
   } else { // else it creted it
      ingUl = document.createElement('ul');
      ingUl.classList.add('all-ing')
      containerIng.append(ingUl);
   }

   arrayIng.forEach(eachIngredient => {
      const ingLi = document.createElement('li');
      ingLi.classList.add('ing-li');
      ingLi.innerHTML = eachIngredient;

      ingUl.append(ingLi);
   })
};
// Includes to lower case
export const getFilterIng = (inpValue) => {
   const data = [...recipes];
   let filtIng = [];
   data.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
         const ingMemo = ingredient.ingredient.toLowerCase();
         ingMemo.includes(inpValue.toLowerCase()) && filtIng.push(ingMemo);
      })
   })
   return filtIng
};
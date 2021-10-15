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
   let allIng = document.querySelector('.all-ing');
   // If allIng existe get empty
   if (allIng) {
      allIng.innerHTML = '';
   } else { // else it creted it
      allIng = document.createElement('ul');
      allIng.classList.add('all-ing');
      containerIng.append(allIng);
   }

   arrayIng.forEach(eachIng => {
      const ingLi = document.createElement('li');
      ingLi.classList.add('ing-li');
      ingLi.innerHTML = eachIng;

      allIng.append(ingLi);
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
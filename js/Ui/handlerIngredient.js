import { recipes } from "../data.js";

// Get filtered Ingredient from data
export const getAllIngredients = (STATEDATA) => {
   let arrayIng = [];
   STATEDATA.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
         const ingredientList = ingredient.ingredient
         arrayIng.push(ingredientList)
      })
   })
   const filtIngArray = arrayIng.filter(function (ele, pos) {
      return arrayIng.indexOf(ele) == pos;
   })
   return filtIngArray
};
// Create DOM Elements
export const displayIngredients = (arrayIng) => {
   const section = document.querySelector('section');
   let allIng = document.querySelector('all-ing');

   // If allIng existe get empty
   if(allIng) {
      allIng.innerHTML = '';// raz
   } else { // heven it creted it
      allIng = document.createElement('div');
      allIng.classList.add('all-ing');
      section.append(allIng);
   }
   const ingUl = document.createElement('ul');
   
   allIng.append(ingUl);

   arrayIng.forEach(eachIngredient => {
      // problem from style
      const ingLi = document.createElement('li');
      ingLi.classList.add('ing-li');
      ingLi.innerHTML = eachIngredient;

      ingUl.append(ingLi);
   })
};
// Sliced to lower case
export const getFilterIngredient = (inpValue) => {
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
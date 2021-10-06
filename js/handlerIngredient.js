import { recipes } from "../data.js";
// import {error} from '../js/error.js';

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
   const allIng = document.createElement('div');

   allIng.innerHTML = '';// raz

   allIng.classList.add('all-ing');
   section.append(allIng);

   arrayIng.forEach(eachIngredient => {

      const ingUl = document.createElement('ul');
      const ingLi = document.createElement('li');
      ingLi.classList.add('ing-li');
      ingLi.innerHTML = eachIngredient;

      ingUl.append(ingLi);
      allIng.append(ingUl);
   })
};
// Sliced to lower case
export const getFilterIngredient = (inpValue) => {
   const data = [...recipes];
   let filtIng = [];
   data.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
         const ingMemo = ingredient.ingredient;
         const sliced = ingMemo.slice(0, inpValue.length);
         if(sliced.toLowerCase() == inpValue.toLowerCase()) {
            filtIng.push(ingMemo);
         }
      })
   })
   return filtIng
};
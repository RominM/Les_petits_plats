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
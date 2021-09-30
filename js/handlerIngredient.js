import { recipes } from "../data.js";

export const getAllIngredient = (STATEDATA) => {
   let arrayIngredient = [];
   STATEDATA.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
         const ingredientList = ingredient.ingredient
         arrayIngredient.push(ingredientList)
      })
   })
   const filteredIngredientArray = arrayIngredient.filter(function (ele, pos) {
      return arrayIngredient.indexOf(ele) == pos;
   })
   return filteredIngredientArray
}

export const displayIngredients = (arrayIngredient) => {

   const section = document.querySelector('section');
   const allIngredient = document.createElement('div');

   allIngredient.innerHTML = '';// raz

   allIngredient.classList.add('allIngredient');
   section.append(allIngredient);

   arrayIngredient.forEach(eachIngredient => {

      const spanIngredient = document.createElement('span');
      spanIngredient.classList.add('spanIngredient');
      spanIngredient.innerHTML = eachIngredient;

      allIngredient.append(spanIngredient)
   })
}

export const getFilterIngredient = (inpValue) => {
   const data =[...recipes];
   let filteredIngredient = [];
   data.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
         const ingredientMem = ingredient.ingredient;
         const sliced = ingredientMem.slice(0, inpValue.length);
         console.log(ingredientMem);
         if(sliced.toLowerCase() == inpValue.toLowerCase()) {
            filteredIngredient.push(ingredientMem);
         }
      })
   })
   console.log(filteredIngredient);
   return filteredIngredient
}
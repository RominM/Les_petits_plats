import { recipes } from '../data.js';

// Get filtered Ingredient from data
export const getAllApp = (STATEDATA) => {
   let arrayApp = [];
   STATEDATA.forEach(recipe => {
      const applianceList = recipe.appliance;
      arrayApp.push(applianceList);
   })
   const filtAppArray = arrayApp.filter(function (ele, pos) {
      return arrayApp.indexOf(ele) == pos;
   })
   return filtAppArray
};
// Create DOM Elements
export const displayApp = (arrayApp) => {
   const containerApp = document.querySelector('.inp-container-app');
   let appUl = document.querySelector('.all-app');
   // If appUl existe get empty
   if(appUl) {
      appUl.innerHTML = '';
   } else { // else it creted it
      appUl = document.createElement('ul');
      appUl.classList.add('all-app');
      containerApp.append(appUl);
   }

   arrayApp.forEach(eachAppliance => {
      const appLi = document.createElement('li');
      appLi.classList.add('app-li');
      appLi.innerHTML = eachAppliance;

      appUl.append(appLi);
   })
};
// Includes to lower case
export const getFilterApp = (inpValue) => {
   const data = [...recipes];
   let filtApp = [];
   data.forEach(recipe => {
      const appMemo = recipe.appliance.toLowerCase();
      appMemo.includes(inpValue.toLowerCase()) && filtApp.push(appMemo);
   })
   return filtApp
};
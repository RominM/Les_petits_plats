import { recipes } from '../data.js';

// Get filtered Ingredient from data
export const getAllApp = (STATEDATA) => {
   let arrayApp = [];
   STATEDATA.forEach(recipe => {
      if(recipe.display) {
         const applianceList = recipe.appliance;
         arrayApp.push(applianceList);
      }
   })
   const filtAppArray = arrayApp.filter(function (ele, pos) {
      return arrayApp.indexOf(ele) == pos;
   })
   return filtAppArray
};
// Create DOM Elements
export const displayApp = (arrayApp) => {
   const containerApp = document.querySelector('.inp-container-app');
   let allApp = document.querySelector('.all-app');
   // If allApp existe get empty
   if(allApp) {
      allApp.innerHTML = '';
   } else { // else it creted it
      allApp = document.createElement('ul');
      allApp.classList.add('all-app');
      containerApp.append(allApp);
   }

   arrayApp.forEach(eachApp => {
      const appLi = document.createElement('li');
      appLi.classList.add('app-li');
      appLi.innerHTML = eachApp;

      allApp.append(appLi);
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
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
   const section = document.querySelector('.dropBox');
   let allApp = document.querySelector('.all-app');
   // If allApp existe get empty
   if(allApp) {
      allApp.innerHTML = '';
   } else { // else it creted it
      allApp = document.createElement('div');
      allApp.classList.add('all-app');
      section.append(allApp);
   }
   const appUl = document.createElement('ul');
   allApp.append(appUl);

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
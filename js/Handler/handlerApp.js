import { recipes } from '../data.js';

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

// Includes to lower case
export const getFilterApp = (inpValue) => {
   const data = [...recipes];
   let filtApp = [];
   data.forEach(recipe => {
      if(recipe.display) {
         const appMemo = recipe.appliance.toLowerCase();
         appMemo.includes(inpValue.toLowerCase()) && filtApp.push(appMemo);
      }
   })
   return filtApp
};
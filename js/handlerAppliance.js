import { recipes } from "../data.js";
// import {error} from '../js/error.js';

export const getAllAppliances = (STATEDATA) => {
   let arrayApp = [];
   STATEDATA.forEach(recipe => {
      const applianceList = recipe.appliance;
      arrayApp.push(applianceList)
   })
   const filtAppArray = arrayApp.filter(function (ele, pos) {
      return arrayApp.indexOf(ele) == pos;
   })
   return filtAppArray
};

export const displayAppliances = (arrayApp) => {
   const section = document.querySelector('section');
   const allApp = document.createElement('div');

   allApp.innerHTML = '';

   allApp.classList.add('all-app');
   section.append(allApp);

   arrayApp.forEach(eachAppliance => {

      const appUl = document.createElement('ul')
      const appLi = document.createElement('li');
      appLi.classList.add('app-li');
      appLi.innerHTML = eachAppliance;

      appUl.append(appLi);
      allApp.append(appUl);
   })
};

export const getFilterAppliance = (inpValue) => {
   const data = [...recipes];
   let filteredAppliance = [];
   data.forEach(recipe => {
      const appMemo = recipe.appliance;
      const sliced = appMemo.slice(0, inpValue.length);
      console.log(appMemo);
      if(sliced.toLowerCase() == inpValue.toLowerCase()) {
         filteredAppliance.push(appMemo);
      }
   })
   return filteredAppliance
};
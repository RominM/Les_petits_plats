import { recipes } from '../data.js';

export const getAllApp = (STATEDATA) => {
   let arrayApp = [];

   // for each recipes in display=true;
   STATEDATA.forEach(recipe => {
      if(recipe.display) {
         const applianceList = recipe.appliance.toLowerCase();
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

// RETIRE DE LA LISTE LES INGREDIENTS DEJA CLICKÉ
export const handlerAppLi = () => {
   const appLis = document.querySelectorAll('.app-li');

   const tagsSelected = document.querySelectorAll('.tag-app span');
   const tagsToErase = [];

   if (tagsSelected.length > 0) {
      tagsSelected.forEach(span => {
         tagsToErase.push(span.innerHTML);
      })
      tagsToErase.forEach(tag => {
         appLis.forEach(li => {
            if (li.innerHTML.toLocaleLowerCase() == tag.toLocaleLowerCase()) {
               li.style.display = 'none';
            };
         });
      });
   };
};

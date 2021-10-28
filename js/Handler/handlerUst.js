import { recipes } from "../data.js";

export const getAllUst = (STATEDATA) => {
   let arrayUst = [];
   STATEDATA.forEach(recipe => {
      if(recipe.display) {
         recipe.ustensils.forEach(ustensil => {
            const ustensilsList = ustensil;
            arrayUst.push(ustensilsList);
         })
      }
   });
   const filtUstArray = arrayUst.filter(function (ele, pos) {
      return arrayUst.indexOf(ele) == pos;
   })
   return filtUstArray
};
// Create DOM Elements
export const displayUst = (arrayUst) => {
   const containerApp = document.querySelector('.inp-container-ust');
   let allUst = document.querySelector('.all-ust');
   // If allUst existe get empty
   if(allUst) {
      allUst.innerHTML = '';
   } else { // else it creted it
      allUst = document.createElement('ul');
      allUst.classList.add('all-ust');
      containerApp.append(allUst);
   }
   
   arrayUst.forEach(eachUst => {
      const ustLi = document.createElement('li');
      ustLi.classList.add('li','ust-li');
      ustLi.innerHTML = eachUst;
   
      allUst.append(ustLi);
   })
};
// Includes to lower case
export const getFilterUst = (inpValue) => {
   const data =[...recipes];
   let filtUst = [];

   data.forEach(recipe => {
      if(recipe.display) {
         recipe.ustensils.forEach(ustensil => {
            const ustMemo = ustensil.toLocaleLowerCase();
            ustMemo.includes(inpValue.toLowerCase()) && filtUst.push(ustMemo);
         })
      }
   })
   return filtUst
};

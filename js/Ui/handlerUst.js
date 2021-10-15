import { recipes } from "../data.js";

// Get filtered Ingredient from data
export const getAllUst = (STATEDATA) => {
   let arrayUst = [];
   STATEDATA.forEach(recipe => {
      recipe.ustensils.forEach(ustensil => {
         const ustensilsList = ustensil;
         arrayUst.push(ustensilsList);
      })
   });
   const filtUstArray = arrayUst.filter(function (ele, pos) {
      return arrayUst.indexOf(ele) == pos;
   })
   return filtUstArray
};
// Create DOM Elements
export const displayUst = (arrayUst) => {
   const containerApp = document.querySelector('.inp-container-ust');
   let ustUl = document.querySelector('.all-ust');
   // If ustUl existe get empty
   if(ustUl) {
      ustUl.innerHTML = '';
   } else { // else it creted it
      ustUl = document.createElement('ul');
      ustUl.classList.add('all-ust');
      containerApp.append(ustUl);
   }
   
   arrayUst.forEach(eachUst => {
      const ustLi = document.createElement('li');
      ustLi.classList.add('ust-li');
      ustLi.innerHTML = eachUst;
   
      ustUl.append(ustLi);
   })
};
// Includes to lower case
export const getFilterUst = (inpValue) => {
   const data =[...recipes];
   let filtUst = [];
   data.forEach(recipe => {
      recipe.ustensils.forEach(ustensil => {
         const ustMemo = ustensil ;
         ustMemo.includes(inpValue.toLowerCase()) && filtUst.push(ustMemo);
      })
   })
   return filtUst
};

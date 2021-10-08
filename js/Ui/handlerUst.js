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
   const section = document.querySelector('section');
   let allUst = document.querySelector('.all-ust');
   // If allApp existe get empty
   if(allUst) {
      allUst.innerHTML = '';
   } else { // else it creted it
      allUst = document.createElement('div');
      allUst.classList.add('all-ust');
      section.append(allUst);
   }
   const ustUl = document.createElement('ul');
   allUst.append(ustUl);
   
   arrayUst.forEach(eachUstensils => {

      const ustLi = document.createElement('li');
      ustLi.classList.add('ust-li');
      ustLi.innerHTML = eachUstensils;
   
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

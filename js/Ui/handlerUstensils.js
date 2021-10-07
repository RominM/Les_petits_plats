import { recipes } from "../../data.js";
// import { error } from '../js/error.js';

export const getAllUstensils = (STATEDATA) => {
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

export const displayUstensils = (arrayUst) => {

   const section = document.querySelector('section');
   const allUst = document.createElement('div');
   allUst.classList.add('all-ust');
   section.append(allUst);
   
   arrayUst.forEach(eachUstensils => {

      const ustUl = document.createElement('ul');
      const ustLi = document.createElement('li');
      ustLi.classList.add('ust-li');
      ustLi.innerHTML = eachUstensils;
   
      ustUl.append(ustLi);
      allUst.append(ustUl);
   })
};

export const getFilterUstensil = (inpValue) => {
   const data =[...recipes];
   let filteredUstensil = [];
   data.forEach(recipe => {
      recipe.ustensils.forEach(ustensil => {
         console.log(ustensil);
         const ustMemo = ustensil ;
         const sliced = ustMemo.slice(0, inpValue.length);
         console.log(ustMemo);
         if(sliced.toLowerCase() == inpValue.toLowerCase()) {
            filteredUstensil.push(ustMemo);
         }
      })
   })
   return filteredUstensil
};

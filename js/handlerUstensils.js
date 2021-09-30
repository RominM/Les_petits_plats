import { recipes } from "../data.js";
import {error} from '../js/error.js';

export const getAllUstensils = (STATEDATA) => {
   let arrayUstensils = [];
   STATEDATA.forEach(recipe => {
      recipe.ustensils.forEach(ustensil => {
         const ustensilsList = ustensil;
         arrayUstensils.push(ustensilsList);
      })
   });
   const filteredUstensilsArray = arrayUstensils.filter(function (ele, pos) {
      return arrayUstensils.indexOf(ele) == pos;
   })
   return filteredUstensilsArray
}

export const displayUstensils = (arrayUstensils) => {

   const section = document.querySelector('section');
   const allUstensils = document.createElement('div');
   allUstensils.classList.add('allUstensils');
   section.append(allUstensils);
   
   arrayUstensils.forEach(eachUstensils => {
      const spanUstensils = document.createElement('span');
      spanUstensils.classList.add('spanUstensils');
      spanUstensils.innerHTML = eachUstensils;
   
      allUstensils.append(spanUstensils)
   })
}

export const getFilterUstensil = (inpValue) => {
   const data =[...recipes];
   let filteredUstensil = [];
   console.log('coucou');
   data.forEach(recipe => {
      recipe.ustensils.forEach(ustensil => {
         console.log(ustensil);
         const ustensilMem = ustensil ;
         const sliced = ustensilMem.slice(0, inpValue.length);
         console.log(ustensilMem);
         if(sliced.toLowerCase() == inpValue.toLowerCase()) {
            filteredUstensil.push(ustensilMem);
         }
      })
   })
   return filteredUstensil
}

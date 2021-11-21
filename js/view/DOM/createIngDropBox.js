import { openIngDropBox } from "../Display/displayIngDropBox.js";

// CREATE ING DROPBOX
export const createIngDropBox = (arrayIng) => {
   const containerIng = document.querySelector('.inp-container-ing');
   const inputIng = document.querySelector('.inp-ing');
   
   let allIng = document.querySelector('.all-ing');
   arrayIng.sort();

   if (allIng) {
      allIng.innerHTML = '';
   } else {
      allIng = document.createElement('ul');
      allIng.classList.add('all-ing');

      containerIng.append(allIng);
   }
   arrayIng.forEach(eachIng => {
      const ingLi = document.createElement('li');
      ingLi.classList.add('li', 'ing-li');
      ingLi.innerHTML = eachIng;

      allIng.append(ingLi);
   })
   openIngDropBox();
   inputIng.focus();
};
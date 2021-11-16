import { removeSpanError } from "./displayError.js";

// OPEN ING 
export const openIngDropBox = () => {
   removeSpanError();
   
   const inpIng1 = document.querySelector('.target-ing');
   const inpIng2 = document.querySelector('.inp-ing');

   if (inpIng2.style.display = 'block') {
      inpIng2.value = '';
      inpIng1.style.display = 'none';
      inpIng2.style.display = 'block';
   }
};
// CLOSE ING
export const closeIngDropBox = () => {
   const inpIng1 = document.querySelector('.target-ing');
   const inpIng2 = document.querySelector('.inp-ing');
   const allIng = document.querySelector('.all-ing');
   const containerIng = document.querySelector('.inp-container-ing');
   if (allIng) {
      containerIng.removeChild(allIng);
      inpIng1.style.display = 'block';
      inpIng2.style.display = 'none';
   }
}

import { closeAppDropBox } from "./displayAppDropBox.js";
import { removeSpanError } from "./displayError.js";
import { closeUstDropBox } from "./displayUstDropBox.js";

// OPEN ING 
export const openIngDropBox = () => {
   
   const targetIng = document.querySelector('.target-ing');
   const inputIng = document.querySelector('.inp-ing');

   if (inputIng.style.display = 'block') {
      inputIng.value = '';
      targetIng.style.display = 'none';
      inputIng.style.display = 'block';
   }
   closeAppDropBox();
   closeUstDropBox();
   removeSpanError();
};
// CLOSE ING
export const closeIngDropBox = () => {
   const targetIng = document.querySelector('.target-ing');
   const inputIng = document.querySelector('.inp-ing');
   const allIng = document.querySelector('.all-ing');
   const containerIng = document.querySelector('.inp-container-ing');
   if (allIng) {
      containerIng.removeChild(allIng);
      targetIng.style.display = 'block';
      inputIng.style.display = 'none';
   }
}

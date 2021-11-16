import { removeSpanError } from "./displayError.js";

// OPEN UST
export const openUstDropBox = () => {
   removeSpanError();

   const inpUst1 = document.querySelector('.target-ust');
   const inpUst2 = document.querySelector('.inp-ust');

   if (inpUst2.style.display = 'block') {
      inpUst2.value = '';
      inpUst1.style.display = 'none';
      inpUst2.style.display = 'block';
   }
}
// CLOSE UST
export const closeUstDropBox = () => {
   const inpUst1 = document.querySelector('.target-ust');
   const inpUst2 = document.querySelector('.inp-ust');
   const allUst = document.querySelector('.all-ust');
   const containerUst = document.querySelector('.inp-container-ust');
   if (allUst) {
      containerUst.removeChild(allUst);
      inpUst1.style.display = 'block';
      inpUst2.style.display = 'none';
   }
}




/*
// CLOSE ALL THE DROPBOX WHENE THE USER CLICK ANYWHERE ON THE BODY
export const closeDropBoxByBody = () => {
   const body = document.querySelector('body');
   
   const closeAllDropBox = (e) => {
      const inpIng2 = document.querySelector('.inp-ing');
      const inpApp2 = document.querySelector('.inp-app');
      const inpUst2 = document.querySelector('.inp-ust');
      // e.preventDefault();
      if(inpIng2.style.display == 'block' || inpApp2.style.display == 'block' || inpUst2.style.display == 'block') {
         console.log(e.target);
         closeUstDropBox();
         closeAppDropBox();
         closeIngDropBox();
      }
   }
   body.addEventListener('click', closeAllDropBox);
}
closeDropBoxByBody();
*/
import { removeSpanError } from "./displayError.js";

// OPEN APP
export const openAppDropBox = () => {
   removeSpanError();

   const inpApp1 = document.querySelector('.target-app');
   const inpApp2 = document.querySelector('.inp-app');

   if (inpApp2.style.display = 'block') {
      inpApp2.value = '';
      inpApp1.style.display = 'none';
      inpApp2.style.display = 'block';
   }
}
// CLOSE APP
export const closeAppDropBox = () => {
   const inpApp1 = document.querySelector('.target-app');
   const inpApp2 = document.querySelector('.inp-app');
   const allApp = document.querySelector('.all-app');
   const containerApp = document.querySelector('.inp-container-app');
   if (allApp) {
      containerApp.removeChild(allApp);
      inpApp1.style.display = 'block';
      inpApp2.style.display = 'none';
   }
}

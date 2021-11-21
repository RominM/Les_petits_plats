import { openAppDropBox } from "../Display/displayAppDropBox.js";

// CREATE APP DROPBOX
export const createAppDropBox = (arrayApp) => {
   const containerApp = document.querySelector('.inp-container-app');
   const inputApp = document.querySelector('.inp-app');
   
   let allApp = document.querySelector('.all-app');
   arrayApp.sort();

   if (allApp) {
      allApp.innerHTML = '';
   } else {
      allApp = document.createElement('ul');
      allApp.classList.add('all-app');
      containerApp.append(allApp);
   }

   arrayApp.forEach(eachApp => {
      const appLi = document.createElement('li');
      appLi.classList.add('li', 'app-li');
      appLi.innerHTML = eachApp;

      allApp.append(appLi);
   })
   openAppDropBox();
   inputApp.focus();
};

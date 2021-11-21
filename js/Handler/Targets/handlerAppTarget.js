import { getAllApp, handlerAppLi } from "../handlerApp.js";
import { eventToAppLi } from "../liEvent.js";
import { createAppDropBox } from "../../view/DOM/createAppDropBox.js";
import { removeSpanError } from "../../view/Display/displayError.js";

export const handlerTargetApp = (STATEDATA) => {
   const targetApp = document.querySelector('.target-app');

   // TAB ON TARGET
   targetApp.addEventListener("keyup", (e) => {
      if (e.keyCode === 9) {
         navFromTargetApp();
      }
   });
   // CLICK ON TARGET
   targetApp.addEventListener('click', () => {
      navFromTargetApp();
   });

   const navFromTargetApp = () => {
      
      const allApp = getAllApp(STATEDATA);
      createAppDropBox(allApp);

      handlerAppLi();
      eventToAppLi(STATEDATA);
      removeSpanError();
   }
};

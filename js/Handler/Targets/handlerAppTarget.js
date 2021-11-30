import { getAllApp, handlerAppLi } from "../handlerApp.js";
import { eventToAppLi } from "../liEvent.js";
import { createAppDropBox } from "../../view/DOM/createAppDropBox.js";
import { openAppDropBox } from "../../view/Display/displayAppDropBox.js";
import { removeSpanError } from "../../view/Display/displayError.js";
import { closeIngDropBox } from "../../view/Display/displayIngDropBox.js";
import { closeUstDropBox } from "../../view/Display/displayUstDropBox.js";

export const handlerTargetApp = (STATEDATA) => {
   const targetApp = document.querySelector('.target-app');
   const inputApp = document.querySelector('.inp-app');

   // TAB ON TARGET
   targetApp.addEventListener("keyup", (e) => (e.keyCode === 9) && navFromTargetApp());
   // CLICK ON TARGET
   targetApp.addEventListener('click', () => navFromTargetApp());

   const navFromTargetApp = () => {
      
      const allApp = getAllApp(STATEDATA);
      createAppDropBox(allApp);
      openAppDropBox();
      inputApp.focus();

      handlerAppLi();
      eventToAppLi(STATEDATA);
      closeIngDropBox();
      closeUstDropBox();
      removeSpanError();
   };
};
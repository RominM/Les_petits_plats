import { getAllUst, handlerUstLi } from "../handlerUst.js";
import { eventToUstLi } from "../liEvent.js";
import { createUstDropBox } from "../../view/DOM/createUstDropBox.js";
import { removeSpanError } from "../../view/Display/displayError.js";

export const handlerTargetUst = (STATEDATA) => {
   const targetUst = document.querySelector('.target-ust');

   // TAB ON TARGET
   targetUst.addEventListener("keyup", (e) => {
      if (e.keyCode === 9) {
         navFromTargetUst();
      }
   });
   // CLICK ON TARGET
   targetUst.addEventListener('click', () => {
      navFromTargetUst();
   });

   const navFromTargetUst = () => {
      
      const allUst = getAllUst(STATEDATA);
      createUstDropBox(allUst);

      handlerUstLi();
      eventToUstLi(STATEDATA)
      removeSpanError();
   }
};

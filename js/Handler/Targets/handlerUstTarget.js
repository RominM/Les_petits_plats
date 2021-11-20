import { closeAppDropBox } from "../../view/Display/displayAppDropBox.js";
import { removeSpanError } from "../../view/Display/displayError.js";
import { closeIngDropBox } from "../../view/Display/displayIngDropBox.js";
import { openUstDropBox } from "../../view/Display/displayUstDropBox.js";
import { createUstDropBox } from "../../view/DOM/createUstDropBox.js";
import { getAllUst, handlerUstLi } from "../handlerUst.js";
import { eventToUstLi } from "../liEvent.js";

export const handlerTargetUst = (STATEDATA) => {
   const targetUst = document.querySelector('.target-ust');
   const inputUst = document.querySelector('.inp-ust');
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
      openUstDropBox();
      closeIngDropBox();
      closeAppDropBox();
      inputUst.focus();
   
      const allUst = getAllUst(STATEDATA);
      createUstDropBox(allUst);

      handlerUstLi();
      eventToUstLi(STATEDATA)
      removeSpanError();
   }
};

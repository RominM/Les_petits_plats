import { getAllUst, handlerUstLi } from "../handlerUst.js";
import { eventToUstLi } from "../liEvent.js";
import { openUstDropBox } from "../../view/Display/displayUstDropBox.js";
import { createUstDropBox } from "../../view/DOM/createUstDropBox.js";
import { removeSpanError } from "../../view/Display/displayError.js";

export const handlerTargetUst = (STATEDATA) => {
   const targetUst = document.querySelector('.target-ust');
   const inputUst = document.querySelector('.inp-ust');
   
   // TAB ON TARGET
   targetUst.addEventListener('keyup', (e) => (e.keyCode === 9) && navFromTargetUst());
   // CLICK ON TARGET
   targetUst.addEventListener('click', () => navFromTargetUst());

   const navFromTargetUst = () => {
      
      const allUst = getAllUst(STATEDATA);
      createUstDropBox(allUst);
      openUstDropBox();
      inputUst.focus();

      handlerUstLi();
      eventToUstLi(STATEDATA)
      removeSpanError();
   };
};

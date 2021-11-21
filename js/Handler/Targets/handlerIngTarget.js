import { getAllIng, handlerIngLi } from "../handlerIng.js";
import { eventToIngLi } from "../../Handler/liEvent.js";
import { createIngDropBox } from "../../view/DOM/createIngDropBox.js";
import { removeSpanError } from "../../view/Display/displayError.js";

export const handlerTargetIng = (STATEDATA) => {
   const targetIng = document.querySelector('.target-ing');
   // TAB ON TARGET
   targetIng.addEventListener('keyup', (e) => {
      if (e.keyCode === 9) {
         navFromTargetIng();
      }
   });
   // CLICK ON TARGET
   targetIng.addEventListener('click', () => {
      navFromTargetIng();
   });
   
   const navFromTargetIng = () => {

      const allIng = getAllIng(STATEDATA);
      createIngDropBox(allIng);
   
      handlerIngLi();
      eventToIngLi(STATEDATA);
      removeSpanError();
   }
};

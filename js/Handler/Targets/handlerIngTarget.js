import { eventToIngLi } from "../../Handler/liEvent.js";
import { closeAppDropBox } from "../../view/Display/displayAppDropBox.js";
import { removeSpanError } from "../../view/Display/displayError.js";
import { openIngDropBox } from "../../view/Display/displayIngDropBox.js";
import { closeUstDropBox } from "../../view/Display/displayUstDropBox.js";
import { createIngDropBox } from "../../view/DOM/createIngDropBox.js";
import { getAllIng, handlerIngLi } from "../handlerIng.js";

export const handlerTargetIng = (STATEDATA) => {
   const targetIng = document.querySelector('.target-ing');
   const inputIng = document.querySelector('.inp-ing');
   // TAB ON TARGET
   targetIng.addEventListener("keyup", (e) => {
      if (e.keyCode === 9) {
         navFromTargetIng();
      }
   });
   // CLICK ON TARGET
   targetIng.addEventListener('click', () => {
      navFromTargetIng();
   });
   
   const navFromTargetIng = () => {
      openIngDropBox();
      closeAppDropBox();
      closeUstDropBox();
      inputIng.focus();

      const allIng = getAllIng(STATEDATA);
      createIngDropBox(allIng);

      handlerIngLi();
      eventToIngLi(STATEDATA);
      removeSpanError();
   }
};

import { getAllIng, handlerIngLi } from "../handlerIng.js";
import { eventToIngLi } from "../liEvent.js";
import { createIngDropBox } from "../../view/DOM/createIngDropBox.js";
import { openIngDropBox } from "../../view/Display/displayIngDropBox.js";
import { removeSpanError } from "../../view/Display/displayError.js";

export const handlerTargetIng = (STATEDATA) => {
   const targetIng = document.querySelector('.target-ing');
   const inputIng = document.querySelector('.inp-ing');

   // TAB ON TARGET
   targetIng.addEventListener('keyup', (e) => (e.keyCode === 9) && navFromTargetIng());
   // CLICK ON TARGET
   targetIng.addEventListener('click', () => navFromTargetIng());
   
   const navFromTargetIng = () => {

      const allIng = getAllIng(STATEDATA);
      createIngDropBox(allIng);
      openIngDropBox();
      inputIng.focus();
   
      handlerIngLi();
      eventToIngLi(STATEDATA);
      removeSpanError();
   };
};
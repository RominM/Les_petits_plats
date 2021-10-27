import { runIng } from "./runIng.js";

export const runGlobalResearch = (STATEDATA) => {
   const searchBy = document.querySelector('#searchBy');
   searchBy.addEventListener('click', () => {
      runIng();
   });

   const searchBtn = document.querySelector('.searchBtn');
   searchBtn.addEventListener('click', runIng)
}



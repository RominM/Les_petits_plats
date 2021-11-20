import { UpdateState } from "../Update/UpdateState.js";
import { closeAppDropBox } from "../view/Display/displayAppDropBox.js";
import { closeIngDropBox } from "../view/Display/displayIngDropBox.js";
import { deletedTag } from "../view/Display/displayTags.js";
import { closeUstDropBox } from "../view/Display/displayUstDropBox.js";
import { createAppTags, createIngTags, createUstTags } from "../view/DOM/createTags.js";
import { getFilterApp } from "./handlerApp.js";
import { getFilterIng } from "./handlerIng.js";
import { getFilterUst } from "./handlerUst.js";

// INGREDIENTS
export const eventToIngLi = (STATEDATA) => {
	const ingLis = document.querySelectorAll('.ing-li');
	ingLis.forEach(li => {
		li.addEventListener('click', () => {
			let inpValue = li.innerHTML;
         const filtIng = getFilterIng(inpValue);
			const updateState = new UpdateState(STATEDATA);
			updateState.updateIngData(filtIng);
		
			createIngTags(inpValue);
			deletedTag();
			closeIngDropBox();
		})
	});
};

// APPLIANCES
export const eventToAppLi = (STATEDATA) => {
	const appLis = document.querySelectorAll('.app-li');
	appLis.forEach(li => {
		li.addEventListener('click', () => {							
			let inpValue = li.innerHTML;
			const filtApp = getFilterApp(inpValue);
			const updateState = new UpdateState(STATEDATA, inpValue);
			updateState.updateAppData(filtApp);
	
			createAppTags(inpValue);
			deletedTag();
			closeAppDropBox();		
      })
	})
};

// USTENSILS
export const eventToUstLi = (STATEDATA) => {
   const ustLis = document.querySelectorAll('.ust-li');
   ustLis.forEach(li => {
      li.addEventListener('click', () => {							
			let inpValue = li.innerHTML;
			const filtUst = getFilterUst(inpValue);
			const updateState = new UpdateState(STATEDATA, inpValue);
			updateState.updateUstData(filtUst);

			createUstTags(inpValue);
			deletedTag();
			closeUstDropBox();      
      })
   })
};


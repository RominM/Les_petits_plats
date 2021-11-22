import { UpdateState } from "../Update/UpdateState.js";
import { closeAppDropBox } from "../view/Display/displayAppDropBox.js";
import { closeIngDropBox } from "../view/Display/displayIngDropBox.js";
import { deletedTag } from "../view/Display/displayTags.js";
import { closeUstDropBox } from "../view/Display/displayUstDropBox.js";
import { createAppTags, createIngTags, createUstTags } from "../view/DOM/createTags.js";

// INGREDIENTS
export const eventToIngLi = (STATEDATA) => {
	const ingLis = document.querySelectorAll('.ing-li');
	ingLis.forEach(li => {
		li.addEventListener('click', () => {
			const updateState = new UpdateState(STATEDATA);

			let inpValue = li.innerHTML;
			updateState.updateIngData(inpValue);
		
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
			const updateState = new UpdateState(STATEDATA);
			
			let inpValue = li.innerHTML;
			updateState.updateAppData(inpValue);
	
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
			const updateState = new UpdateState(STATEDATA);
			
			let inpValue = li.innerHTML;
			updateState.updateUstData(inpValue);

			createUstTags(inpValue);
			deletedTag();
			closeUstDropBox();      
      })
   })
};


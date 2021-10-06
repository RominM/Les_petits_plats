import { getAllAppliances, displayAppliances, getFilterAppliance } from './handlerAppliance.js';
import { UpdateState } from './UpdateState.js';
import { displayRecipes } from './displayRecipes.js';
// Open dropBox whene input is clicked
export const runningAppliance = (STATEDATA) => {
	const inpApp = document.querySelector('.inp-app');
	inpApp.addEventListener('click', () => {
		inpApp.classList.add('selected');
		const allApp = getAllAppliances(STATEDATA);
		displayAppliances(allApp);
	});
	// Display only the available appliance
	inpApp.addEventListener('input', () => {
		let inpValue = inpApp.value;
		if (inpValue.length > 2) {
			const allApp = document.querySelector('all-app');
			allApp.innerHTML = '';
			const filtApp = getFilterAppliance(inpValue);
			// deleted duplicate appliance inside the dropBox
			const noDblApp = filtApp.filter(function (ele, pos) {
				return filtApp.indexOf(ele) == pos;
			});
			console.log(noDblApp);
			displayAppliances(noDblApp);
			// update the recipes by appliance
			const updateState = new UpdateState(STATEDATA, inpValue);
			updateState.updateIngData(filtIng);
		}
	});
}

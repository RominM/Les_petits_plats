import { getAllApp, displayApp, getFilterApp } from '../Ui/handlerApp.js';
import { UpdateState } from './UpdateState.js';

// Open dropBox whene input is clicked
export const runApp = (STATEDATA) => {
	const inpApp = document.querySelector('.target-app');
	inpApp.addEventListener('click', () => {
		const allApp = getAllApp(STATEDATA);
		displayApp(allApp);
	});
	// Display only the available appliance
	inpApp.addEventListener('input', () => {
		let inpValue = inpApp.value;
		const allApp = document.querySelector('.all-app');
		if (inpValue.length > 2) {
			const filtApp = getFilterApp(inpValue);
			allApp.innerHTML = '';
			// deleted duplicate appliance inside the dropBox
			const noDblApp = filtApp.filter(function (ele, pos) {
				return filtApp.indexOf(ele) == pos;
			});
			// Have to deleted the first displayIngredients() before cause it create another one
			displayApp(noDblApp);
			// update the recipes by appliance
			const updateState = new UpdateState(STATEDATA, inpValue);
			updateState.updateAppData(filtApp);
		}
	});
}

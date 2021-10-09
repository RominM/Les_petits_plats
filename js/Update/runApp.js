import { getAllApp, displayApp, getFilterApp } from '../Ui/handlerApp.js';
import { openAppDropBox, closeDropBox } from '../Ui/displayDropBox.js';
import { UpdateState } from './UpdateState.js';

// Open dropBox whene input is clicked
export const runApp = (STATEDATA) => {
	const inpApp1 = document.querySelector('.target-app');
	const inpApp2 = document.querySelector('.inp-app');

	const inpUst2 = document.querySelector('.inp-ust');
	const inpIng2 = document.querySelector('.inp-ing');

	inpApp1.addEventListener('click', () => {
		if(inpIng2 || inpUst2) {
			closeDropBox();
		}
		openAppDropBox();
		inpApp2.focus();
		const allApp = getAllApp(STATEDATA);
		displayApp(allApp);
	});
	// Display only the available appliance
	inpApp2.addEventListener('input', () => {
		let inpValue = inpApp2.value;
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

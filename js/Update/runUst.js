import { getAllUst, displayUst, getFilterUst } from '../Ui/handlerUst.js';
import { UpdateState } from './UpdateState.js';

// Open dropBox whene input is clicked
export const runUst = (STATEDATA) => {
	const inpUst = document.querySelector('.target-ust');
	inpUst.addEventListener('click', () => {
		inpUst.classList.add('selected');
		const allUst = getAllUst(STATEDATA);
		displayUst(allUst);
	});
	// Display only the available ustensil
	inpUst.addEventListener('input', () => {
		let inpValue = inpUst.value;
		if (inpValue.length > 2) {
			const filtUst = getFilterUst(inpValue);
			// deleted duplicate ustensils inside the dropBox
			const noDblUst = filtUst.filter(function (ele, pos) {
				return filtUst.indexOf(ele) == pos;
			});
			displayUst(noDblUst);
			// update the recipes by ustensil
			const updateState = new UpdateState(STATEDATA, inpValue);
			updateState.updateUstData(filtUst);
		}
	});
}

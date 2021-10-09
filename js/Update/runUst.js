import { getAllUst, displayUst, getFilterUst } from '../Ui/handlerUst.js';
import { UpdateState } from './UpdateState.js';

// Open dropBox whene input is clicked
export const runUst = (STATEDATA) => {
	const inpUst1 = document.querySelector('.target-ust');
	const inpUst2 = document.querySelector('.inp-ust');
	inpUst1.addEventListener('click', () => {
		inpUst1.style.display = 'none';
		inpUst2.style.display = 'block';
		inpUst2.focus();
		const allUst = getAllUst(STATEDATA);
		displayUst(allUst);
	});
	// Display only the available ustensil
	inpUst2.addEventListener('input', () => {
		let inpValue = inpUst2.value;
		const allUst = document.querySelector('.all-ust');
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

import { getAllUstensils, displayUstensils, getFilterUstensil } from '../Ui/handlerUstensils.js';
import { UpdateState } from './UpdateState.js';
// Open dropBox whene input is clicked
export const runningUstensil = (STATEDATA) => {
	const inpUst = document.querySelector('.inp-ust');
	inpUst.addEventListener('click', () => {
		inpUst.classList.add('selected');
		const allUst = getAllUstensils(STATEDATA);
		displayUstensils(allUst);
	});
	// Display only the available ustensil
	inpUst.addEventListener('input', () => {
		let inpValue = inpUst.value;
		if (inpValue.length > 2) {
			const filtUst = getFilterUstensil(inpValue);
			// deleted duplicate ustensils inside the dropBox
			const noDblUst = filtUst.filter(function (ele, pos) {
				return filtUst.indexOf(ele) == pos;
			});
			displayUstensils(noDblUst);
			// update the recipes by ustensil
			const updateState = new UpdateState(STATEDATA, inpValue);
			updateState.updateIngData(filtIng);
		}
	});
}

import { displayIng, getAllIng, getFilterIng } from '../Ui/handlerIng.js';
import { UpdateState } from './UpdateState.js';

// Open dropBox whene input is clicked
export const runIng = (STATEDATA) => {
	const inpIng = document.querySelector('.inp-ing');
	inpIng.addEventListener('click', () => {
		const allIng = getAllIng(STATEDATA);
		displayIng(allIng);
	});
	// Display only the available ingredient (>2 characters)
	inpIng.addEventListener('input', () => {
		let inpValue = inpIng.value;
		const allIng = document.querySelector('.all-ing');
		if (inpValue.length > 2) {
			const filtIng = getFilterIng(inpValue);
			allIng.innerHTML = '';
			// deleted duplicate ingredient inside the dropBox
			const noDblIng = filtIng.filter(function (ele, pos) {
				return filtIng.indexOf(ele) == pos;
			});
			// Have to deleted the first displayIngredients() before cause it create another one
			displayIng(noDblIng);
			// update the recipes by ingredient
			const updateState = new UpdateState(STATEDATA, inpValue);
			updateState.updateIngData(filtIng);
		} 
	});
}

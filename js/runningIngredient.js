import { displayIngredients, getAllIngredients, getFilterIngredient } from './handlerIngredient.js';
import { UpdateState } from './UpdateState.js';
import { displayRecipes } from './displayRecipes.js';

export const runningIngredient = (STATEDATA) => {
	const inpIng = document.querySelector('.inp-ing');
	inpIng.addEventListener('click', () => {
		const allIng = getAllIngredients(STATEDATA);
		displayIngredients(allIng);
	});
	
	inpIng.addEventListener('input', () => {
		let inpValue = inpIng.value;
		if (inpValue.length > 2) {
			const allIng = document.querySelector('.all-ing');
			allIng.innerHTML = '';
			const filtIng = getFilterIngredient(inpValue);
			const noDblIng = filtIng.filter(function (ele, pos) {
				return filtIng.indexOf(ele) == pos;
			});
			displayIngredients(noDblIng);

			const updateState = new UpdateState(STATEDATA, inpValue);
			updateState.updateIngData(filtIng);

			displayRecipes(STATEDATA);
		}
	});
}
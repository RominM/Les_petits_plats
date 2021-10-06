import { displayIngredients, getAllIngredients, getFilterIngredient } from './handlerIngredient.js';
import { UpdateState } from './UpdateState.js';
import { displayRecipes } from './displayRecipes.js';
// Open dropBox whene input is clicked
export const runningIngredient = (STATEDATA) => {
	const inpIng = document.querySelector('.inp-ing');
	inpIng.addEventListener('click', () => {
		const allIng = getAllIngredients(STATEDATA);
		displayIngredients(allIng);
	});
	// Display only the available ingredient
	inpIng.addEventListener('input', () => {
		let inpValue = inpIng.value;
		const allIng = document.querySelector('.all-ing');
		if (inpValue.length > 2) {
			const filtIng = getFilterIngredient(inpValue);
			// if(inpIng.include(inpValue)) {
			// 	console.log('salut');
			// }
			allIng.innerHTML = '';
			// deleted duplicate ingredient inside the dropBox
			const noDblIng = filtIng.filter(function (ele, pos) {
				return filtIng.indexOf(ele) == pos;
			});
			displayIngredients(noDblIng);
			// update the recipes by ingredient
			const updateState = new UpdateState(STATEDATA, inpValue);
			updateState.updateIngData(filtIng);
		} else if (inpValue.length == 0) {
			allIng.innerHTML = '';
			console.log(allIng);
			displayIngredients(allIng);
		}
	});
}
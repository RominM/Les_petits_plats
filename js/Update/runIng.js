import { displayIng, getAllIng, getFilterIng } from '../Ui/handlerIng.js';
import { openIngDropBox, closeAppDropBox, closeUstDropBox, closeIngDropBox } from '../Ui/displayDropBox.js';
import { UpdateState } from './UpdateState.js';
import { createIngTags } from '../view/createTags.js';

// Open dropBox whene input is clicked
export const runIng = (STATEDATA) => {
	const inpIng1 = document.querySelector('.target-ing');
	const inpIng2 = document.querySelector('.inp-ing');

	inpIng1.addEventListener('click', () => {
		openIngDropBox();
		closeAppDropBox();
		closeUstDropBox();

		inpIng2.focus();
		
		const allIng = getAllIng(STATEDATA);
		displayIng(allIng);

		const ingLis = document.querySelectorAll('.ing-li');
		ingLis.forEach(li => {
			li.addEventListener('click', () => {
				createIngTags(li.innerHTML)

				let inpValue = li.innerHTML;
				const allIng = document.querySelector('.all-ing');

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

				closeIngDropBox()
			})
		});
	});

	// Display only the available ingredient (>2 characters)
	inpIng2.addEventListener('input', () => {
		let inpValue = inpIng2.value;
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
		const ingLis = document.querySelectorAll('.ing-li');
		ingLis.forEach(li => {
			li.addEventListener('click', () => {
				createIngTags(li.innerHTML)

				let inpValue = li.innerHTML;
				const allIng = document.querySelector('.all-ing');

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

				closeIngDropBox()
			})
		});
	});
}
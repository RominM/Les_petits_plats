import { getAllUst, displayUst, getFilterUst } from '../Ui/handlerUst.js';
import { openUstDropBox, closeIngDropBox, closeAppDropBox, closeUstDropBox } from '../Ui/displayDropBox.js';
import { UpdateState } from './UpdateState.js';
import { createBubbleUst } from '../view/createBubbles.js';

// Open dropBox whene input is clicked
export const runUst = (STATEDATA) => {
	const inpUst1 = document.querySelector('.target-ust');
	const inpUst2 = document.querySelector('.inp-ust');

	inpUst1.addEventListener('click', () => {
		closeIngDropBox();
		closeAppDropBox();
		openUstDropBox();

		inpUst2.focus();

		const allUst = getAllUst(STATEDATA);
		displayUst(allUst);

		const ustLis = document.querySelectorAll('.ust-li');
		ustLis.forEach(li => {
			li.addEventListener('click', () => {
				createBubbleUst(li.innerHTML);

				let inpValue = li.innerHTML;
				const allUst = document.querySelector('.all-ust');

				const filtUst = getFilterUst(inpValue);
				allUst.innerHTML = '';

				const noDblUst = filtUst.filter(function (ele, pos) {
					return filtUst.indexOf(ele) == pos;
				});
				displayUst(noDblUst);
				// update the recipes by ustensil
				const updateState = new UpdateState(STATEDATA, inpValue);
				updateState.updateUstData(filtUst);

				closeUstDropBox();
			})
		})
	});
	// Display only the available ustensil
	inpUst2.addEventListener('input', () => {
		let inpValue = inpUst2.value;
		const allUst = document.querySelector('.all-ust');
		if (inpValue.length > 2) {
			const filtUst = getFilterUst(inpValue);
			allUst.innerHTML = '';
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
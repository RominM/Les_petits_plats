import { createIngDropBox } from '../view/DOM/createIngDropBox.js';
import { getAllIng, getFilterIng } from '../Handler/handlerIng.js';
import { removeSpanError, getSpanErrorIng } from '../view/Display/displayError.js';
import { handlerTargetIng } from '../Handler/Targets/handlerIngTarget.js';
import { eventToIngLi } from '../Handler/liEvent.js';

export const runIng = (STATEDATA) => {
	handlerTargetIng(STATEDATA);

	// INPUT
   const inputIng = document.querySelector('.inp-ing');

	inputIng.addEventListener('input', () => {
		const allIng = document.querySelector('.all-ing');

		let inpValue = inputIng.value;
		if (inpValue.length > 2) {
			const filtIng = getFilterIng(inpValue);
			allIng.innerHTML = '';
			// deleted duplicate ingredients inside the dropBox
			const noDblIng = filtIng.filter(function (ele, pos) {
				return filtIng.indexOf(ele) == pos;
			});

			const tagsSelected = document.querySelectorAll('.tag-ing span');
			const tagsToErase = [];

			if (tagsSelected.length > 0) {
				tagsSelected.forEach(span => {
					tagsToErase.push(span.innerHTML);
				})
				tagsToErase.forEach(tag => {
					noDblIng.forEach((ing, index) => {
						if (ing.toLocaleLowerCase() == tag.toLocaleLowerCase()) {
							noDblIng.splice(index, 1);
						};
					});
				});
			};
			if (noDblIng == 0) {
				getSpanErrorIng();
			} else {
				removeSpanError();
				createIngDropBox(noDblIng);
			}
		} else if (inpValue.length == 0) {
			const allIng = getAllIng(STATEDATA);
			allIng.innerHTML = '';
			createIngDropBox(allIng);
			removeSpanError();
		}
		eventToIngLi(STATEDATA);
	});
};

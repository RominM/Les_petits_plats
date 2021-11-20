import { createUstDropBox } from '../view/DOM/createUstDropBox.js';
import { getAllUst, getFilterUst } from '../Handler/handlerUst.js';
import { removeSpanError, getSpanErrorUst } from '../view/Display/displayError.js';
import { eventToUstLi } from '../Handler/liEvent.js';
import { handlerTargetUst } from '../Handler/Targets/handlerUstTarget.js';


export const runUst = (STATEDATA) => {
	handlerTargetUst(STATEDATA);

	// INPUT
	const inputUst = document.querySelector('.inp-ust');

	inputUst.addEventListener('input', () => {
		let inpValue = inputUst.value;
		const allUst = document.querySelector('.all-ust');
		if (inpValue.length > 2) {
			const filtUst = getFilterUst(inpValue);
			allUst.innerHTML = '';
			// deleted duplicate ustensils inside the dropBox
			const noDblUst = filtUst.filter(function (ele, pos) {
				return filtUst.indexOf(ele) == pos;
			});

			const tagsSelected = document.querySelectorAll('.tag-ust span');
			const tagsToErase = [];

			if (tagsSelected.length > 0) {
				tagsSelected.forEach(span => {
					tagsToErase.push(span.innerHTML);
				})
				tagsToErase.forEach(tag => {
					noDblUst.forEach((ust, index) => {
						if (ust.toLocaleLowerCase() == tag.toLocaleLowerCase()) {
							noDblUst.splice(index, 1);
						};
					});
				});
			};
			if (noDblUst == 0) {
				getSpanErrorUst();
			} else {
				removeSpanError();
				createUstDropBox(noDblUst);
			}
		} else if (inpValue.length == 0) {
			const allUst = getAllUst(STATEDATA);
			allUst.innerHTML = '';
			createUstDropBox(allUst);
			removeSpanError();
		}
		eventToUstLi(STATEDATA);
	});
};

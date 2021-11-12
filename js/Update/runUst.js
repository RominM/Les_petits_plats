import { getAllUst, getFilterUst, handlerUstLi } from '../Handler/handlerUst.js';
import { displayUst, openUstDropBox, closeIngDropBox, closeAppDropBox, closeUstDropBox, removeSpanError } from '../view/displayDropBox.js';
import { UpdateState } from './UpdateState.js';
import { createUstTags, deletedTag } from '../view/displayTags.js';

export const runUst = (STATEDATA) => {
	const inpUst1 = document.querySelector('.target-ust');
	const inpUst2 = document.querySelector('.inp-ust');
	// CLICK
	inpUst1.addEventListener('click', () => {
		openUstDropBox();
		closeIngDropBox();
		closeAppDropBox();
		inpUst2.focus();

		const allUst = getAllUst(STATEDATA);
		displayUst(allUst);
		handlerUstLi();

		// CLICK ON A TAG
		const ustLis = document.querySelectorAll('.ust-li');
		ustLis.forEach(li => {
			li.addEventListener('click', () => {
				clickOnUstLi(li);
			})
		})
		removeSpanError();
	});
	// INPUT
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

			displayUst(noDblUst);
		} else if (inpValue.length == 0) {
			const allUst = getAllUst(STATEDATA);
			allUst.innerHTML = '';
			displayUst(allUst);

			removeSpanError();
		}

		const ustLis = document.querySelectorAll('.ust-li');
		ustLis.forEach(li => {
			li.addEventListener('click', () => {
				clickOnUstLi(li);
			})
		})
	});

	const clickOnUstLi = (li) => {
			const allUst = document.querySelector('.all-ust');
			allUst.innerHTML = '';
							
			let inpValue = li.innerHTML;
			const filtUst = getFilterUst(inpValue);
			const noDblUst = filtUst.filter(function (ele, pos) {
				return filtUst.indexOf(ele) == pos;
			});
			const updateState = new UpdateState(STATEDATA, inpValue);
			updateState.updateUstData(filtUst);

			displayUst(noDblUst);
			createUstTags(inpValue);
			deletedTag();
			closeUstDropBox();
	};
};
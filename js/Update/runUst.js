import { createUstDropBox } from '../view/DOM/createUstDropBox.js';
import { createUstTags } from '../view/DOM/createTags.js';
import { getAllUst, getFilterUst, handlerUstLi } from '../Handler/handlerUst.js';
import { UpdateState } from './UpdateState.js';
import { closeAppDropBox, closeIngDropBox, closeUstDropBox, openUstDropBox } from '../view/Display/displayDropBox.js';
import { deletedTag } from '../view/Display/displayTags.js';
import { removeSpanError, getSpanErrorUst } from '../view/Display/displayError.js';

export const runUst = (STATEDATA) => {
	const inpUst1 = document.querySelector('.target-ust');
	const inpUst2 = document.querySelector('.inp-ust');
	// TAB ON INPUT1
	inpUst1.addEventListener("keyup", (e) => {
		if (e.keyCode === 9) {
			focusInpUst1();
		}
	});
	// CLICK
	inpUst1.addEventListener('click', () => {
		focusInpUst1();
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

		const ustLis = document.querySelectorAll('.ust-li');
		ustLis.forEach(li => {
			li.addEventListener('click', () => {
				clickOnUstLi(li);
			})
		})
	});

	const focusInpUst1 = () => {
		openUstDropBox();
		closeIngDropBox();
		closeAppDropBox();
		inpUst2.focus();
	
		const allUst = getAllUst(STATEDATA);
		createUstDropBox(allUst);
		handlerUstLi();
	
		// CLICK ON A TAG
		const ustLis = document.querySelectorAll('.ust-li');
		ustLis.forEach(li => {
			li.addEventListener('click', () => {
				clickOnUstLi(li);
			})
		})
		removeSpanError();
	}
	
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

			createUstDropBox(noDblUst);
			createUstTags(inpValue);
			deletedTag();
			closeUstDropBox();
	};
};
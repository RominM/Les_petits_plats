import { getAllIng, getFilterIng, handlerIngLi } from '../Handler/handlerIng.js';
import { UpdateState } from './UpdateState.js';
import { createIngTags, deletedTag } from '../view/Display/displayTags.js';
import { removeSpanError, getSpanErrorIng } from '../view/Display/displayError.js';
import { closeAppDropBox, closeIngDropBox, closeUstDropBox, openIngDropBox } from '../view/Display/displayDropBox.js';
import { createIngDropBox } from '../view/DOM/createIngDropBox.js';

export const runIng = (STATEDATA) => {
	const inpIng1 = document.querySelector('.target-ing');
	const inpIng2 = document.querySelector('.inp-ing');

	// CLICK ON INPUT1
	inpIng1.addEventListener('click', () => {
		
		openIngDropBox();
		closeAppDropBox();
		closeUstDropBox();
		inpIng2.focus();

		const allIng = getAllIng(STATEDATA);
		allIng.sort();
		// console.log(allIng);
		createIngDropBox(allIng);
		handlerIngLi();

		// CLICK ON A TAG
		const ingLis = document.querySelectorAll('.ing-li');
		ingLis.forEach(li => {
			li.addEventListener('click', () => {
				clickOnIngLi(li);
			})
		});
		removeSpanError();
	});
	// INPUT
	inpIng2.addEventListener('input', () => {
		let inpValue = inpIng2.value;
		const allIng = document.querySelector('.all-ing');
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
		}
		else if (inpValue.length == 0) {
			const allIng = getAllIng(STATEDATA);
			allIng.innerHTML = '';
			createIngDropBox(allIng);

			removeSpanError();
		}
		const ingLis = document.querySelectorAll('.ing-li');
		ingLis.forEach(li => {
			li.addEventListener('click', () => {
				clickOnIngLi(li);
			})
		});
	});

	const clickOnIngLi = (li) => {
		const allIng = document.querySelector('.all-ing');
		allIng.innerHTML = '';
						
		let inpValue = li.innerHTML;
		const filtIng = getFilterIng(inpValue);
		const noDblIng = filtIng.filter(function (ele, pos) {
			return filtIng.indexOf(ele) == pos;
		});
		const updateState = new UpdateState(STATEDATA);
		updateState.updateIngData(filtIng );
	
		createIngTags(inpValue);
		deletedTag();
		createIngDropBox(noDblIng);
		closeIngDropBox();
	};
};

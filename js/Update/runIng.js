import { createIngDropBox } from '../view/DOM/createIngDropBox.js';
import { createIngTags } from '../view/DOM/createTags.js';
import { getAllIng, getFilterIng, handlerIngLi } from '../Handler/handlerIng.js';
import { UpdateState } from './UpdateState.js';
import { closeIngDropBox, openIngDropBox } from '../view/Display/displayIngDropBox.js';
import { deletedTag } from '../view/Display/displayTags.js';
import { removeSpanError, getSpanErrorIng } from '../view/Display/displayError.js';

export const runIng = (STATEDATA) => {
	const targetIng = document.querySelector('.target-ing');
	const inputIng = document.querySelector('.inp-ing');

	// TAB ON TARGET
	targetIng.addEventListener("keyup", (e) => {
		if (e.keyCode === 9) {
			displayIng();
		}
	});
	// CLICK ON TARGET
	targetIng.addEventListener('click', () => {
		displayIng();
	});
	// EVENT TARGET
	const displayIng = () => {
		console.log('here');
		openIngDropBox();
		inputIng.focus();

		const allIng = getAllIng(STATEDATA);
		createIngDropBox(allIng);
		handlerIngLi();

		// CLICK ON A TAG
		const ingLis = document.querySelectorAll('.ing-li');
		ingLis.forEach(li => {
			li.addEventListener('click', () => {
				clickOnIngLi(li);
				console.log('hello');
			})
		});
		removeSpanError();
	}






	// INPUT2
	// ['input','focus'].forEach(evt => {
		inputIng.addEventListener('input', () => {
			evtInputIng();
		});
	// });

	// inputIng.addEventListener('blur', () => {
	// 	closeIngDropBox();
	// })

	const evtInputIng = () => {
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
		const ingLis = document.querySelectorAll('.ing-li');
		ingLis.forEach(li => {
			li.addEventListener('click', () => {
				clickOnIngLi(li);
				console.log('world');
			})
		});
	}

	// inputIng.addEventListener('focus', (e) => {
	// 	console.log(e.target);
	// });
	// inputIng.addEventListener('blur', (e) => {})();


	const clickOnIngLi = (li) => {
		// const allIng = document.querySelector('.all-ing');
		// allIng.innerHTML = '';

		let inpValue = li.innerHTML;
		//const filtIng = getFilterIng(inpValue);
		// console.log(filtIng);

		// const noDblIng = filtIng.filter(function (ele, pos) {
		// 	return filtIng.indexOf(ele) == pos;
		// });

		const updateState = new UpdateState(STATEDATA);
		updateState.updateIngData(inpValue);

		createIngTags(inpValue);
		deletedTag();
		// createIngDropBox(noDblIng);
		closeIngDropBox();
	};
};
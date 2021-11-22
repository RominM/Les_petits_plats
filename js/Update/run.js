import { createIngDropBox } from '../view/DOM/createIngDropBox.js';
import { createIngTags } from '../view/DOM/createTags.js';
import { getAllIng, getFilterIng, handlerIngLi } from '../Handler/handlerIng.js';
import { UpdateData } from './UpdateState.js';
import { closeIngDropBox, openIngDropBox } from '../view/Display/displayIngDropBox.js';
import { closeAppDropBox } from '../view/Display/displayAppDropBox.js';
import { closeUstDropBox } from '../view/Display/displayUstDropBox.js';
import { deletedTag } from '../view/Display/displayTags.js';
import { removeSpanError, getSpanErrorIng } from '../view/Display/displayError.js';
import { updateIngRecipe } from './afterDeleted.js';
import { recipes } from '../data.js';


export const runTest = (classIng , name) => {

	let state = [...recipes];

	const updateState = new UpdateData(state);
	console.log("runTest name : " + name)

	switch (classIng) {
		case "li ing-li":
					updateState.updateIngData(name)
			break;

		case "li app-li":
					updateState.updateAppData(name)
			break;

		case "li ust-li":
					updateState.updateUstData(name)
			break;

		default:
			break;
	}



}


export const runIng = (STATEDATA) => {
	const inpIng1 = document.querySelector('.target-ing');
	const inpIng2 = document.querySelector('.inp-ing');
   
	// TAB ON INPUT1
	inpIng1.addEventListener("keyup", (e) => {
		if (e.keyCode === 9) {
			focusInpIng1();
		}
	});

	// (CLICK ON INPUT1
	inpIng1.addEventListener('click', () => {
		focusInpIng1();
	});

	// INPUT2
	inpIng2.addEventListener('input', () => {


		const allIng = document.querySelector('.all-ing');
		let inpValue = inpIng2.value;
		if (inpValue.length > 2) {
			console.log('hello');
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
			})
		});
	});

	const focusInpIng1 = () => {
		openIngDropBox();
		closeAppDropBox();
		closeUstDropBox();
		inpIng2.focus();

		const allIng = getAllIng(STATEDATA);
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
	}

	const clickOnIngLi = (li) => {
		// const allIng = document.querySelector('.all-ing');
		// allIng.innerHTML = '';
		let inpValue = li.innerHTML;
		console.log(li);
		//const filtIng = getFilterIng(inpValue);
		// console.log(filtIng);

		// const noDblIng = filtIng.filter(function (ele, pos) {
		// 	return filtIng.indexOf(ele) == pos;
		// });

		const updateState = new UpdateData(STATEDATA);
		updateState.updateState(inpValue);

		createIngTags(inpValue);
		deletedTag();
		// createIngDropBox(noDblIng);
		closeIngDropBox();
	};
};
import { getAllUst, displayUst, getFilterUst } from '../Ui/handlerUst.js';
import { openUstDropBox, closeIngDropBox, closeAppDropBox, closeUstDropBox } from '../view/displayDropBox.js';
import { UpdateState } from './UpdateState.js';
import { /*closeUstTag, createUstTags,*/ displayTags, handlerUstTag } from '../view/displayTags.js';

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

		handlerUstTag();

		const ustLis = document.querySelectorAll('.ust-li');
		ustLis.forEach(li => {
			li.addEventListener('click', () => {
				// createUstTags(li.innerHTML);
				displayTags();
				const tagUst = document.querySelector('.tag-ust');
				tagUst.addEventListener('click', () => {
					closeUstTag();
				})

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

			const tagsSelected = document.querySelectorAll('.tag-ust span');
			const tagsToErase = [];

			if (tagsSelected.length > 0) {
				tagsSelected.forEach(span => {
					tagsToErase.push(span.innerHTML);
				})
				tagsToErase.forEach(tag => {
					ustLis.forEach(li => {
						if (li.innerHTML.toLocaleLowerCase() == tag.toLocaleLowerCase()) {
							li.style.display = 'none';
						};
					});
				});
			};

			displayUst(noDblUst);
		} 
		else if (inpValue.length == 0) {
			const allUst = getAllUst(STATEDATA);
			allUst.innerHTML = '';
			displayUst(allUst);
		}

		const ustLis = document.querySelectorAll('.ust-li');
		ustLis.forEach(li => {
			li.addEventListener('click', () => {
				createUstTags(li.innerHTML);

				let inpValue = li.innerHTML;
				const allUst = document.querySelector('.all-ust');

				const filtUst = getFilterUst(inpValue);
				allUst.innerHTML = '';

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
						noDblIng.forEach((ust, index) => {
							if (ust.toLocaleLowerCase() == tag.toLocaleLowerCase()) {
								noDblIng.splice(index, 1);
							};
						});
					});
				};
				displayUst(noDblUst);
				// update the recipes by ustensil
				const updateState = new UpdateState(STATEDATA, inpValue);
				updateState.updateUstData(filtUst);

				closeUstDropBox();
			})
		})
	});
}
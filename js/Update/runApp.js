import { getAllApp, getFilterApp, handlerAppLi } from '../Handler/handlerApp.js';
import { displayApp, openAppDropBox, closeIngDropBox, closeUstDropBox, closeAppDropBox, removeSpanError } from '../view/displayDropBox.js';
import { UpdateState } from './UpdateState.js';
import { createAppTags, deletedTag } from '../view/displayTags.js';

export const runApp = (STATEDATA) => {
	const inpApp1 = document.querySelector('.target-app');
	const inpApp2 = document.querySelector('.inp-app');
	// CLICK
	inpApp1.addEventListener('click', () => {

		closeIngDropBox();
		closeUstDropBox();
		openAppDropBox();

		inpApp2.focus();

		const allApp = getAllApp(STATEDATA);
		displayApp(allApp);

		handlerAppLi();

		// CLICK ON A TAG
		const appLis = document.querySelectorAll('.app-li');
		appLis.forEach(li => {
			li.addEventListener('click', () => {
				clickOnAppLi(li);
			})
		})
		removeSpanError();
	});
	// INPUT
	inpApp2.addEventListener('input', () => {

		let inpValue = inpApp2.value;
		const allApp = document.querySelector('.all-app');
		if (inpValue.length > 2) {
			const filtApp = getFilterApp(inpValue);
			allApp.innerHTML = '';
			// deleted duplicate appliance inside the dropBox
			const noDblApp = filtApp.filter(function (ele, pos) {
				return filtApp.indexOf(ele) == pos;
			});

			const tagsSelected = document.querySelectorAll('.tag-app span');
			const tagsToErase = [];

			if (tagsSelected.length > 0) {
				tagsSelected.forEach(span => {
					tagsToErase.push(span.innerHTML);
				})
				tagsToErase.forEach(tag => {
					noDblApp.forEach((app, index) => {
						if (app.toLocaleLowerCase() == tag.toLocaleLowerCase()) {
							noDblApp.splice(index, 1);
						};
					});
				});
			};

			displayApp(noDblApp);
		} else if (inpValue.length == 0) {
			const allApp = getAllApp(STATEDATA);
			allApp.innerHTML = '';
			displayApp(allApp);
			
			removeSpanError();
		};

		const appLis = document.querySelectorAll('.app-li');
		appLis.forEach(li => {
			li.addEventListener('click', () => {
				clickOnAppLi(li);
			});
		});
	});

	const clickOnAppLi = (li) => {
		const allApp = document.querySelector('.all-app');
		allApp.innerHTML = '';
						
		let inpValue = li.innerHTML;
		const filtApp = getFilterApp(inpValue);
		console.log(filtApp);
		const noDblApp = filtApp.filter(function (ele, pos) {
			return filtApp.indexOf(ele) == pos;
		});
		const updateState = new UpdateState(STATEDATA, inpValue);
		updateState.updateAppData(filtApp);

		createAppTags(inpValue);
		deletedTag();
		displayApp(noDblApp);
		closeAppDropBox();
	};
};
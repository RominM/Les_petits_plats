import { createAppDropBox } from '../view/DOM/createAppDropBox.js';
import { createAppTags } from '../view/DOM/createTags.js';
import { getAllApp, getFilterApp, handlerAppLi } from '../Handler/handlerApp.js';
import { UpdateState } from './UpdateState.js';
import { closeAppDropBox, closeIngDropBox, closeUstDropBox, openAppDropBox } from '../view/Display/displayDropBox.js';
import { deletedTag } from '../view/Display/displayTags.js';
import { removeSpanError, getSpanErrorApp } from '../view/Display/displayError.js';

export const runApp = (STATEDATA) => {
	const inpApp1 = document.querySelector('.target-app');
	const inpApp2 = document.querySelector('.inp-app');
	// TAB ON INPUT1
	inpApp1.addEventListener("keyup", (e) => {
		if (e.keyCode === 9) {
			focusInpApp1();
		}
	});
	
	// CLICK
	inpApp1.addEventListener('click', () => {
		focusInpApp1();
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
			if (noDblApp == 0) {
				getSpanErrorApp();
			} else {
				removeSpanError();
				createAppDropBox(noDblApp);
			}		
		} else if (inpValue.length == 0) {
			const allApp = getAllApp(STATEDATA);
			allApp.innerHTML = '';
			createAppDropBox(allApp);
			
			removeSpanError();
		};

		const appLis = document.querySelectorAll('.app-li');
		appLis.forEach(li => {
			li.addEventListener('click', () => {
				clickOnAppLi(li);
			});
		});
	});

	const focusInpApp1 = () => {
		closeIngDropBox();
		closeUstDropBox();
		openAppDropBox();

		inpApp2.focus();

		const allApp = getAllApp(STATEDATA);
		createAppDropBox(allApp);

		handlerAppLi();

		// CLICK ON A TAG
		const appLis = document.querySelectorAll('.app-li');
		appLis.forEach(li => {
			li.addEventListener('click', () => {
				clickOnAppLi(li);
			})
		})
		removeSpanError();
	}

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
		createAppDropBox(noDblApp);
		closeAppDropBox();
	};
};
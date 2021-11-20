import { createAppDropBox } from '../view/DOM/createAppDropBox.js';
import { createAppTags } from '../view/DOM/createTags.js';
import { getAllApp, getFilterApp, handlerAppLi } from '../Handler/handlerApp.js';
import { UpdateState } from './UpdateState.js';
import { closeAppDropBox, openAppDropBox } from '../view/Display/displayAppDropBox.js';
import { deletedTag } from '../view/Display/displayTags.js';
import { removeSpanError, getSpanErrorApp } from '../view/Display/displayError.js';

export const runApp = (STATEDATA) => {
	const targetApp = document.querySelector('.target-app');
	const inputApp = document.querySelector('.inp-app');

	// TAB ON TARGET
	targetApp.addEventListener('keyup', (e) => {
		if (e.keyCode === 9) {
			displayApp();
		}
	});
	// CLICK ON TARGET
	targetApp.addEventListener('click', () => {
		displayApp();
	});
	// EVENT TARGET
	const displayApp = () => {
		openAppDropBox();
		inputApp.focus();

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








	// INPUT2
	['input','focus'].forEach(evt => {
		inputApp.addEventListener(evt, () => {
			evtInputApp();
		});
	})
	inputApp.addEventListener('blur', () => {
		closeAppDropBox();
	})

	const evtInputApp = () => {
		const allApp = document.querySelector('.all-app');
		
		let inpValue = inputApp.value;
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
	}





	const clickOnAppLi = (li) => {
		const allApp = document.querySelector('.all-app');
		allApp.innerHTML = '';
						
		let inpValue = li.innerHTML;
		const filtApp = getFilterApp(inpValue);

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
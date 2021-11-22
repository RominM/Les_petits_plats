import { createAppDropBox } from '../view/DOM/createAppDropBox.js';
	import { getAllApp, getFilterApp } from '../Handler/handlerApp.js';
	import { removeSpanError, getSpanErrorApp } from '../view/Display/displayError.js';
	import { handlerTargetApp } from '../Handler/Targets/handlerAppTarget.js';
	import { eventToAppLi } from '../Handler/liEvent.js';
	
	export const runApp = (STATEDATA) => {
		handlerTargetApp(STATEDATA);
	
		// INPUT
		const inputApp = document.querySelector('.inp-app');
	
		inputApp.addEventListener('input', () => {
	
			let inpValue = inputApp.value;
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
			eventToAppLi(STATEDATA)
		});
	};

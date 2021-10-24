import { getAllApp, displayApp, getFilterApp } from '../Ui/handlerApp.js';
import { openAppDropBox, closeIngDropBox, closeUstDropBox, closeAppDropBox } from '../view/displayDropBox.js';
import { UpdateState } from './UpdateState.js';
import { closeAppTag, createAppTags } from '../view/displayTags.js';

// Open dropBox whene input is clicked
export const runApp = (STATEDATA) => {
	const inpApp1 = document.querySelector('.target-app');
	const inpApp2 = document.querySelector('.inp-app');

	inpApp1.addEventListener('click', () => {
		closeIngDropBox();
		closeUstDropBox();
		openAppDropBox();

		inpApp2.focus();

		const allApp = getAllApp(STATEDATA);
		displayApp(allApp);

		const appLis = document.querySelectorAll('.app-li');

		const tagsSelected = document.querySelectorAll('.tag-app span');
		const tagsToErase = [];

		if (tagsSelected.length > 0) {
			tagsSelected.forEach(span => {
				tagsToErase.push(span.innerHTML);
			})
			tagsToErase.forEach(tag => {
				appLis.forEach(li => {
					if (li.innerHTML.toLocaleLowerCase() == tag.toLocaleLowerCase()) {
						li.style.display = 'none';
					};
				});
			});
		};

		appLis.forEach(li => {
			li.addEventListener('click', () => {
				createAppTags(li.innerHTML);
				const tagApp = document.querySelector('.tag-app');
				tagApp.addEventListener('click', () => {
					closeAppTag();
				})


				let inpValue = li.innerHTML;
				const allApp = document.querySelector('.all-app');

				const filtApp = getFilterApp(inpValue);
				allApp.innerHTML = '';

				const noDblApp = filtApp.filter(function (ele, pos) {
					return filtApp.indexOf(ele) == pos;
				});
				// Have to deleted the first displayIngredients() before cause it create another one
				displayApp(noDblApp);
				// update the recipes by appliance
				const updateState = new UpdateState(STATEDATA, inpValue);
				updateState.updateAppData(filtApp);

				closeAppDropBox();
			})
		})
	});

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
					noDblIng.forEach((app, index) => {
						if (app.toLocaleLowerCase() == tag.toLocaleLowerCase()) {
							noDblIng.splice(index, 1);
						};
					});
				});
			};

			displayApp(noDblApp);
		} 
		else if (inpValue.length == 0) {
			const allApp = getAllApp(STATEDATA);
			allApp.innerHTML = '';
			displayApp(allApp);
		};

		const appLis = document.querySelectorAll('.app-li');
		appLis.forEach(li => {
			li.addEventListener('click', () => {
				createAppTags(li.innerHTML);

				let inpValue = li.innerHTML;
				const allApp = document.querySelector('.all-app');

				const filtApp = getFilterApp(inpValue);
				allApp.innerHTML = '';

				const noDblApp = filtApp.filter(function (ele, pos) {
					return filtApp.indexOf(ele) == pos;
				});
				// Have to deleted the first displayIngredients() before cause it create another one
				displayApp(noDblApp);
				// update the recipes by appliance
				const updateState = new UpdateState(STATEDATA, inpValue);
				updateState.updateAppData(filtApp);

				closeAppDropBox();
			});
		});
	});
};
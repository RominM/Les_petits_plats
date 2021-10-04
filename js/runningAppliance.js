import { getAllAppliances, displayAppliances, getFilterAppliance } from './handlerAppliance.js';

export const runningAppliance = (STATEDATA) => {
	const inpApp = document.querySelector('.inp-app');
	inpApp.addEventListener('click', () => {
		inpApp.classList.add('selected');
		const allApp = getAllAppliances(STATEDATA);
		displayAppliances(allApp);
	});
	
	inpApp.addEventListener('input', () => {
		let inpValue = inpApp.value;
		if (inpValue.length > 2) {
			const allApp = document.querySelector('all-app');
			allApp.innerHTML = '';
			const filtApp = getFilterAppliance(inpValue);
			const noDblApp = filtApp.filter(function (ele, pos) {
				return filtApp.indexOf(ele) == pos;
			});
			console.log(noDblApp);
			displayAppliances(noDblApp);
			// updateApplianceData(filtApp);
			displayRecipes(STATEDATA);
		}
	});
}

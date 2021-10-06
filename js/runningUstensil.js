import { getAllUstensils, displayUstensils, getFilterUstensil } from './handlerUstensils.js';

export const runningUstensil = (STATEDATA) => {
	const inpUst = document.querySelector('.inp-ust');
	inpUst.addEventListener('click', () => {
		inpUst.classList.add('selected');
		const allUst = getAllUstensils(STATEDATA);
		displayUstensils(allUst);
	});
	
	inpUst.addEventListener('input', () => {
		let inpValue = inpUst.value;
		if (inpValue.length > 2) {
			const filtUst = getFilterUstensil(inpValue);
			const noDblUst = filtUst.filter(function (ele, pos) {
				return filtUst.indexOf(ele) == pos;
			});
			displayUstensils(noDblUst);
			// updateUstensilData(filtUst);
			displayRecipes(STATEDATA);
		}
	});
}

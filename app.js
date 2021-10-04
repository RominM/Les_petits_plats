import { recipes } from './data.js';
import { HeaderDOM } from './js/Header.js';
import { SearchSection } from './js/SearchSection.js';
import { displayRecipes } from './js/DisplayRecipes.js';
import { updateState } from './js/updateState.js';
import { displayIngredients, getAllIngredients, getFilterIngredient } from './js/handlerIngredient.js';
import { getAllAppliances, displayAppliances, getFilterAppliance } from './js/handlerAppliance.js';
import { getAllUstensils, displayUstensils, getFilterUstensil } from './js/handlerUstensils.js';

// Init data
let STATEDATA = [...recipes];
STATEDATA.forEach(recipe => {
	recipe.display = true;
});
// Build DOM
const header = new HeaderDOM();
header.buildHead();

const searchSection = new SearchSection();
searchSection.creatSearchBar();
searchSection.sortByStamps();

displayRecipes(STATEDATA);



// Input stamps Ingredients
const inpIng = document.querySelector('.inp-ing');
inpIng.addEventListener('click', () => {
	const allIng = getAllIngredients(STATEDATA);
	displayIngredients(allIng);
});

inpIng.addEventListener('input', () => {
	let inpValue = inpIng.value;
	if (inpValue.length > 2) {
		const allIng = document.querySelector('.all-ing');
		allIng.innerHTML = '';
		const filtIng = getFilterIngredient(inpValue);
		const noDblIng = filtIng.filter(function (ele, pos) {
			return filtIng.indexOf(ele) == pos;
		});
		displayIngredients(noDblIng);
		// updateIngredientData(filtIng);
		displayRecipes(STATEDATA);
	}
});



// Input stamps Appliances
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



// Input stamps Ustensils
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
		displayRecipes(STATEDATA)
	}
});

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
const inpIngredients = document.querySelector('.inpIngredients');
inpIngredients.addEventListener('click', () => {
	inpIngredients.classList.add('selected');
	const allIngredient = getAllIngredients(STATEDATA);
	displayIngredients(allIngredient);
})
inpIngredients.addEventListener('input', () => {
	let inpValue = inpIngredients.value;
	if (inpValue.length > 2) {
		const filteredIngredient = getFilterIngredient(inpValue);
		displayIngredients(filteredIngredient);
		updateIngredientData(filteredIngredient);
		displayRecipes(STATEDATA);
	}
})
// Input stamps Appliances
const inpAppliance = document.querySelector('.inpAppliance');
inpAppliance.addEventListener('click', () => {
	inpAppliance.classList.add('selected');
	const allAppliance = getAllAppliances(STATEDATA);
	displayAppliances(allAppliance);
})
inpAppliance.addEventListener('input', () => {
	let inpValue = inpAppliance.value;
	if (inpValue.length > 2) {
		const filteredAppliance = getFilterAppliance(inpValue);
		displayAppliances(filteredAppliance);
		updateApplianceData(filteredAppliance);
		displayRecipes(STATEDATA)
	}
})
// Input stamps Ustensils
const inpUstensils = document.querySelector('.inpUstensils');
inpUstensils.addEventListener('click', () => {
	inpUstensils.classList.add('selected');
	const allUstensils = getAllUstensils(STATEDATA);
	displayUstensils(allUstensils);
})
inpUstensils.addEventListener('input', () => {
	let inpValue = inpUstensils.value;
	if (inpValue.length > 2) {
		const filteredUstensil = getFilterUstensil(inpValue);
		displayUstensils(filteredUstensil);
		updateUstensilData(filteredUstensil);
		displayRecipes(STATEDATA)
	}
})

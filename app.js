import {
	HeaderDOM
} from './js/Header.js';
import {
	SearchSection
} from './js/SearchSection.js';
import {
	recipes
} from './data.js';
import {
	displayRecipes
} from './js/DisplayRecipes.js';
import {
	newState
} from './js/searchIngredients.js';
import {
	getIngredient
} from './js/getIngredient.js';
import {
	getAppliance
} from './js/getAppliance.js';
import {
	getUstensils
} from './js/getUstensils.js';

let STATEDATA = [...recipes];
STATEDATA.forEach(recipe => {
	recipe.display = true
});

const header = new HeaderDOM();
header.buildHead();

const searchSection = new SearchSection();
searchSection.creatSearchBar();
searchSection.sortByStamps();

displayRecipes(STATEDATA);
const inpIngredients = document.querySelector('.inpIngredients');
inpIngredients.addEventListener('input', () => {
	getIngredient(STATEDATA);
	let inpValue = inpIngredients.value;
	if (inpValue.length > 2) {
		console.log('in Ingredient scope: ' + inpValue);
		STATEDATA = newState(STATEDATA, inpValue)
	}
})
const inpAppliance = document.querySelector('.inpAppliance');
inpAppliance.addEventListener('input', () => {
	//get Appliance
	getAppliance(STATEDATA);
	let inpValue = inpAppliance.value;
	if (inpValue.length > 2) {
		console.log('in Appliance scope: ' + inpValue);
		STATEDATA = newState(STATEDATA, inpValue)
	}
})
const inpUstensils = document.querySelector('.inpUstensils');
inpUstensils.addEventListener('input', () => {
	//get Ustensils
	getUstensils(STATEDATA);
	let inpValue = inpUstensils.value;
	if (inpValue.length > 2) {
		console.log('in Ustensils scope: ' + inpValue);
		STATEDATA = newState(STATEDATA, inpValue)
	}
})
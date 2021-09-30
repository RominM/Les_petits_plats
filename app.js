import {recipes} from './data.js';
import {HeaderDOM} from './js/Header.js';
import {SearchSection} from './js/SearchSection.js';
import {displayRecipes} from './js/DisplayRecipes.js';
import {newState} from './js/newState.js';
import {displayIngredients, getAllIngredient, getFilterIngredient} from './js/handlerIngredient.js';
import {getAppliance} from './js/handlerAppliance.js';
import {getUstensils} from './js/handlerUstensils.js';
import {error} from './js/error.js';

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
	inpIngredients.classList.add('selected');

	const allIngredient = getAllIngredient(STATEDATA);
	displayIngredients(allIngredient);

	// inpIngredients.classList.remove('inpIngredients');
	let inpValue = inpIngredients.value;
	if (inpValue.length > 2) {
		console.log('in Ingredient scope: ' + inpValue);
		const filteredIngredient = getFilterIngredient(inpValue);
		displayIngredients(filteredIngredient)

		modifStateData(filteredIngredient)

		displayRecipes(STATEDATA)
	}
})

const inpAppliance = document.querySelector('.inpAppliance');
inpAppliance.addEventListener('input', () => {
	getAppliance(STATEDATA);
	let inpValue = inpAppliance.value;
	if (inpValue.length > 2) {
		console.log('in Appliance scope: ' + inpValue);
	}
})
const inpUstensils = document.querySelector('.inpUstensils');
inpUstensils.addEventListener('input', () => {
	getUstensils(STATEDATA);
	let inpValue = inpUstensils.value;
	if (inpValue.length > 2) {
		console.log('in Ustensils scope: ' + inpValue);
		// STATEDATA = newState(STATEDATA, inpValue)
		// if(findUstensils() == OK) {
			//MAJ DES DATA
			//DisplayRecipes()
		//}else {
			//error()
		//}
	}
})

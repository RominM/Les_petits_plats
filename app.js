import {recipes} from './data.js';
import {HeaderDOM} from './js/Header.js';
import {SearchSection} from './js/SearchSection.js';
import {displayRecipes} from './js/DisplayRecipes.js';
import {newState} from './js/newState.js';
import {getIngredient} from './js/getIngredient.js';
import {getAppliance} from './js/getAppliance.js';
import {getUstensils} from './js/getUstensils.js';
import {findIngredient} from './js/findIngredient.js';
import {findAppliance} from './js/findAppliance.js';
import {findUstensils} from './js/findUstensils.js';
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
	// inpIngredients.classList.remove('inpIngredients');
	getIngredient(STATEDATA);
	let inpValue = inpIngredients.value;
	if (inpValue.length > 2) {
		console.log('in Ingredient scope: ' + inpValue);
		// STATEDATA = newState(STATEDATA, inpValue)
		// if(findIngredient() == OK) {
			//MAJ DES DATA	
			//DisplayRecipes()
		// }else {
		// 	error()
		// }
	}
})

const inpAppliance = document.querySelector('.inpAppliance');
inpAppliance.addEventListener('input', () => {
	getAppliance(STATEDATA);
	let inpValue = inpAppliance.value;
	if (inpValue.length > 2) {
		console.log('in Appliance scope: ' + inpValue);
		// STATEDATA = newState(STATEDATA, inpValue)
		// if(findAppliance() == OK) {
			//MAJ DES DATA
			//DisplayRecipes()
		//}else {
			//error()
		//}
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

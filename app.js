import {	recipes} from './data.js';
import {	HeaderDOM} from './js/Header.js';
import {	SearchSection} from './js/SearchSection.js';
import {	displayRecipes} from './js/displayRecipes.js';
// import {	UpdateState} from './js/UpdateState.js';
import { runningIngredient} from './js/runningIngredient.js';
import {	runningAppliance} from './js/runningAppliance.js';
import {	runningUstensil} from './js/runningUstensil.js';
// Init data
let STATEDATA = [...recipes];
STATEDATA.forEach(recipe => {
	recipe.display = true;
});
// Display Header
const header = new HeaderDOM();
header.buildHead();
// Display Search Section
const searchSection = new SearchSection();
searchSection.creatSearchBar();
searchSection.sortByStamps();
// Display register of recipes
displayRecipes(STATEDATA);
// Algo Search Ingredients
runningIngredient(STATEDATA);
// Algo Search Appliances
runningAppliance(STATEDATA);
// Algo Search Ustensils
runningUstensil(STATEDATA);
// Algo Search Global
//ruuningGlobalResearch();


import {	recipes } from './data.js';
import { HeaderDOM } from './js/view/Header.js';
import {	SearchSection } from './js/view/SearchSection.js';
import {	displayRecipes } from './js/view/displayRecipes.js';
import { runningIngredient } from './js/Update/runningIngredient.js';
import {	runningAppliance } from './js/Update/runningAppliance.js';
import {	runningUstensil } from './js/Update/runningUstensil.js';
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


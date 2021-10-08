import {	recipes } from './js/data.js';
import { HeaderDOM } from './js/view/Header.js';
import {	SearchSection } from './js/view/SearchSection.js';
import {	displayRecipes } from './js/view/displayRecipes.js';
import { runIng } from './js/Update/runIng.js';
import {	runApp } from './js/Update/runApp.js';
import {	runUst } from './js/Update/runUst.js';
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
runIng(STATEDATA);
// Algo Search Appliances
runApp(STATEDATA);
// Algo Search Ustensils
runUst(STATEDATA);
// Algo Search Global
//ruuningGlobalResearch();


import {	recipes } from './js/data.js';
import { createHead } from './js/view/DOM/createHeader.js';
import { createSearchBar, createSearchStamps } from './js/view/DOM/createSortSection.js';
import {	displayRecipes } from './js/view/displayRecipes.js';
import { runIng } from './js/Update/runIng.js';
import {	runApp } from './js/Update/runApp.js';
import {	runUst } from './js/Update/runUst.js';
import { runGlobalResearch } from './js/Update/runGlobal.js';
import { closeAppDropBox } from './js/view/displayDropBox.js';
/***********************************************************/

// INIT DATA
let STATEDATA = [...recipes];
STATEDATA.forEach(recipe => {
	recipe.display = true;
});

// create Header
createHead();
// create Search Section
createSearchBar();
createSearchStamps();
// Display register of recipes
displayRecipes(STATEDATA);
// Algo Search Ingredients
runIng(STATEDATA);
// Algo Search Appliances
runApp(STATEDATA);
// Algo Search Ustensils
runUst(STATEDATA);
// Algo Search Global
runGlobalResearch(STATEDATA);

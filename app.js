import { recipes } from './data.js';
import { HeaderDOM } from './js/Header.js';
import { SearchSection } from './js/SearchSection.js';
import { displayRecipes } from './js/DisplayRecipes.js';
import { updateState } from './js/updateState.js';
import { runningIngredient } from './js/runningIngredient.js';
import { runningAppliance } from './js/runningAppliance.js';
import { runningUstensil } from './js/runningUstensil.js';
// Init data
let STATEDATA = [...recipes];
STATEDATA.forEach(recipe => {
	recipe.display = true;
});
// Build Header
const header = new HeaderDOM();
header.buildHead();
// Build Search Section
const searchSection = new SearchSection();
searchSection.creatSearchBar();
searchSection.sortByStamps();
// Display register of recipes
displayRecipes(STATEDATA);
// Input stamps Ingredients
runningIngredient(STATEDATA);
// Input stamps Appliances
runningAppliance(STATEDATA);
// Input stamps Ustensils
runningUstensil(STATEDATA);

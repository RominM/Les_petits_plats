import {HeaderDOM} from './js/Header.js';
import {SearchSection} from './js/SearchSection.js';
import {recipes} from './data.js';
import {displayRecipes} from './js/DisplayRecipes.js';

let STATEDATA = [...recipes];
STATEDATA.forEach(recipe => {recipe.display = true});

const header = new HeaderDOM();
header.buildHead();

const searchSection = new SearchSection();
searchSection.creatSearchBar();
searchSection.sortByStamps();

displayRecipes(STATEDATA);
const inpIngredients = document.querySelector('.inpIngredients');
inpIngredients.addEventListener('input', (e) => {
	console.log(e.data);
	console.log(inpIngredients.value);
	if(inpIngredients.value.lenght > 3) {
		console.log('coucou');
		STATEDATA = newState(STATEDATA,inputValue)
	}
})
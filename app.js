import {HeaderDOM} from './js/Header.js';
import {SearchSection} from './js/SearchSection.js';
import {recipes} from './data.js';
import {displayRecipes} from './js/DisplayRecipes.js';
import {newState} from './js/searchIngredients.js';

let STATEDATA = [...recipes];
STATEDATA.forEach(recipe => {recipe.display = true});

const header = new HeaderDOM();
header.buildHead();

const searchSection = new SearchSection();
searchSection.creatSearchBar();
searchSection.sortByStamps();

displayRecipes(STATEDATA);
const inpIngredients = document.querySelector('.inpIngredients');
inpIngredients.addEventListener('input', () => {
	let inpValue = inpIngredients.value;
	if(inpValue.length > 2) {
		console.log('in Ingredient scope: ' + inpValue);
		STATEDATA = newState(STATEDATA,inpValue)
	}
})
const inpDevices = document.querySelector('.inpDevices');
inpDevices.addEventListener('input', () => {
	let inpValue = inpDevices.value;
	if(inpValue.length > 2) {
		console.log('in Devices scope: ' + inpValue);
		STATEDATA = newState(STATEDATA,inpValue)
	}
})
const inpTools = document.querySelector('.inpTools');
inpTools.addEventListener('input', () => {
	let inpValue = inpTools.value;
	if(inpValue.length > 2) {
		console.log('in Tools scope: ' + inpValue);
		STATEDATA = newState(STATEDATA,inpValue)
	}
})

let arrayIngredient = [];
STATEDATA.forEach(recipe => {
	recipe.ingredients.forEach(ingredient => {
		const ingredientList = ingredient.ingredient
		arrayIngredient.push(ingredientList)
	})
})
const filteredIngredientArray = arrayIngredient.filter(function(ele , pos){
	return arrayIngredient.indexOf(ele) == pos;
}) 

const section = document.querySelector('section');
const allIngredient = document.createElement('div');
allIngredient.classList.add('allIngredient');
section.append(allIngredient);

filteredIngredientArray.forEach(eachIngredient => {

	const spanIngredient = document.createElement('span');
	spanIngredient.classList.add('spanIngredient');
	spanIngredient.innerHTML = eachIngredient;
	// for (let i = 0; i < 50; i++) {
	// 	const element = [i];
	// 	spanIngredient.innerHTML = element +1;
	// }

	allIngredient.append(spanIngredient)
})

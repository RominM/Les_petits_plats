import { HeaderDOM } from './js/Header.js';
import { SearchSection } from './js/SearchSection.js';
import { MainDOM } from './js/Main.js';

fetch('./data.json')
	.then(result => { 
		return result.json();
	})
	.then(result2 => {
		sessionStorage.setItem('data', JSON.stringify(result2));
		init(result2);

	});

const init = (data) => {
  const header = new HeaderDOM();
  header.buildHead();
  
  const searchSection = new SearchSection();
  searchSection.creatSearchBar();
  searchSection.sortByStamps();

    const main = new MainDOM(data);
    main.buildMain();
	 


	 //Try to get all ingredients sorted and no double
	 data.recipes.forEach(recipe => {
		const sortIngredient = recipe.ingredients.sort((a, b) => {
			if (a.ingredient < b.ingredient) return -1;
			if (a.ingredient > b.ingredient) return 1;
			return 0;			
		});						
		console.log(sortIngredient);
		recipe.ingredients.forEach(ingredient => {
			console.log(ingredient);
		})

	 });
}

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

	// data.recipes.forEach(recipe => {
	// 	console.log(recipe);
	// });
  const header = new HeaderDOM();
  header.buildHead();
  
  const searchSection = new SearchSection();
  searchSection.creatSearchBar();
  searchSection.sortByCards();

    const main = new MainDOM(data);
    main.buildMain();
}

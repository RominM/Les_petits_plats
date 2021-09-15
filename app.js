import { HeaderDOM } from './js/Header.js';
import { SearchSection } from './js/SearchSection.js';

fetch('./recipes.json') // le 'fetch' est une promesse mais ne donnera la reponse que lorsqu'il aura recupérer les données.
// il n'empeche pas, cependant la lecture du fichier
//ici, le fetch demande des information concernant le fichier 'data.json"
	.then(result => { //ici sera decrit sa reponse
		return result.json();
	}) //en attendant cette reponse, on lui demande d'initialiser la result2
	.then(result2 => {
		sessionStorage.setItem('data', JSON.stringify(result2));
		init(result2);
	});

const init = (recipes) => {
  console.log(recipes);

  const header = new HeaderDOM();
  header.buildHead();
  
  const searchSection = new SearchSection();
  searchSection.creatSearchBar();
  searchSection.sortByCards();
}
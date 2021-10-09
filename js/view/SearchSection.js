import { closeIngDropBox, closeAppDropBox, closeUstDropBox } from "../Ui/displayDropBox.js";

export class SearchSection {
  constructor(data) {
    this.data = data;
  }
  createSearchBar() {
    const body = document.body;
    const main = document.querySelector('main');
    const divSearch = document.querySelector('.divSearch');

    const labelSearch = document.createElement('label');
    labelSearch.for = 'searchBy';
    const search = document.createElement('input');
    search.type = 'search';
    search.id = 'searchBy';
    search.minLength = '3';
    search.placeholder = ' Rechercher un ingrédient, appareil, ustensiles ou une recette';
    const searchBtn = document.createElement('button');
    searchBtn.classList.add('searchBtn');
    const searchImg = document.createElement('img');
    searchImg.src = './Images/loupe.svg';

    searchBtn.append(searchImg);
    divSearch.append(searchBtn);
    divSearch.append(labelSearch);
    divSearch.append(search);
    divSearch.append(searchBtn);
    main.append(divSearch);
    body.append(main)
  }
  createSearchStamps() {
    const main = document.querySelector('main');
    const section = document.querySelector('section');

    const containerIng = document.querySelector('.inp-container-ing');
    const inpIng1 = document.createElement('input');
    inpIng1.classList.add('target-ing');
    inpIng1.placeholder = 'Ingrédients';
    const inpIng2 = document.createElement('input');
    inpIng2.classList.add('inp-ing');
    inpIng2.placeholder = 'Rechercher un ingrédient'

    const containerApp = document.querySelector('.inp-container-app');
    const inpApp1 = document.createElement('input');
    inpApp1.classList.add('target-app');
    inpApp1.placeholder = 'Appareils';
    const inpApp2 = document.createElement('input');
    inpApp2.classList.add('inp-app');
    inpApp2.placeholder = 'Rechercher un Appareil'

    const containerUst = document.querySelector('.inp-container-ust');
    const inpUst1 = document.createElement('input');
    inpUst1.classList.add('target-ust');
    inpUst1.placeholder = 'Ustensiles';
    const inpUst2 = document.createElement('input');
    inpUst2.classList.add('inp-ust');
    inpUst2.placeholder = 'Recherche un Ustensil'

    containerIng.append(inpIng1, inpIng2);
    containerApp.append(inpApp1, inpApp2);
    containerUst.append(inpUst1, inpUst2);

    main.append(section);
  }
}
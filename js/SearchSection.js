export class SearchSection {
  constructor() {}
  creatSearchBar() {
    const body = document.body;

    const main = document.querySelector('main');

    const divSearch = document.createElement("div");
    divSearch.classList.add("divSearch");
    const labelSearch = document.createElement("label");
    labelSearch.for = "searchBy";
    const search = document.createElement("input");
    search.type = "search";
    search.id = "searchBy";
    search.placeholder = " Rechercher un ingrédient, appareil, ustensiles ou une recette";
    const searchBtn = document.createElement("button");
    searchBtn.classList.add("searchBtn");
    const searchImg = document.createElement("img");
    searchImg.src = "./Images/loupe.svg";

    searchBtn.append(searchImg);
    divSearch.append(searchBtn);
    divSearch.append(labelSearch);
    divSearch.append(search);
    divSearch.append(searchBtn);
    main.append(divSearch);
    body.append(main)  
  }
  sortByCards() {
    const main = document.querySelector('main');

    const sortSection = document.createElement("section");
    const divIngredients = document.createElement("div");
    const arrowDown1 = document.createElement('img');
    const divDevices = document.createElement("div");
    const arrowDown2 = document.createElement('img');
    const divTools = document.createElement("div");
    const arrowDown3 = document.createElement('img');
    //________//settings
    sortSection.classList.add("sortSection");
    divIngredients.classList.add("divIngredients");
    divIngredients.innerHTML = "Ingrédients";
    arrowDown1.src = "./Images/arrowDown.svg";
    arrowDown1.classList.add("arrowDown");
    divDevices.classList.add("divDevices");
    divDevices.innerHTML = "Appareils";
    arrowDown2.src = "./Images/arrowDown.svg";
    arrowDown2.classList.add("arrowDown");
    divTools.classList.add("divTools");
    divTools.innerHTML = "Ustensiles";
    arrowDown3.src = "./Images/arrowDown.svg";
    arrowDown3.classList.add("arrowDown");
    //________//indent
    sortSection.append(divIngredients);
    divIngredients.append(arrowDown1);
    sortSection.append(divDevices);
    divDevices.append(arrowDown2);
    sortSection.append(divTools);
    divTools.append(arrowDown3);
    main.append(sortSection);

  }
}
export class SearchSection {
  constructor(data) {
    this.data = data;
  }
  creatSearchBar() {
    const body = document.body;
    const main = document.querySelector('main');
    const divSearch = document.querySelector(".divSearch");

    const labelSearch = document.createElement("label");
    labelSearch.for = "searchBy";
    const search = document.createElement("input");
    search.type = "search";
    search.id = "searchBy";
    search.minLength = "3";
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
  sortByStamps() {
    const main = document.querySelector('main');
    const sortSection = document.querySelector("section");

    const inpIngredients = document.createElement("input");
    const inpDevices = document.createElement("input");
    const inpTools = document.createElement("input");
    //________//settings
    sortSection.classList.add("sortSection");
    inpIngredients.classList.add("inpIngredients");
    inpIngredients.placeholder = "Ingrédients";
    inpDevices.classList.add("inpDevices");
    inpDevices.placeholder = "Appareils";
    inpTools.classList.add("inpTools");
    inpTools.placeholder = "Ustensiles";
    //________//indent
    sortSection.append(inpIngredients);
    sortSection.append(inpDevices);
    sortSection.append(inpTools);
    main.append(sortSection);
  }
}
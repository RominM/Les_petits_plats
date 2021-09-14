import { recipes } from "./js/recipes.js";

const body = document.body;

// HEADER //
//_______//create
const head = document.createElement("header");
const linkHome = document.createElement("a");
const logo = document.createElement("img");
const h1 = document.createElement("h1");
//_____//settings
linkHome.href = "./index.html";
linkHome.classList.add("linkHome");
logo.src = "./images/lpp_logo.svg";
h1.innerHTML = "Les petits plats";
//_______//ident
linkHome.append(logo);
linkHome.append(h1);
head.append(linkHome);
body.append(head);

// SEARCH BARRE //
//_____________//create
const main = document.createElement("main");
const divSearch = document.createElement("div");
const labelSearch = document.createElement("label");
const search = document.createElement("input");
const searchBtn = document.createElement("button");
const searchImg = document.createElement("img");
//_____________//setttings
divSearch.classList.add("divSearch");
labelSearch.for = "searchBy";
search.type = "search";
search.id = "searchBy";
search.placeholder = " Rechercher un ingrédient, appareil, ustensiles ou une recette";
searchImg.src = "./Images/loupe.svg";
searchBtn.classList.add("searchBtn");
//_____________//indent
searchBtn.append(searchImg);
divSearch.append(searchBtn);
divSearch.append(labelSearch);
divSearch.append(search);
divSearch.append(searchBtn);
main.append(divSearch);
body.append(main);

// SORT BY //
//________//create
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


//*******************************************************************************//
//EXERCICE CLASS

class DOMElement {
  constructor(element, classList, id, src, inneerHTML, href, type) {
    this.element = element;
    this.classList = classList;
    this.id = id;
    this.src = src;
    this.inneerHTML = inneerHTML;
    this.href = href;
    this.type = type;

    const elem = document.createElement(this.element);
    elem.classList.add(this.className);
    elem.id = this.id;
    elem.src = this.src;
    elem.inneerHTML = this.inneerHTML;
    elem.href = this.href;
    elem.type = this.type;
    return elem;
  }
}

class HeaderDOM {
  constructor() {
  }
  buildHead(head) {
    const header = new this.element("header");
    const linkHome = new this.element("a");
    const h1 = new this.element("h1");
    const logo = new this.element("img");
    const nav = new this.element("nav");
  
    linkHome.href = "./index.html";
    linkHome.classList.add("linkHome");
    logo.src = "./images/lpp_logo.svg";
    h1.innerHTML = "Les petits plats";
  
    header.append(linkHome);
    linkHome.append(h1);
    h1.append(logo);
    header.append(nav);
  }
}

new DOMElement();

new HeaderDOM();















// CARDS //
//______//create
//______//settings
//______//indent
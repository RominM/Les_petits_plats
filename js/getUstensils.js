export const getUstensils = (STATEDATA) => {
   let arrayUstensils = [];
   STATEDATA.forEach(recipe => {
      recipe.ustensils.forEach(ustensil => {
         const ustensilsList = ustensil;
         arrayUstensils.push(ustensilsList);
      })
   });
   const filteredUstensilsArray = arrayUstensils.filter(function (ele, pos) {
      return arrayUstensils.indexOf(ele) == pos;
   })
   const section = document.querySelector('section');
   const allUstensils = document.createElement('div');
   allUstensils.classList.add('allUstensils');
   section.append(allUstensils);

   filteredUstensilsArray.forEach(eachUstensils => {
      const spanUstensils = document.createElement('span');
      spanUstensils.classList.add('spanUstensils');
      spanUstensils.innerHTML = eachUstensils;

      allUstensils.append(spanUstensils)
   })
}
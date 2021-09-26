export const getIngredient = (STATEDATA) => {
   let arrayIngredient = [];
   STATEDATA.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
         const ingredientList = ingredient.ingredient
         arrayIngredient.push(ingredientList)
      })
   })
   const filteredIngredientArray = arrayIngredient.filter(function (ele, pos) {
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

      allIngredient.append(spanIngredient)
   })
}
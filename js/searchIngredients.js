export const newState = (STATEDATA,inputValue) => {
   searchIngredient(STATEDATA,inputValue);
   return state
}
const searchIngredient = (STATEDATA,inputValue) => {
   // 	 //Try to get all ingredients sorted and no double
	//  data.recipes.forEach(recipe => {
	// 	const sortIngredient = recipe.ingredients.sort((a, b) => {
	// 		if (a.ingredient < b.ingredient) return -1;
	// 		if (a.ingredient > b.ingredient) return 1;
	// 		return 0;			
	// 	});						
	// 	console.log(sortIngredient);
	// 	recipe.ingredients.forEach(ingredient => {
	// 		console.log(ingredient);
	// 	})

	//  });
   console.log('in searchIngredient()');
}
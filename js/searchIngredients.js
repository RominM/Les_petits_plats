export const newState = (STATEDATA,inputValue) => {
   searchIngredients(STATEDATA,inputValue);
	searchDevices(STATEDATA,inputValue);
	searchTools(STATEDATA,inputValue);
   return state
}
const searchIngredients = (STATEDATA,inputValue) => {
   console.log('in searchIngredient()');
}
const searchDevices = (STATEDATA,inputValue) => {
   console.log('in searchDevices()');
}
const searchTools = (STATEDATA,inputValue) => {
   console.log('in searchTools()');
}
export const newState = (STATEDATA,inputValue) => {
   searchIngredients(STATEDATA,inputValue);
   searchAppliance(STATEDATA,inputValue);
   searchUstensils(STATEDATA,inputValue);
   return state
}
const searchIngredients = (STATEDATA,inputValue) => {
   console.log('in searchIngredient()');
}
const searchAppliance = (STATEDATA,inputValue) => {
   console.log('in searchAppliance()');
}
const searchUstensils = (STATEDATA,inputValue) => {
   console.log('in searchUstensils()');
}

export const getAppliance = (STATEDATA) => {
   let arrayAppliance = [];
   STATEDATA.forEach(recipe => {
      const applianceList = recipe.appliance;
      arrayAppliance.push(applianceList)
   })
   const filteredApplianceArray = arrayAppliance.filter(function (ele, pos) {
      return arrayAppliance.indexOf(ele) == pos;
   })
   const section = document.querySelector('section');
   const allAppliance = document.createElement('div');
   allAppliance.classList.add('allAppliance');
   section.append(allAppliance);

   filteredApplianceArray.forEach(eachAppliance => {
      const spanAppliance = document.createElement('span');
      spanAppliance.classList.add('spanAppliance');
      spanAppliance.innerHTML = eachAppliance;

      allAppliance.append(spanAppliance)
   })
}
import { recipes } from "../data.js";
import {error} from '../js/error.js';

export const getAllAppliances = (STATEDATA) => {
   let arrayAppliance = [];
   STATEDATA.forEach(recipe => {
      const applianceList = recipe.appliance;
      arrayAppliance.push(applianceList)
   })
   const filteredApplianceArray = arrayAppliance.filter(function (ele, pos) {
      return arrayAppliance.indexOf(ele) == pos;
   })
   return filteredApplianceArray
}

export const displayAppliances = (arrayAppliance) => {
   const section = document.querySelector('section');
   const allAppliance = document.createElement('div');

   allAppliance.innerHTML = '';

   allAppliance.classList.add('allAppliance');
   section.append(allAppliance);

   arrayAppliance.forEach(eachAppliance => {

      const spanAppliance = document.createElement('span');
      spanAppliance.classList.add('spanAppliance');
      spanAppliance.innerHTML = eachAppliance;

      allAppliance.append(spanAppliance)
   })
}

export const getFilterAppliance = (inpValue) => {
   const data = [...recipes];
   let filteredAppliance = [];
   data.forEach(recipe => {
      const applianceMem = recipe.appliance;
      const sliced = applianceMem.slice(0, inpValue.length);
      console.log(applianceMem);
      if(sliced.toLowerCase() == inpValue.toLowerCase()) {
         filteredAppliance.push(applianceMem);
      }
   })
   return filteredAppliance
}
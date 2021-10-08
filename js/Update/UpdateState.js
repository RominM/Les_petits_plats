import { displayRecipes } from "../view/displayRecipes.js";

export class UpdateState {
   constructor(STATEDATA, inpValue) {
      this.STATEDATA = STATEDATA;
      this.inpValue = inpValue;
   }
   
   stateData(STATEDATA, inpValue) {
      updateIngData();
      updateAppData();
      updateUstData();
      return stateData
   }
   // INGREDIENTS
   updateIngData(inpValue) {
      this.STATEDATA.forEach(recipe => {
         if(recipe.display == true) {
            for (let i = 0; i < recipe.ingredients.length; i++) {
               const ingredient = recipe.ingredients[i];
               const ingMemo = ingredient.ingredient.toLowerCase();

                if (inpValue.includes(ingMemo)) {
                  recipe.display = true;
                  createBubble();
                  break
               } else {
                  recipe.display = false;
               };
            };
         };
      });
      displayRecipes(this.STATEDATA);
   }
   // APPLIANCES
   updateAppData(inpValue) {
      const recipes = this.STATEDATA;
      for (let i = 0; i < recipes.length; i++) {
         const recipe = recipes[i];
         
         if(recipe.display == true) {
            const appMemo = recipe.appliance.toLowerCase();
            if (inpValue.includes(appMemo)) {
               recipe.display = true;
               break
            } else {
               recipe.display = false;
            };
         }
      }
      displayRecipes(this.STATEDATA);
   }
   // USTENSILS
   updateUstData(inpValue) {
      const recipes = this.STATEDATA;
      recipes.forEach(recipe => {
         console.log(recipe.ustensils);
         for (let i = 0; i < recipe.ustensils.length; i++) {
            const ustensil = recipe.ustensils[i];
            
            if(recipe.display == true) {
               const ustMemo = ustensil.toLowerCase();
               if(inpValue.includes(ustMemo)) {
                  recipe.display = true;
                  break
               } else {
                  recipe.display = false;
               };
            }   
         }
      })
      displayRecipes(this.STATEDATA);
   }
}

const createBubble = () => {
   const ingLi = document.querySelectorAll('.ing-li');
   ingLi.forEach(ing => {
      ing.addEventListener('click', () => {
         const sortSection = document.querySelector('.sortSection');
         const bubble = document.createElement('div');
         bubble.classList.add('bubble');
         const bubbleSpan = document.createElement('span');
         bubbleSpan.innerHTML = ing.innerHTML;

         bubble.append(bubbleSpan);
         sortSection.append(bubble);
         closeDropBox();
      })
   })  
}

const closeDropBox = () => {
   const allIng = document.querySelector('all-ing');
   console.log(allIng);
}


/*
créer un nouveau dossier pour ranger les fichier js

gérer les 3 inputs
si je tape 'coco' et que je click (garder les recettes selectionné)
!refermer la dropBox
ajout d'une bulle avec l'ingredient
vider l'input
garder les recettes >>> displayIngredient() + ...

penser a garder les recette en display = true
*/
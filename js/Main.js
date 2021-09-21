export class MainDOM {
   constructor(data) {
      this.data = data;
   }
   buildMain(data) {
      const main = document.querySelector('main');
      const registre = document.createElement('div');
      registre.classList.add('registre');
      main.append(registre);
      
      this.data.recipes.forEach(recipe => {

         const card = document.createElement('div');
         card.classList.add('card');
         const image = document.createElement('div');
         image.classList.add('image');
         const descript = document.createElement('div');
         descript.classList.add('descript');
         
         const title = document.createElement('span');
         title.classList.add('title');
         title.innerHTML = recipe.name;

         const time = document.createElement('div');
         time.classList.add('time');
         const clock = document.createElement('img');
         clock.classList.add('clock-img');
         clock.src = './Images/hour.svg';
         const minute = document.createElement('span');
         minute.innerHTML = recipe.time + ' min';

         const ingredientsList = document.createElement('div');
         ingredientsList.classList.add('ingredientsList');
         recipe.ingredients.forEach(ingredient => {
            const span = document.createElement('span');
            span.innerHTML = ingredient.ingredient + ': ' + ingredient.quantity + ingredient.unit;

            ingredientsList.append(span);
         })

         const para = document.createElement('p');
         para.innerHTML = recipe.description;

         time.append(clock);
         time.append(minute);

         descript.append(title);
         descript.append(time);
         descript.append(ingredientsList);
         descript.append(para);

         card.append(image);
         card.append(descript);
         registre.append(card);
      });
   }
}
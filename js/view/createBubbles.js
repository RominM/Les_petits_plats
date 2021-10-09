import { closeIngDropBox, closeAppDropBox, closeUstDropBox } from '../Ui/displayDropBox.js';

export const createBubbleIng = () => {
   const ingLi = document.querySelectorAll('.ing-li');
   ingLi.forEach(ing => {
      ing.addEventListener('click', () => {
         const containsBubbles = document.querySelector('.contains-bubbles');
         const bubble = document.createElement('div');
         bubble.classList.add('bubble-ing');
         const bubbleSpan = document.createElement('span');
         bubbleSpan.innerHTML = ing.innerHTML;

         bubble.append(bubbleSpan);
         containsBubbles.append(bubble);
         closeIngDropBox();
         closeUstDropBox();
         closeAppDropBox();
      });
   });
};

export const createBubbleApp = () => {
   const appLi = document.querySelectorAll('.app-li');
   appLi.forEach(app => {
      app.addEventListener('click', () => {
         const containsBubbles = document.querySelector('.contains-bubbles');
         const bubble = document.createElement('div');
         bubble.classList.add('bubble-app');
         const bubbleSpan = document.createElement('span');
         bubbleSpan.innerHTML = app.innerHTML;

         bubble.append(bubbleSpan);
         containsBubbles.append(bubble);
         closeIngDropBox();
         closeUstDropBox();
         closeAppDropBox();
      });
   });
};

export const createBubbleUst = () => {
   const ustLi = document.querySelectorAll('.ust-li');
   ustLi.forEach(ust => {
      console.log(ustLi);
      ust.addEventListener('click', () => {
         const containsBubbles = document.querySelector('.contains-bubbles');
         const bubble = document.createElement('div');
         bubble.classList.add('bubble-ust');
         const bubbleSpan = document.createElement('span');
         bubbleSpan.innerHTML = ust.innerHTML;

         bubble.append(bubbleSpan);
         containsBubbles.append(bubble);
         closeIngDropBox();
         closeUstDropBox();
         closeAppDropBox();
      });
   });
};
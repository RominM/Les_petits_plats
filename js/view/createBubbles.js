
export const createBubbleIng = (alias) => {
   const containsBubbles = document.querySelector('.contains-bubbles');
   const bubble = document.createElement('div');
   bubble.classList.add('bubble-ing');
   const bubbleSpan = document.createElement('span');
   bubbleSpan.innerHTML = alias;

   bubble.append(bubbleSpan);
   containsBubbles.append(bubble);
};

export const createBubbleApp = (alias) => {
   const containsBubbles = document.querySelector('.contains-bubbles');
   const bubble = document.createElement('div');
   bubble.classList.add('bubble-app');
   const bubbleSpan = document.createElement('span');
   bubbleSpan.innerHTML = alias;

   bubble.append(bubbleSpan);
   containsBubbles.append(bubble);
};

export const createBubbleUst = (alias) => {
   const containsBubbles = document.querySelector('.contains-bubbles');
   const bubble = document.createElement('div');
   bubble.classList.add('bubble-ust');
   const bubbleSpan = document.createElement('span');
   bubbleSpan.innerHTML = alias;

   bubble.append(bubbleSpan);
   containsBubbles.append(bubble);
};
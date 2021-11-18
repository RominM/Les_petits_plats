// INGREDIENTS
export const createIngTags = (alias) => {
   const containsTags = document.querySelector('.contains-tags');

   if (document.querySelector('.tag-ing')) {
      const tagIng = document.querySelector('.tag-ing');
      const tagSpan = document.createElement('span');
      tagSpan.setAttribute('data-attribute', 'ing');
      // tagSpan.setAttribute('data-selected', 'true');
      tagSpan.classList.add('tag');
      tagSpan.innerHTML = alias;

      tagIng.append(tagSpan);
   } else {
      const tagIng = document.createElement('div');
      tagIng.classList.add('tag-ing');
      const tagSpan = document.createElement('span');
      tagSpan.setAttribute('data-attribute', 'ing');
      // tagSpan.setAttribute('data-selected', 'true');
      tagSpan.classList.add('tag');
      tagSpan.innerHTML = alias;

      tagIng.append(tagSpan);
      containsTags.append(tagIng);
   }
};

// APPLIANCES
export const createAppTags = (alias) => {
   const containsTags = document.querySelector('.contains-tags');

   if (document.querySelector('.tag-app')) {
      const tagApp = document.querySelector('.tag-app');
      const tagSpan = document.createElement('span');
      tagSpan.setAttribute('data-attribute', 'app');
      tagSpan.classList.add('tag');
      tagSpan.innerHTML = alias;

      tagApp.append(tagSpan);
   } else {
      const tagApp = document.createElement('div');
      tagApp.classList.add('tag-app');
      const tagSpan = document.createElement('span');
      tagSpan.setAttribute('data-attribute', 'app');
      tagSpan.classList.add('tag');
      tagSpan.innerHTML = alias;

      tagApp.append(tagSpan);
      containsTags.append(tagApp);
   }
};

// USTENSILS
export const createUstTags = (alias) => {
   const containsTags = document.querySelector('.contains-tags');

   if (document.querySelector('.tag-ust')) {
      const tagUst = document.querySelector('.tag-ust');
      const tagSpan = document.createElement('span');
      tagSpan.setAttribute('data-attribute', 'ust');
      tagSpan.classList.add('tag');
      tagSpan.innerHTML = alias;

      tagUst.append(tagSpan);
   } else {
      const tagUst = document.createElement('div');
      tagUst.classList.add('tag-ust');
      const tagSpan = document.createElement('span');
      tagSpan.setAttribute('data-attribute', 'ust');
      tagSpan.classList.add('tag');
      tagSpan.innerHTML = alias;

      tagUst.append(tagSpan);
      containsTags.append(tagUst);
   }
};

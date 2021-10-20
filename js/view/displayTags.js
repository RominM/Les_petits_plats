
export const createIngTags = (alias) => {
   const containsTags = document.querySelector('.contains-tags');
   const tagIng = document.createElement('div');
   tagIng.classList.add('tag-ing');
   const tagSpan = document.createElement('span');
   tagSpan.innerHTML = alias;

   tagIng.append(tagSpan);
   containsTags.append(tagIng);
};

export const closeIngTag = () => {
   const tagIng = document.querySelector('.tag-ing');
   tagIng.style.display = 'none';
};

export const createAppTags = (alias) => {
   const containsTags = document.querySelector('.contains-tags');
   const tagApp = document.createElement('div');
   tagApp.classList.add('tag-app');
   const tagSpan = document.createElement('span');
   tagSpan.innerHTML = alias;

   tagApp.append(tagSpan);
   containsTags.append(tagApp);
};

export const closeAppTag = () => {
   const tagApp = document.querySelector('.tag-app');
   tagApp.style.display = 'none';
};

export const createUstTags = (alias) => {
   const containsTags = document.querySelector('.contains-tags');
   const tagUst = document.createElement('div');
   tagUst.classList.add('tag-ust');
   const tagSpan = document.createElement('span');
   tagSpan.innerHTML = alias;

   tagUst.append(tagSpan);
   containsTags.append(tagUst);
};

export const closeUstTag = () => {
   const tagUst = document.querySelector('.tag-ust');
   tagUst.style.display = 'none';
};


/*

const createTags = (alias) => {
   const containsTags = document.querySelector('.contains-tags');
   const tag = document.createElement('div');
   if(tag ??? Ingredients) {
      tag.classList.add('tag-ing');
   }
   else if(tag ??? Appliance) {
      tag.classList.add('tag-app');
   }
   else if(tag ??? Ustensils) {
      tag.classList.add('tag-ust');
   }
   const tagSpan = document.createElement('span');
   tagSpan.innerHTML = alias;

   tag.append(tagSpan);
   containsTags.append(tagUst);
};

const displayTags () => {
   const tagIng = document.querySelector('tag-ing');
   const tagApp = document.querySelector('tag-app');
   const tagUst = document.querySelector('tag-ust');
   
   const allLi = document.querySelectorAll('li');
   allLi.foreach(li => {
      if(li.contains('tag-ing')) {
         if(tagIng.contains('selected)) {
            tagIng.remove('selected)
         }
         else {
            tagIng.classListe.add('selected');
            createTag();
         }
      }
      else if(li.contains('tag-app)) {
         if(tagApp.contains('selected)) {
            tagApp.remove('selected)
         }
         else {
            tagApp.classListe.add('selected');
            createTag();
         }      
      }
      else if(li.contains('tag-ust)) {
         if(tagUst.contains('selected)) {
            tagUst.remove('selected)
         }
         else {
            tagUst.classListe.add('selected');
            createTag();
         }      
      }
   })
}

*/
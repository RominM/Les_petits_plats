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




// const createTags = (alias) => {
//    const containsTags = document.querySelector('.contains-tags');
//    const tag = document.createElement('div');

//    if (alias === 'ingredients') {
//       tag.classList.add('tag-ing');
//    } else if (alias === 'appliance') {
//       tag.classList.add('tag-app');
//    } else if (alias === 'ustensils') {
//       tag.classList.add('tag-ust');
//    }
//    const tagSpan = document.createElement('span');
//    tagSpan.innerHTML = alias;

//    tag.append(tagSpan);
//    containsTags.append(tag);
// };

// export const displayTags = () => {
//    const liIng = document.querySelector('.ing-li');
//    const liApp = document.querySelector('.app-li');
//    const liUst = document.querySelector('.ust-li');

//    const allLi = document.querySelectorAll('.li');
//    console.log(allLi);
//    for (let i = 0; i < allLi.length; i++) {
//       const li = allLi[i];

//       if (li.classList.contains('ing-li')) {
//          if (liIng.classList.contains('tag-ing')) {
//             liIng.classList.remove('tag-ing')
//          } else {
//             liIng.classList.add('tag-ing');
//             createTags();
//          }
//       } else if (li.contains('app-li')) {
//          if (liApp.contains('selected')) {
//             liApp.remove('selected')
//          } else {
//             liApp.classListe.add('tag-app');
//             createTags();
//          }
//       } else if (li.contains('ust-li')) {
//          if (liUst.contains('selected')) {
//             liUst.remove('selected')
//          } else {
//             liUst.classListe.add('tag-ust');
//             createTags();
//          }
//       }
//    }
// }
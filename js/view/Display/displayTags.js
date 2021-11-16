import {
   updateIngRecipe } from "../../afterDeleted.js";
import {
   closeAppDropBox,
   closeIngDropBox,
   closeUstDropBox
} from "./displayDropBox.js";


const getTag = (tags) => {

   let listTag = [];

   tags.forEach(element => {
      listTag.push(element.innerHTML);
      console.log(listTag);
      console.log(element);
      console.log(tags);
   });

   console.log(listTag)
   return listTag;

}

// DELETED TAG
export const deletedTag = () => {
   const tags = document.querySelectorAll('.tag');
   let nameTag = [];

   tags.forEach(tag => {
      tag.addEventListener('click', () => {
         tag.remove();
         let temp = document.querySelectorAll('.tag');
         nameTag = getTag(temp);
         updateIngRecipe(nameTag, tag);
         closeAppDropBox();
         closeIngDropBox();
         closeUstDropBox();
      });
   });

   /* tags.forEach(tag => {
       tag.addEventListener('click', () => {
          tag.remove();
          afterDeletedTag(tag);
          //updateIngRecipe();
          closeAppDropBox();
          closeIngDropBox();
          closeUstDropBox();
       });
    });*/
};















// const loopTags = () => {
//    const tagSpan = document.querySelectorAll('.tag');
//    tagSpan.forEach(tag => {
//       console.log(tag);
//       if(tag.parentElement.classList.contains('tag-ing')) {
//          console.log('get STATEDATA with tagIng');
//       } else if (tag.parentElement.classList.contains('tag-app')) {
//          console.log('get STATEDATA with tagApp');
//       } else if (tag.parentElement.classList.contains('tag-ust')) {
//          console.log('get STATEDATA with tagUst');
//       }
//       return tagSpan
//    })
// }











// const createTags = (alias) => {
//    const containsTags = document.querySelector('.contains-tags');
//    const tag = document.createElement('div');
//    console.log('hello');
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
//             createTags(li.innerHTML);
//             break
//          }
//       } else if (li.classList.contains('app-li')) {
//          if (liApp.classList.contains('selected')) {
//             liApp.classList.remove('selected')
//          } else {
//             liApp.classList.add('tag-app');
//             createTags(li.innerHTML);
//             break
//          }
//       } else if (li.classList.contains('ust-li')) {
//          if (liUst.classList.contains('selected')) {
//             liUst.classList.remove('selected')
//          } else {
//             liUst.classList.add('tag-ust');
//             createTags(li.innerHTML);
//             break
//          }
//       }
//    }
// }
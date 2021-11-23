import { afterDeletedTag  } from "../../Update/afterDeleted.js";
import { closeAppDropBox } from "./displayAppDropBox.js";
import { closeIngDropBox } from "./displayIngDropBox.js";
import { closeUstDropBox } from "./displayUstDropBox.js";

// DELETED TAG
export const deletedTag = () => {
   const tags = document.querySelectorAll('.tag');
   let nameTag = [];

   tags.forEach(tag => {
      tag.addEventListener('click', () => {
         tag.remove();
   
         let temp = document.querySelectorAll('.tag');
         nameTag = getTag(temp);

         afterDeletedTag(tag)

         closeAppDropBox();
         closeIngDropBox();
         closeUstDropBox();
      });
   });
};

export const deletedTagGlobal = () => {
   const tags = document.querySelectorAll('.tag');
   let nameTag = [];

   tags.forEach(tag => {
      tag.remove();
   
      let temp = document.querySelectorAll('.tag');
      nameTag = getTag(temp);

      afterDeletedTag(tag)

      closeAppDropBox();
      closeIngDropBox();
      closeUstDropBox();
   });
};

const getTag = (tags) => {
   let listTag = [];

   tags.forEach(tag => listTag.push(tag.innerHTML));
   return listTag;
}

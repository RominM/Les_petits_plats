// CREATE ING DROPBOX
export const createIngDropBox = (arrayIng) => {
   const containerIng = document.querySelector('.inp-container-ing');
   let allIng = document.querySelector('.all-ing');
   arrayIng.sort();
   let id = 1;
   if (allIng) {
      allIng.innerHTML = '';
   } else {
      allIng = document.createElement('ul');
      allIng.classList.add('all-ing');

      containerIng.append(allIng);
   }
   arrayIng.forEach(eachIng => {
      const ingLi = document.createElement('li');
      ingLi.classList.add('li', 'ing-li');
      ingLi.id = id;
      ingLi.innerHTML = eachIng;
      //ingLi.onclick = runIng();
      
      allIng.append(ingLi);
      id++;
   })
};
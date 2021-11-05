/********************/
//____INGREDIENT____//
/********************/

// CREATE ING DROPBOX
export const displayIng = (arrayIng) => {
   const containerIng = document.querySelector('.inp-container-ing');
   let allIng = document.querySelector('.all-ing');

   if (allIng) {
      allIng.innerHTML = '';
   } else {
      allIng = document.createElement('ul');
      allIng.classList.add('all-ing');
      containerIng.append(allIng);
   }
   
   arrayIng.forEach(eachIng => {
      const ingLi = document.createElement('li');
      ingLi.classList.add('li','ing-li');
      ingLi.innerHTML = eachIng;

      allIng.append(ingLi);
   })
};
// OPEN ING 
export const openIngDropBox = () => {
	const inpIng1 = document.querySelector('.target-ing');
	const inpIng2 = document.querySelector('.inp-ing');

   if(inpIng2.style.display = 'block') {
      inpIng2.value = '';
      inpIng1.style.display = 'none';
      inpIng2.style.display = 'block';
   }
};
// CLOSE ING
export const closeIngDropBox = () => {
   const inpIng1 = document.querySelector('.target-ing');
	const inpIng2 = document.querySelector('.inp-ing');
   const allIng = document.querySelector('.all-ing');
   const containerIng = document.querySelector('.inp-container-ing');
   if(allIng) {
      containerIng.removeChild(allIng);
      inpIng1.style.display = 'block';
      inpIng2.style.display = 'none';
   }
}

/********************/
//_____APPLIANCE____//
/********************/

// CREATE APP DROPBOX
export const displayApp = (arrayApp) => {
   const containerApp = document.querySelector('.inp-container-app');
   let allApp = document.querySelector('.all-app');

   if(allApp) {
      allApp.innerHTML = '';
   } else {
      allApp = document.createElement('ul');
      allApp.classList.add('all-app');
      containerApp.append(allApp);
   }

   arrayApp.forEach(eachApp => {
      const appLi = document.createElement('li');
      appLi.classList.add('li','app-li');
      appLi.innerHTML = eachApp;

      allApp.append(appLi);
   })
};
// OPEN APP
export const openAppDropBox = () => {
   const inpApp1 = document.querySelector('.target-app');
	const inpApp2 = document.querySelector('.inp-app');

   if(inpApp2.style.display = 'block') {
      inpApp2.value = '';
      inpApp1.style.display = 'none';
      inpApp2.style.display = 'block';
   } 
}
// CLOSE APP
export const closeAppDropBox = () => {
	const inpApp1 = document.querySelector('.target-app');
	const inpApp2 = document.querySelector('.inp-app');
   const allApp = document.querySelector('.all-app');
   const containerApp = document.querySelector('.inp-container-app');
   if(allApp) {
      containerApp.removeChild(allApp);
      inpApp1.style.display = 'block';
      inpApp2.style.display = 'none';
   }
}

/********************/
//_____USTENSILS____//
/********************/
// CREATE UST DROPBOX
export const displayUst = (arrayUst) => {
   const containerApp = document.querySelector('.inp-container-ust');
   let allUst = document.querySelector('.all-ust');
   // If allUst existe get empty
   if(allUst) {
      allUst.innerHTML = '';
   } else { // else it creted it
      allUst = document.createElement('ul');
      allUst.classList.add('all-ust');
      containerApp.append(allUst);
   }
   arrayUst.forEach(eachUst => {
      const ustLi = document.createElement('li');
      ustLi.classList.add('li','ust-li');
      ustLi.innerHTML = eachUst;
   
      allUst.append(ustLi);
   })
};
// OPEN UST
export const openUstDropBox = () => {
	const inpUst1 = document.querySelector('.target-ust');
	const inpUst2 = document.querySelector('.inp-ust');

    if(inpUst2.style.display = 'block') {
      inpUst2.value = '';
      inpUst1.style.display = 'none';
      inpUst2.style.display = 'block';
   }
}
// CLOSE UST
export const closeUstDropBox = () => {
	const inpUst1 = document.querySelector('.target-ust');
	const inpUst2 = document.querySelector('.inp-ust');
   const allUst = document.querySelector('.all-ust');
   const containerUst = document.querySelector('.inp-container-ust');
   if(allUst) {
      containerUst.removeChild(allUst);
      inpUst1.style.display = 'block';
      inpUst2.style.display = 'none';
   }
}





/*
// CLOSE ALL THE DROPBOX WHENE THE USER CLICK ANYWHERE ON THE BODY
export const closeDropBoxByBody = () => {
   const body = document.querySelector('body');
   
   const closeAllDropBox = (e) => {
      const inpIng2 = document.querySelector('.inp-ing');
      const inpApp2 = document.querySelector('.inp-app');
      const inpUst2 = document.querySelector('.inp-ust');
      // e.preventDefault();
      if(inpIng2.style.display == 'block' || inpApp2.style.display == 'block' || inpUst2.style.display == 'block') {
         console.log(e.target);
         closeUstDropBox();
         closeAppDropBox();
         closeIngDropBox();
      }
   }
   body.addEventListener('click', closeAllDropBox);
}
closeDropBoxByBody();
*/
export const openIngDropBox = () => {
	const inpIng1 = document.querySelector('.target-ing');
	const inpIng2 = document.querySelector('.inp-ing');

   if(inpIng2.style.display = 'block') {
      inpIng2.value = '';
      inpIng1.style.display = 'none';
      inpIng2.style.display = 'block';
   }
}

export const openAppDropBox = () => {
   const inpApp1 = document.querySelector('.target-app');
	const inpApp2 = document.querySelector('.inp-app');

   if(inpApp2.style.display = 'block') {
      inpApp2.value = '';
      inpApp1.style.display = 'none';
      inpApp2.style.display = 'block';
   } 
}

export const openUstDropBox = () => {
	const inpUst1 = document.querySelector('.target-ust');
	const inpUst2 = document.querySelector('.inp-ust');

    if(inpUst2.style.display = 'block') {
      inpUst2.value = '';
      inpUst1.style.display = 'none';
      inpUst2.style.display = 'block';
   }
}

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
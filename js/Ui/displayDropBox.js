export const openIngDropBox = () => {
	const inpIng1 = document.querySelector('.target-ing');
	const inpIng2 = document.querySelector('.inp-ing');

   if(inpIng2.style.display = 'block') {
      console.log('ingredient is open');
      inpIng2.value = '';
      inpIng1.style.display = 'none';
      inpIng2.style.display = 'block';
   }
}

export const openAppDropBox = () => {
   const inpApp1 = document.querySelector('.target-app');
	const inpApp2 = document.querySelector('.inp-app');

   if(inpApp2.style.display = 'block') {
      console.log('appliance is open');
      inpApp2.value = '';
      inpApp1.style.display = 'none';
      inpApp2.style.display = 'block';
   } 
}

export const openUstDropBox = () => {
	const inpUst1 = document.querySelector('.target-ust');
	const inpUst2 = document.querySelector('.inp-ust');

    if(inpUst2.style.display = 'block') {
      console.log('ustensils is open');
      inpUst2.value = '';
      inpUst1.style.display = 'none';
      inpUst2.style.display = 'block';
   }
}

export const closeIngDropBox = () => {
   const inpIng1 = document.querySelector('.target-ing');
	const inpIng2 = document.querySelector('.inp-ing');
   const allIng = document.querySelector('.all-ing');
   if(allIng) {
      console.log('ingredient');
      allIng.style.display = 'none';
      inpIng1.style.display = 'block';
      inpIng2.style.display = 'none';
   }
}

export const closeAppDropBox = () => {
	const inpApp1 = document.querySelector('.target-app');
	const inpApp2 = document.querySelector('.inp-app');
   const allApp = document.querySelector('.all-app');
   if(allApp) {
      console.log('appliance');
      allApp.style.display = 'none';
      inpApp1.style.display = 'block';
      inpApp2.style.display = 'none';
   }
}

export const closeUstDropBox = () => {
	const inpUst1 = document.querySelector('.target-ust');
	const inpUst2 = document.querySelector('.inp-ust');
   const allUst = document.querySelector('.all-ust');
   if(allUst) {
      console.log('ustensil');
      allUst.style.display = 'none';
      inpUst1.style.display = 'block';
      inpUst2.style.display = 'none';
   }

}
  

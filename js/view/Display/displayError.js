export const displayError = () => {
	const main = document.querySelector('main');
   const registre = document.querySelector('.registre');
   registre.innerHTML = '';

   const infoError = document.createElement('div');
   infoError.classList.add('infoError');

   const logoError = document.createElement('img');
   logoError.src = '../Images/exclamation-circle-solid.svg';

   const spanError = document.createElement('span');
   spanError.innerHTML = " Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson »";

	infoError.append(logoError);
	infoError.append(spanError);

	main.append(infoError);
}

export const removeMainError = () => {
   const infoError = document.querySelector('.infoError');
   if(infoError) {
      infoError.remove();
   }
};

// SPAN ERROR
export const getSpanErrorIng = () => {
   const containerIng = document.querySelector('.inp-container-ing');
   const spanIngError = document.querySelector('.spanIngError');

   if (spanIngError) {
      spanIngError.remove();
   } else {
      const spanIngError = document.createElement('span');
      spanIngError.classList.add('spanIngError', 'spanError');
      spanIngError.innerHTML = 'Nous n\'avons pas trouvé d\'ingredient...';

      containerIng.append(spanIngError);
   }
}

export const getSpanErrorApp = () => {
   const containerApp = document.querySelector('.inp-container-app');
   const spanAppError = document.querySelector('.spanAppError');

   if (spanAppError) {
      spanAppError.remove();
   } else {
      const spanAppError = document.createElement('span');
      spanAppError.classList.add('spanAppError', 'spanError');
      spanAppError.innerHTML = 'Nous n\'avons pas trouvé d\'appareil...';

      containerApp.append(spanAppError);
   }
}

export const getSpanErrorUst = () => {
   const containerUst = document.querySelector('.inp-container-ust');
   const spanUstError = document.querySelector('.spanUstError');

   if (spanUstError) {
      spanUstError.remove();
   } else {
      const spanUstError = document.createElement('span');
      spanUstError.classList.add('spanUstError', 'spanError');
      spanUstError.innerHTML = 'Nous n\'avons pas trouvé d\'ustensils...';

      containerUst.append(spanUstError);
   }
}

export const removeSpanError = () => {
   const spanError = document.querySelectorAll('.spanError');
   spanError.forEach(span => {
      span.remove();
   })
};

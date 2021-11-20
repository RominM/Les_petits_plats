import { createUstDropBox } from '../view/DOM/createUstDropBox.js';
import { createUstTags } from '../view/DOM/createTags.js';
import { getAllUst, getFilterUst, handlerUstLi } from '../Handler/handlerUst.js';
import { UpdateState } from './UpdateState.js';
import { closeUstDropBox, openUstDropBox } from '../view/Display/displayUstDropBox.js';
import { deletedTag } from '../view/Display/displayTags.js';
import { removeSpanError, getSpanErrorUst } from '../view/Display/displayError.js';


export const runUst = (STATEDATA) => {
	const targetUst = document.querySelector('.target-ust');
	const inputUst = document.querySelector('.inp-ust');

	// TAB ON TARGET
	targetUst.addEventListener("keyup", (e) => {
		if (e.keyCode === 9) {
			displayUst();
		}
	});
	// CLICK TARGET
	targetUst.addEventListener('click', () => {
		displayUst();
	});
	// EVENT TARGET
	const displayUst = () => {
		openUstDropBox();
		inputUst.focus();
		console.log('coucou Ustensils');

	
		const allUst = getAllUst(STATEDATA);
		createUstDropBox(allUst);
		handlerUstLi();
	
		// CLICK ON A TAG
		const ustLis = document.querySelectorAll('.ust-li');
		ustLis.forEach(li => {
			li.addEventListener('click', () => {
				clickOnUstLi(li);
			})
		})
		removeSpanError();
	}



	

	['input','focus'].forEach(evt => {
		inputUst.addEventListener(evt, () => {
			evtInputUst();
		});
	})
	inputUst.addEventListener('blur', () => {
		closeUstDropBox();
	})



	
	const clickOnUstLi = (li) => {
			const allUst = document.querySelector('.all-ust');
			allUst.innerHTML = '';
							
			let inpValue = li.innerHTML;
			const filtUst = getFilterUst(inpValue);
			const noDblUst = filtUst.filter(function (ele, pos) {
				return filtUst.indexOf(ele) == pos;
			});
			const updateState = new UpdateState(STATEDATA, inpValue);
			updateState.updateUstData(filtUst);

			createUstDropBox(noDblUst);
			createUstTags(inpValue);
			deletedTag();
			closeUstDropBox();
	};
};
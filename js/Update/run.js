import { UpdateData } from './UpdateState.js';
import { recipes } from '../data.js';

export const runSwitch = (classInput , name) => {
	let state = [...recipes];
	let type = "";

	const updateState = new UpdateData(state);

	switch (classInput) {
		case "li ing-li":
			type = classInput.substring(3,6);
					updateState.updateAllData(name,type)
			break;

		case "li app-li":
			type = classInput.substring(3,6);
					updateState.updateAllData(name,type)
			break;

		case "li ust-li":
			type = classInput.substring(3,6);
					updateState.updateAllData(name,type)
			break;

		default:
			break;
	}
}

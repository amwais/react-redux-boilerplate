import { DEFAULT_TITLE } from '../constants';

const titleReducerDefaultState = {
	title: DEFAULT_TITLE
};
 
export default (state = titleReducerDefaultState, action) => {
	switch (action.type) {
	case 'SET_TITLE':
		return {
			...state,
			title: action.title
		};
	case 'RESET_TITLE':
		return {
			...state,
			title: DEFAULT_TITLE
		};
	default:
		return state;
	}
};
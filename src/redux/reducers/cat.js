import { FETCH_CATS, ADD_CAT, ERROR_CAT, DELETE_CAT } from "../types/cat";

const initialState = {
	cats: null,
	error: null,
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case FETCH_CATS:
			return {
				...state,
				cats: payload,
			};
		case ADD_CAT:
			state.cats.push(payload);
			return {
				...state,
				cats: state.cats,
			};
		case DELETE_CAT:
			return {
				...state,
				cats: state.cats.filter(cat => cat.id !== payload)
			}
		case ERROR_CAT:
			return {
				...state,
				error: payload,
			};
		default:
			return state;
	}
};

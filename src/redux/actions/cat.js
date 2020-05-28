import axios from "axios";
import { FETCH_CATS, ADD_CAT, ERROR_CAT } from "../types/cat";

export const fetchCats = () => async (dispatch) => {
	try {
		let response = await axios.get(`http://localhost:9120/cats`);

		dispatch({
			type: FETCH_CATS,
			payload: response.data,
		});
	} catch (err) {
		let error = err.response.data;

		dispatch({
			type: ERROR_CAT,
			payload: error,
		});
	}
};

export const addCats = (formData) => async (dispatch) => {
	try {
		const config = { headers: { "Content-Type": "application/json" } };

		let response = await axios.post(
			`http://localhost:9120/cats`,
			formData,
			config
		);

		dispatch({
			type: ADD_CAT,
			payload: response.data,
		});

		dispatch(fetchCats());
	} catch (err) {
		let error = err.response.data;

		dispatch({
			type: ERROR_CAT,
			payload: error,
		});
	}
};

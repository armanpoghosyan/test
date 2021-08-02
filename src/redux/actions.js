import {
	CATEGORIES_LOADING,
	RETRIEVE_CATEGORIES,
	RETRIEVE_IMAGES,
	IMAGES_LOADING,
	ERASE_IMAGES,
} from './constants';

const apiBase = 'https://api.thecatapi.com/v1';

export const getCategories = () => (dispatch) => {
	dispatch({ type: CATEGORIES_LOADING });
	fetch(`${apiBase}/categories`)
		.then((response) => response.json())
		.then((data) => {
			dispatch({ type: RETRIEVE_CATEGORIES, payload: data });
		});
};

export const getCategoryImages =
	(id, page, limit = 10) =>
	(dispatch) => {
		dispatch({ type: IMAGES_LOADING });
		fetch(
			`${apiBase}/images/search?limit=${limit}&page=${page}&category_ids=${id}`,
		)
			.then((resp) => resp.json())
			.then((data) => {
				dispatch({ type: RETRIEVE_IMAGES, payload: data });
			});
	};

export const removeImages = () => (dispatch) => {
	dispatch({ type: ERASE_IMAGES });
};

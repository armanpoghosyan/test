import {
	CATEGORIES_LOADING,
	RETRIEVE_CATEGORIES,
	RETRIEVE_IMAGES,
	IMAGES_LOADING,
	ERASE_IMAGES,
} from './constants';

const defaultState = {
	categories: {
		data: [],
		loading: false,
	},
	images: {
		data: [],
		loading: false,
	},
};

const categoryReducer = (state = defaultState, { type, payload }) => {
	switch (type) {
		case RETRIEVE_CATEGORIES: {
			return {
				...state,
				categories: {
					data: payload,
					loading: false,
				},
			};
		}
		case CATEGORIES_LOADING:
			return {
				...state,
				categories: {
					...state.categories,
					loading: true,
				},
			};
		case RETRIEVE_IMAGES: {
			return {
				...state,
				images: {
					...state.images,
					data: [
						...state.images.data,
						...payload.map(({ id, width, height, url }) => ({
							id,
							width,
							height,
							url,
						})),
					],
					loading: false,
				},
			};
		}
		case IMAGES_LOADING:
			return {
				...state,
				images: {
					...state.images,
					loading: true,
				},
			};
		case ERASE_IMAGES:
			return {
				...state,
				images: {
					data: [],
					loading: false,
				},
			};
		default:
			return state;
	}
};

export default categoryReducer;

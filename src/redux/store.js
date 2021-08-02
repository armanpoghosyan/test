import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import categoryReducer from './reducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

export default createStore(categoryReducer, composedEnhancer);

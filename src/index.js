import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import store from './redux/store';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);

serviceWorker.unregister();
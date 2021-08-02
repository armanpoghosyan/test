import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import MainLayout from './components/layouts/MianLayout';

const Router = () => {
	return (
		<MainLayout>
			<Switch>
				<Route exact path={['/', '/:id']} component={Home} />
				<Route path={'*'} component={NotFound} />
			</Switch>
		</MainLayout>
	);
};

export default Router;

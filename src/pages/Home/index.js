import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Content from '../../components/shared/Content';
import Navigation from '../../components/shared/Navigation';

const Home = () => {
	return (
		<section>
			<Navigation />
			<Switch>
				<Route path="/:id" children={<Content />} />
			</Switch>
		</section>
	);
};

export default Home;

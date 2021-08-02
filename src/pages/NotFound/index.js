import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const NotFound = () => {
	return (
		<div className={styles.notFounnd}>
			Not Found&nbsp;
			<Link to="/">Home</Link>
		</div>
	);
};

export default NotFound;

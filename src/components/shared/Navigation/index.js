import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getCategories } from './../../../redux/actions';
import CategoriesList from '../CategoriesList';
import styles from './index.module.scss';

const Navigation = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);

	const { data, loading } = useSelector(
		(state) => state.categories,
		shallowEqual,
	);

	return (
		<div className={styles.navigation}>
			{loading ? 'Loading...' : <CategoriesList items={data} />}
		</div>
	);
};

export default Navigation;

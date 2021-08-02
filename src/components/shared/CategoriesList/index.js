import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeImages } from '../../../redux/actions';
import styles from './index.module.scss';

const CategoriesList = ({ items }) => {
	const dispatch = useDispatch();

	return (
		<ul className={styles.categoriesList}>
			{items.map((item, key) => (
				<li key={`${key}_${item.id}`}>
					<NavLink
						activeClassName={styles.active}
						onClick={() => dispatch(removeImages())}
						to={`/${item.id}`}
					>
						{item.name}
					</NavLink>
				</li>
			))}
		</ul>
	);
};

export default CategoriesList;

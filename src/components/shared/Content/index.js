import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCategoryImages } from '../../../redux/actions';
import styles from './index.module.scss';
import ImagesList from '../ImagesList';

const Content = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const [page, setPage] = useState(1);
	const { loading, data } = useSelector((state) => state.images, shallowEqual);

	useEffect(() => {
		dispatch(getCategoryImages(id, page));
	}, [dispatch, id, page]);

	return (
		<div className={styles.content}>
			<ImagesList items={data} />

			<button
				disabled={loading ?? 'disabled'}
				onClick={() => setPage(page + 1)}
			>
				{loading ? 'Loading...' : 'Load More'}
			</button>
		</div>
	);
};

export default Content;

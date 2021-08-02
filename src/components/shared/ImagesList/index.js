import React from 'react';
import styles from './index.module.scss';

const ImagesList = ({ items }) => {
	return (
		<div className={styles.imagesList}>
			{items.map((item, key) => (
				<img src={item.url} width={200} height={200} alt="" />
			))}
		</div>
	);
};

export default ImagesList;

import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './index.module.scss';

const MainLayout = ({ children }) => {
	return (
		<>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</>
	);
};

export default MainLayout;

import React from 'react';

// Components
import NavBar from './NavBar';
import Banner from './Banner';
import Card from './Cards';

// styles
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <Banner />
            <Card />
        </div>
    );
};

export default Home;
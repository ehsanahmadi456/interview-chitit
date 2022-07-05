import React from 'react';

// Components
import NavBar from './NavBar';
import Banner from './Banner';
import Card from './Cards';
import OptionKarjo from './OptionKarjo';

// styles
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <Banner />
            <Card />
            <OptionKarjo />
        </div>
    );
};

export default Home;
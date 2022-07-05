import React from 'react';

// Components
import NavBar from './NavBar';
import Banner from './Banner';
import Cards from './Cards';
import OptionKarjo from './OptionKarjo';
import Footer from './Footer';
import MainAdver from './MainAdver';

// styles
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <Banner />
            <Cards />
            <MainAdver />
            <OptionKarjo />
            <Footer />
        </div>
    );
};

export default Home;
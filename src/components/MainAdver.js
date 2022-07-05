import React from 'react';

// image
import setAdver from "../assets/image/setAdver.png";
import countAdver from "../assets/image/countAdver.png";

import styles from "./MainAdver.module.css";

const MainAdver = () => {
    return (
        <div className={styles.container}>
            <p>بخش های ثبت آگهی چیتیت بر اساس نیاز های کارجویان</p>
            <img src={setAdver} alt="setAdver" />
            <img src={countAdver} alt="countAdver" />
        </div>
    );
};

export default MainAdver;
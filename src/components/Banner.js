import React from 'react';

// styles
import styles from "./Banner.module.css";

// Imgae
import imageSupport from "../assets/image/imageSupport.png";
import karjoHeadRed from "../assets/image/karjoHeadRed.png";
import imageUserLeft from "../assets/image/imageUserLeft.png";
import supportOne from "../assets/image/supportOne.png";
import supportTwo from "../assets/image/supportTwo.png";
import karjoHeadGreen from "../assets/image/karjoHeadGreen.png";
import imageUserRight from "../assets/image/imageUserRight.png";

const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <p className={styles.headerBanner}>ثبت آگهی کارجو</p>
                <div className={styles.bannerLeft}>
                    <img className={styles.karjoRed} src={karjoHeadRed} alt="" />
                    <img className={styles.imageUser} src={imageUserLeft} alt="" />
                    <button>ثبت آگهی ویژه</button>
                </div>
                <div className={styles.bannerCenter}>
                    <img src={supportOne} alt="supportOne" />
                    <img src={imageSupport} alt="imageSupport" />
                    <img src={supportTwo} alt="supportTwo" />
                </div>
                <div className={styles.bannerRight}>
                    <img className={styles.karjoGreen} src={karjoHeadGreen} alt="" />
                    <img className={styles.imageUser} src={imageUserRight} alt="" />
                    <button>ثبت آگهی معمولی</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
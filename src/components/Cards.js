import React from 'react';

// styles
import styles from "./Cards.module.css";

// image
import showCard from "../assets/image/showCard.png";

// icon
import trueIcon from "../assets/icon/trueIcon.svg";
import falseIcon from "../assets/icon/falseIcon.svg";

const Cards = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p>کارجوی ساده هستی یا متخصص؟</p>
            </div>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <img className={styles.showImg} src={showCard} alt="showCard" />
                    <div className={styles.titleCard}>
                        <p className={styles.headTitle}>نیروی کار متخصص</p>
                        <span> <p className={styles.noneTitle}>تومان</p><p className={styles.moneyTitle}>۲۰</p></span>
                        <p className={styles.captionTitle}>کدت اعتبار یک ماه</p>
                    </div>
                    <div className={styles.main}>
                        <ul>
                            <li><p>امکان معرفی به صورت کامل</p> <img src={trueIcon} alt="trueIcon" /></li>
                            <li><p>امکان معرفی به صورت کامل</p> <img src={trueIcon} alt="trueIcon" /></li>
                            <li><p>امکان معرفی به صورت کامل</p> <img src={trueIcon} alt="trueIcon" /></li>
                            <li><p>امکان معرفی به صورت کامل</p> <img src={trueIcon} alt="trueIcon" /></li>
                            <li><p>امکان معرفی به صورت کامل</p> <img src={trueIcon} alt="trueIcon" /></li>
                            <li><p>امکان معرفی به صورت کامل</p> <img src={trueIcon} alt="trueIcon" /></li>
                            <li><p>امکان معرفی به صورت کامل</p> <img src={trueIcon} alt="trueIcon" /></li>
                            <li><p>امکان معرفی به صورت کامل</p> <img src={trueIcon} alt="trueIcon" /></li>
                            <li><p>امکان معرفی به صورت کامل</p> <img src={trueIcon} alt="trueIcon" /></li>
                            <li><p>امکان معرفی به صورت کامل</p> <img src={trueIcon} alt="trueIcon" /></li>
                        </ul>
                        <button>ثبت آگهی ویژه</button>
                    </div>
                </div>
                <div className={styles.cards}>
                    <img className={styles.showImg} src={showCard} alt="showCard" />
                    <div className={styles.titleCard}>
                        <p className={styles.headTitle}>نیروی کار معمولی</p>
                        <p className={styles.boldTitle}>رایگان</p>
                        <p className={styles.captionTitle}>کدت اعتبار یک ماه</p>
                    </div>
                    <div className={styles.main}>
                        <ul>
                            <li><p>امکان معرفی به صورت کامل</p> <img src={trueIcon} alt="trueIcon" /></li>
                            <li><p>امکان معرفی به صورت کامل</p> <img src={trueIcon} alt="trueIcon" /></li>
                            <li><p>امکان معرفی به صورت کامل</p> <img src={trueIcon} alt="trueIcon" /></li>
                            <li><p>امکان معرفی به صورت کامل</p> <img src={trueIcon} alt="trueIcon" /></li>
                            <li><p>امکان معرفی به صورت کامل</p> <img src={trueIcon} alt="trueIcon" /></li>
                            <li><p>امکان معرفی به صورت کامل</p> <img src={trueIcon} alt="trueIcon" /></li>
                            <li><p>امکان معرفی به صورت کامل</p> <img src={trueIcon} alt="trueIcon" /></li>
                            <li><p>امکان معرفی به صورت کامل</p> <img src={falseIcon} alt="trueIcon" /></li>
                            <li><p>امکان معرفی به صورت کامل</p> <img src={falseIcon} alt="trueIcon" /></li>
                            <li><p>امکان معرفی به صورت کامل</p> <img src={falseIcon} alt="trueIcon" /></li>
                        </ul>
                        <button>ثبت آگهی معمولی</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
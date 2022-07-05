import React from 'react';

// styles
import styles from "./Footer.module.css";

// image
import imageFooterBuilding from "../assets/image/imageFooterBuilding.png";
import imageFooterWave from "../assets/image/imageFooterWave.png";

// icon
import namadFooter from "../assets/icon/namadFooter.svg";
import downloadFooter from "../assets/icon/downloadFooter.svg";

const Footer = () => {
    return (
        <div className={styles.container}>
            <img className={styles.imageFooterBuilding} src={imageFooterBuilding} alt="imageFooterBuilding" />
            <img className={styles.imageFooterWave} src={imageFooterWave} alt="imageFooterWave" />
            <div className={styles.footer}>
                <div className={styles.left}>
                    <img className={styles.namadFooter} src={namadFooter} alt="namadFooter" />
                    <img className={styles.namadFooter} src={namadFooter} alt="namadFooter" />
                    <img className={styles.namadFooter} src={namadFooter} alt="namadFooter" />
                    <div className={styles.buttonFooter}>
                        <button>شبکه های اجتماعی</button>
                        <button>دانلود اپلیکیشن</button>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.aboutFooter}>
                        <p className={styles.headFooter}>خدمات</p>
                        <ul>
                            <li>دانستنی های استخدام</li>
                            <li>آزمون ها خودشن</li>
                        </ul>
                    </div>
                    <div className={styles.aboutFooter}>
                        <p className={styles.headFooter}>کارفرمایان</p>
                        <ul>
                            <li>ثبت آگهی شغلی</li>
                            <li>ثبت سازمان بعنوان شرکت معتبر</li>
                            <li>جست و جو بین افراد جویای کار</li>
                        </ul>
                    </div>
                    <div className={styles.aboutFooter}>
                        <p className={styles.headFooter}>کارجویان</p>
                        <ul>
                            <li>ثبت آگهی</li>
                            <li>کار در منزل (دورکاری)</li>
                            <li>ساخت رزومه حرفه ای رایگان</li>
                            <li>جستجو فرصت های شغلی</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';

// styles
import styles from "./NavBar.module.css";

// Icon
import login from "../assets/icon/login.svg";
import download from "../assets/icon/download.svg";
import plus from "../assets/icon/plus.svg";
import arrowBottom from "../assets/icon/arrowBottom.svg";

const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navbarLeft}>
                <button><p>ورود/ثبت نام</p> <img src={login} alt="login icon" /></button>
            </div>
            <div className={styles.navbarRight}>
                <ul>
                    <li className={styles.hoverEffectItem}><button>آگهی بزن </button><img src={plus} alt="plus" /></li>
                    <li><p>دانلود اپلیکیشن </p><img src={download} alt="download" /></li>
                    <li><p>دانستنی های استخدامی</p></li>
                    <li><p>کار در منزل</p></li>
                    <li> <img src={arrowBottom} alt="arrowBottom" /><p>کار فرمایان</p></li>
                    <li> <img src={arrowBottom} alt="arrowBottom" /><p>کار جویان</p></li>
                    <li><p>لیست آگهی ها</p></li>
                    <li><p>صفحه نخست</p></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
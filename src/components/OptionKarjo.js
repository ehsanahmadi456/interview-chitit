import React from 'react';

// styles
import styles from "./OptionKarjo.module.css";

// image
import optionKarjo from "../assets/image/optionKarjo.png";
import wayAdver from "../assets/image/wayAdver.png";
import imageExperience from "../assets/image/imageExperience.png";

const OptionKarjo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageKarjoValue}>
                <img src={optionKarjo} alt="optionKarjo" />
            </div>
            <div className={styles.imageWayAdver}>
                <img src={wayAdver} alt="wayAdver" />
            </div>
            <div className={styles.imageExperience}>
                <img src={imageExperience} alt="imageExperience" />
            </div>
        </div>
    );
};

export default OptionKarjo;
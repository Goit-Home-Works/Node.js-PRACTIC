import PropTypes from 'prop-types';

import Logo from "../../../shared/components/Logo";
import Image from "next/image";

import styles from "./FooterInfo.module.scss";

const FooterInfo = ({ schedule }) => {

    const { workDays, weekend } = schedule;

    return (
        <div className={styles["info"]}>
            <div>
                <Logo type="light" />
                <div className={styles["schedule"]}>
                    <p className={styles["text"]}>{workDays} 9:00-20:00</p>
                    <p className={styles["text"]}>{weekend} 9:00-18:00</p>
                </div>
            </div>
            <div className={styles["socials"]}>
                <a href="https://www.instagram.com/gotovo.ua/" target="_blank" className={styles["socials-item"]}>
                    <Image src="/img/instagram.png" alt="ig" width="14" height="14" />
                </a>
                <a href="https://www.facebook.com/gotovo.ua/" target="_blank" className={styles["socials-item"]}>
                    <Image src="/img/facebook.png" alt="ig" width="16" height="16" />
                </a>
            </div>
        </div>
    )
};

FooterInfo.propTypes = {
    schedule: PropTypes.object
}

export default FooterInfo;
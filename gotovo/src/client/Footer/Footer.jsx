import {useTranslation} from "next-i18next";

import Image from "next/image";

import Container from "../../shared/components/Container";
import FooterInfo from "./FooterInfo";
import FooterMenu from "./FooterMenu";

import styles from "./Footer.module.scss";

const Footer = () => {

    const {t} = useTranslation('footer');
    const menu = t('menu', {returnObjects: true});
    const schedule = t("schedule", {returnObjects: true});

    return (
        <footer className={styles["footer"]}>
            <div className={`${styles["ornament"]} ${styles._left}`}>
                <Image src="/img/ornament-full.png" alt="#" width="152" height="136" />
                <Image src="/img/ornament-full.png" alt="#" width="152" height="136" />
                <Image src="/img/ornament-full.png" alt="#" width="152" height="136" />
            </div>

            <Container className={styles["content"]}>
                <FooterInfo schedule={schedule} />
                <FooterMenu menu={menu} />
            </Container>

            <div className={`${styles["ornament"]} ${styles._right}`}>
                <Image src="/img/ornament-full.png" alt="#" width="152" height="136" />
                <Image src="/img/ornament-full.png" alt="#" width="152" height="136" />
                <Image src="/img/ornament-full.png" alt="#" width="152" height="136" />
            </div>
        </footer>
    );
};

export default Footer;
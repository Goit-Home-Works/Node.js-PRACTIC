import {useTranslation} from "next-i18next";

import Container from "../../shared/components/Container";
import Article from "../../shared/components/Article";
import Ornament from "../../shared/components/Ornament";
import Image from 'next/image';

import styles from "./OurTarget.module.scss";

const OurTarget = () => {

    const { t } = useTranslation("our-target");
    const article = t('article', {returnObjects: true});

    return (
        <section className={styles["our-target"]}>
            <div className={styles["content"]}>
                <Ornament className={styles["ornament"]} img="/img/ornament.svg" side="left" />
                <Container>
                    <Article className={styles["article"]} title={t("title")} article={article} />
                </Container>
            </div>
            <div className={styles["map"]}>
                <div className={styles["map-text"]}>
                    <span className={styles["map-text-bold"]}>1</span>
                    <span className={styles["map-text-thin"]}>{t("center")}</span>
                    <span className={`${styles["map-text-bold"]} ${styles["slash"]}`}>/</span>
                    <span className={styles["map-text-thin"]}></span>
                    <span className={styles["map-text-bold"]}>128,650,000</span>
                    <span className={styles["map-text-thin"]}>{t("visitors")}</span>
                </div>
                <Image src="/img/Map.png" width={638} height={408} alt="Map" />
            </div>
        </section>
    )
};

export default OurTarget;
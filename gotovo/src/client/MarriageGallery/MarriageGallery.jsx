import {useTranslation} from "next-i18next";

import Container from "../../shared/components/Container";
import Title from "../../shared/components/Title";

import styles from "./MarriageGallery.module.scss";

const MarriageGallery = () => {

    const { t } = useTranslation("marriage-gallery");

    return (
        <section className={styles["gallery"]}>
            <Container>
                <Title text={t("title")} />
                <div className={styles["content"]}>
                    <div className={`${styles["item"]} ${styles["_1"]}`}></div>
                    <div className={`${styles["item"]} ${styles["_2"]}`}></div>
                    <div className={`${styles["item"]} ${styles["_3"]}`}></div>
                    <div className={`${styles["item"]} ${styles["_4"]}`}></div>
                    <div className={`${styles["item"]} ${styles["_5"]}`}></div>
                    <div className={`${styles["item"]} ${styles["_6"]}`}></div>
                </div>
            </Container>
        </section>
    )
};

export default MarriageGallery;
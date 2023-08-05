import {useTranslation} from "next-i18next";

import Container from "../../shared/components/Container";
import Title from "../../shared/components/Title";

import styles from "./WriteAboutUs.module.scss";

const WriteAboutUs = () => {

    const { t } = useTranslation("write-about-us");

    return (
        <section className={styles["section"]}>
            <Container>
                <Title text={t("title")} />
                <div className={styles["content"]}>
                    <div className={`${styles["item"]} ${styles["_ictv"]}`}>
                        <img className={styles["img"]} src="../img/write-about-us/ictv.png" alt="partner-logo" />
                    </div>
                    <div className={`${styles["item"]} ${styles["_tsn"]}`}>
                        <img className={styles["img"]} src="../img/write-about-us/tsn.png" alt="partner-logo" />
                    </div>
                    <div className={`${styles["item"]} ${styles["_trk"]}`}>
                        <img className={styles["img"]} src="../img/write-about-us/trk_ukraine.png" alt="partner-logo" />
                    </div>
                    <div className={`${styles["item"]} ${styles["_cor"]}`}>
                        <img className={styles["img"]} src="../img/write-about-us/correspondent.png" alt="partner-logo" />
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default WriteAboutUs;
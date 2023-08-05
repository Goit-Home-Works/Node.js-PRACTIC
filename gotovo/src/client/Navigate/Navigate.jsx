import {useTranslation} from "next-i18next";

import Container from "../../shared/components/Container";
import Ornament from "../../shared/components/Ornament";
import Article from "../../shared/components/Article";
import Button from "../../shared/components/Button";

import styles from "./Navigate.module.scss";

const Navigate = () => {

    const { t } = useTranslation("navigate");
    const article = t('article', {returnObjects: true});

    return (
        <section className={styles["navigate"]}>
            <div className={styles["content"]}>
                <Ornament className={styles["ornament"]} img="/img/ornament.svg" side="left" />
                <Ornament className={styles["ornament"]} img="/img/ornament.svg" side="right" />
                <Container className={styles["container"]}>
                    <Article className={styles["article"]} title={t("heading")} article={article} />
                    <Button className={styles["btn"]} href={t("href")} text={t("btn")} size="long" />
                </Container>
            </div>
        </section>
    )
};

export default Navigate;
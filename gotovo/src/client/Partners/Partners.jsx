import {useTranslation} from "next-i18next";

import Container from "../../shared/components/Container";
import Title from "../../shared/components/Title";

import styles from "./Partners.module.scss";

const Partners = () => {
    const { t } = useTranslation("partners");

    const partnersItems = t('list', {returnObjects: true});

    const partnersElements = partnersItems.map(({ id, img }) => {
        return (
            <div key={id} className={styles["item"]}>
                <img className={styles["img"]} src={img} alt="partner-logo" />
            </div>
        )
    });

    return (
        <section className={styles["partners"]}>
            <Container>
                <Title text={t("title")} />
                <div className={styles["content"]}>
                    <div className={styles["list"]}>
                        {partnersElements}
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Partners;
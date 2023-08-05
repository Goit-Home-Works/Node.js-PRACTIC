import {useTranslation} from "next-i18next";

import Container from "../../shared/components/Container";
import Title from "../../shared/components/Title";
import MarriageCostItem from "./MarriageCostItem";

import styles from "./MarriageCost.module.scss";

const MarriageCost = () => {
    
    const { t } = useTranslation("marriage-cost");
    const costItems = t('list', {returnObjects: true});

    const costElements = costItems.map(({ id, ...props }) => {
        return <MarriageCostItem key={id} {...props} openBtnText={t("openBtn")} closeBtnText={t("closeBtn")} />
    });

    return (
        <section className={styles["section"]}>
            <Container>
                <Title text={t("title")} />
                <div className={styles["list"]}>
                    {costElements}
                </div>
            </Container>
        </section>
    )
};

export default MarriageCost;
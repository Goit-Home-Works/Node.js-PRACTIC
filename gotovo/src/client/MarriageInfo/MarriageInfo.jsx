import {useTranslation} from "next-i18next";

import Container from "../../shared/components/Container";
import MarriageInfoItem from "./MarriageInfoItem";

import styles from "./MarriageInfo.module.scss";

const MarriageInfo = () => {

    const { t } = useTranslation("marriage-info");
    const itemsList = t("list", {returnObjects: true});

    const elementsList = itemsList.map(({ id, ...props }) => {
        return <MarriageInfoItem key={id} {...props} />
    })

    return (
        <section className={styles["section"]}>
            <Container className={styles["container"]}>
                {elementsList}
            </Container>
        </section>
    )
};

export default MarriageInfo;
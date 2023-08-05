import {useTranslation} from "next-i18next";
import { useState } from "react";

import Container from "../../shared/components/Container";
import Title from "../../shared/components/Title";

import styles from "./MarriageDocuments.module.scss";

const MarriageDocuments = () => {

    const [activeTab, setActiveTab] = useState(0);

    const { t } = useTranslation("marriage-documents");
    const tabItems = t("tabs", {returnObjects: true});

    const tabHeading = tabItems.map(({ id, title }, index) => {
        const fullClassName = `${styles["tab"]} ${(activeTab === index) ? styles["selected"] : ''}`;
        return <li key={id} className={fullClassName} onClick={() => setActiveTab(index)}>{title}</li>
    });

    const tabElements = tabItems.map(({ id, content }, index) => {

        const tabList = content.map(({ id, text, type = null }) => {
            const elClassName = type ? styles["item"] : styles["list-item"];
            return <li key={id} className={elClassName}>{text}</li>
        });

        const fullClassName = `${styles["tab-content"]} ${(activeTab === index) ? styles["selected"] : ''}`;
        return (
            <ul key={id} className={fullClassName}>
                {tabList}
            </ul>
        )
    });

    return (
        <section className={styles["section"]}>
            <Container>
                <Title text={t("title")} />
                <div className={styles["content"]}>
                    <ol className={styles["tabs"]}>
                        {tabHeading}
                    </ol>
                    {tabElements}
                </div>
            </Container>
        </section>
    )
};

export default MarriageDocuments;
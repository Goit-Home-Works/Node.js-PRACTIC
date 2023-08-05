import {useTranslation} from "next-i18next";

import { useState } from "react";

import Container from "../../shared/components/Container";
import Title from "../../shared/components/Title";
import Dropdown from "../../shared/components/Dropdown";

import styles from "./MarriageQuestions.module.scss";

const MarriageQuestions = () => {

    const [openMenuIdx, setOpenMenuIdx] = useState(false);

    const { t } = useTranslation("marriage-questions");
    const dropdownItems = t('dropdown', {returnObjects: true});

    const toggle = (idx) => {
        setOpenMenuIdx(prevState => {
            return (prevState === idx) ? false : idx;
        });
    };

    const dropdownElements = dropdownItems.map(({ id, ...props }, index) => {
        return (
            <Dropdown key={id} {...props} openMenuIdx={openMenuIdx} toggle={toggle} index={index}/>
        )
    });
    
    return (
        <section className={styles["section"]}>
            <Container>
                <Title text={t("title")} />
                {dropdownElements}
            </Container>
        </section>
    )
};

export default MarriageQuestions;
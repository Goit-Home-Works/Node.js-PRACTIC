import {useTranslation} from "next-i18next";

import Header from "../../shared/components/Header";
import Button from "../../shared/components/Button";
import ContactsItem from "../../shared/components/ContactsItem";

import styles from "./MarriageHeader.module.scss";

const MarriageHeader = () => {
    const { t } = useTranslation("marriage-header");
    return (
        <Header title={t("title")} text={t("text")} img='/img/marriage-header.png' mobImg='/img/marriage-header-mob.png' >
            <div className={styles["content"]}>
                <Button href="http://dpdoc.cherg.net/?type=gotovo" text={t("btn")} target="_blank" size="long" shadow />
                <ContactsItem img="/img/Contacts/item-4.png" name={t("tel-name")} href="tel:0800300803" text={t("tel-text")} />
            </div>
        </Header>
    )
};

export default MarriageHeader;
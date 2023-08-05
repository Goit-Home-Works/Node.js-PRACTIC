import {useTranslation} from "next-i18next";

import Header from "../../shared/components/Header";
import Button from "../../shared/components/Button";

import styles from "./MainHeader.module.scss";

const MainHeader = () => {
    const { t } = useTranslation("header");
    return (
        <Header title={t("title")} text={t("subtitle")} img='/img/passport.png' mobImg='/img/passport-mob.png' >
            <div className={styles["content"]}>
                <Button href="#services" text={t("service-btn-text")} shadow />
                <Button href="#contacts" text={t("contacts-btn-text")} color="light" shadow />
            </div>
        </Header>
    )
};

export default MainHeader;
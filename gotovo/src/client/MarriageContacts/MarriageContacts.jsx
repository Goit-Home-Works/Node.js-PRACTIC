import {useTranslation} from "next-i18next";

import Container from "../../shared/components/Container";
import Title from "../../shared/components/Title";
import Button from "../../shared/components/Button";
import ContactsItem from "../../shared/components/ContactsItem";

import styles from "./MarriageContacts.module.scss";

const MarriageContacts = () => {

    const { t } = useTranslation("marriage-contacts");

    console.log(styles["schedule"]);

    return (
        <section className={styles["section"]}>
            <Container className={styles["container"]}>

                <div className={styles["form"]}>
                    <Title className={styles["label"]} text={t("label")} />
                    <input placeholder={t("input-name")} type="text" className={styles["input"]} />
                    <input placeholder={t("input-email")} type="text" className={styles["input"]} />
                    <input placeholder={t("input-tel")} type="text" className={styles["input"]} />
                    <textarea placeholder={t("input-text")} name="" id="" cols="30" rows="10" className={styles["input"]} />
                    <Button className={styles["btn"]} href="#" text={t("btn")} />
                </div>

                <div>
                    <div className={styles["contacts-items"]}>
                        <ContactsItem
                            className={styles["contacts-item"]}
                            name={t("tel-name")}
                            text={t("tel-text")}
                            href="tel:0800300803"
                            img="/img/Contacts/item-4.png"
                        />

                        <ContactsItem
                            className={styles["contacts-item"]}
                            name={t("schedule-name")}
                            textClassName={styles["schedule"]}
                            img="/img/Contacts/item-5.png">
                                <span>{t("schedule-text-1")}</span>
                                <span>{t("schedule-text-2")}</span>
                                <span>{t("schedule-text-3")}</span>
                                <span>{t("schedule-text-4")}</span>
                        </ContactsItem>

                        <ContactsItem
                            className={styles["contacts-item"]}
                            name={t("address-name")}
                            text={t("address-text")}
                            img="/img/Contacts/item-1.png"
                        />
                    </div>
                    
                    <iframe className={styles["map"]} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.6669450101253!2d30.538946315696933!3d50.42867667947236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0e86f9427f%3A0x2470d8a05ef3d8eb!2z0YPQuy4g0JrRg9GC0YPQt9C-0LLQsCwgMTEsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1620860107854!5m2!1sru!2sua" allowFullScreen="" loading="lazy" />
                </div>

            </Container>
        </section>
    )
};

export default MarriageContacts;
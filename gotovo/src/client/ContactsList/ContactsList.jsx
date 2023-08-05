import {useTranslation} from "next-i18next";

import Container from "../../shared/components/Container";
import Title from "../../shared/components/Title";
import ContactsItem from "../../shared/components/ContactsItem";

import styles from "./ContactsList.module.scss";

const ContactsList = () => {
    const { t } = useTranslation("contacts");

    const contactsItems = t('list', {returnObjects: true});

    const contactsElements = contactsItems.map(({ id, ...props }) => {
        return <ContactsItem key={id} {...props} />
    });

    return (
        <section className={styles["contacts"]}>
            <Container>
                <Title className={styles["title"]} text={t("heading-2")} />
                <div className={styles["content"]}>
                    {contactsElements}
                </div>
            </Container>
            <img className={styles["img"]} src="/img/square.png" alt="Square" />
        </section>
    )
};

export default ContactsList;
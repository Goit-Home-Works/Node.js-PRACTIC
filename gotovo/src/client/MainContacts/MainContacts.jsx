import {useTranslation} from "next-i18next";

import Container from "../../shared/components/Container";
import Title from "../../shared/components/Title";
import ContactsItem from "../../shared/components/ContactsItem";

import styles from "./MainContacts.module.scss";

const MainContacts = () => {
    const { t } = useTranslation("contacts");

    const contactsItems = t('list', {returnObjects: true});

    const contactsElements = contactsItems.map(({ id, name, text, href, img }) => {
        return (
            <ContactsItem key={id} name={name} text={text} href={href} img={img} />
        )
    });

    return (
        <section id="contacts" className={styles["contacts"]}>
            <Container>
                <Title className={styles["heading"]} text={t("heading-1")} />
                <div className={styles["list"]}>
                    {contactsElements}
                </div>
            </Container>
            <img className={styles["img"]} src="/img/contacts.png" alt="Консультант" />
        </section>
    )
};

export default MainContacts;
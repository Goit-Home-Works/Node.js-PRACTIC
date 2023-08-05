import {useTranslation} from "next-i18next";

import Container from "../../shared/components/Container";
import Title from "../../shared/components/Title";
import ServicesList from "../../shared/components/ServicesList";

import styles from "./Services.module.scss";

const Services = () => {
    const { t } = useTranslation("services");
    return (
        <section id="services" className={styles["services"]}>
            <Container>
                <Title text={t("title")} />
                <ServicesList />
            </Container>
        </section>
    )
};

export default Services;
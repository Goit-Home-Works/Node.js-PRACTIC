import {useTranslation} from "next-i18next";

import ServicesItem from "./ServicesItem";

import styles from "./ServicesList.module.scss";

const ServicesList = () => {
    const { t } = useTranslation("services-list");
    const servicesItems = t('services-items', {returnObjects: true});

    const servicesElements = servicesItems.map(({ id, img, href, target, text }) => {
        return (
            <ServicesItem key={id} img={img} href={href} target={target} text={text} btnText={t("btn")} />
        )
    });
    
    return (
        <div className={styles["list"]}>
            {servicesElements}
        </div>
    )
};

export default ServicesList;
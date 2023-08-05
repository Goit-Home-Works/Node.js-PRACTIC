import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

import { useState } from "react";

import Layout from "../../src/shared/components/Layout";
import ServicePage from "../../src/client/ServicePage";
import Dropdown from "../../src/shared/components/Dropdown";

const ServicesPage = () => {

    const { t } = useTranslation("insurance");
    const dropdownItems = t('dropdown', {returnObjects: true});

    const [openMenuIdx, setOpenMenuIdx] = useState(false);

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
        <Layout fileName="insurance-page">
            <ServicePage img="/img/Services/icon-2.png" title={t("title")} btnText={t("btn")} >
                {dropdownElements}
            </ServicePage>
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["navbar", "insurance", "footer", "main", "insurance-page"])),
    },
});

export default ServicesPage;
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

import Layout from "../../src/shared/components/Layout";
import ServicePage from "../../src/client/ServicePage";
import ServiceArticle from "../../src/shared/components/ServiceArticle";

const ServicesPage = () => {

    const { t } = useTranslation("apostillization");
    const content = t("content", {returnObjects: true});

    return (
        <Layout fileName="apostillization-page">
            <ServicePage img="/img/Services/icon-4.png" title={t("title")} btnText={t("btn")} >
                <ServiceArticle content={content} />
            </ServicePage>
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["navbar", "apostillization", "footer", "main", "apostillization-page"])),
    },
});

export default ServicesPage;
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

import Layout from "../../src/shared/components/Layout";
import ServicePage from "../../src/client/ServicePage";
import ServiceArticle from "../../src/shared/components/ServiceArticle";

const ServicesPage = () => {

    const { t } = useTranslation("marriage-application");
    const content = t("content", {returnObjects: true});

    return (
        <Layout fileName="marriage-application-page">
            <ServicePage img="/img/Services/icon-1.png" title={t("title")} btnText={t("btn")} >
                <ServiceArticle content={content} />
            </ServicePage>
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["navbar", "marriage-application", "footer", "main", "marriage-application-page"])),
    },
});

export default ServicesPage;
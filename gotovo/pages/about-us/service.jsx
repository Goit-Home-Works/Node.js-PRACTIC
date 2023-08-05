import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

import Layout from "../../src/shared/components/Layout";
import About from "../../src/client/About";

const AboutPage = () => {

    const { t } = useTranslation("about-service");
    const article = t("article", {returnObjects: true});

    return (
        <Layout fileName="about-service-page">
            <About title={t("title")} article={article} img="/img/About-us/about-service.png" />
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["navbar", "footer", "about-service", "main", "about-service-page"])),
    },
});

export default AboutPage;
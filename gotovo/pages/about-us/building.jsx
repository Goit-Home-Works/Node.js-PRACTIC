import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

import Layout from "../../src/shared/components/Layout";
import About from "../../src/client/About";

const AboutPage = () => {

    const { t } = useTranslation("about-building");
    const article = t("article", {returnObjects: true});

    return (
        <Layout fileName="building-page">
            <About title={t("title")} article={article} img="/img/About-us/about-building.png" />
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["navbar", "footer", "about-building", "main", "building-page"])),
    },
});

export default AboutPage;
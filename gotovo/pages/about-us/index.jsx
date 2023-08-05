import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

import Layout from "../../src/shared/components/Layout";
import About from "../../src/client/About";

const AboutPage = () => {

    const { t } = useTranslation("about-us");
    const article = t("article", {returnObjects: true});

    return (
        <Layout fileName="about-us-page">
            <About title={t("title")} article={article} img="/img/About-us/img-1.jpg" />
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["navbar", "footer", "about-us", "main", "about-us-page"])),
    },
});

export default AboutPage;
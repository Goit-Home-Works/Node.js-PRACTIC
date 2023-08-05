import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

import Layout from "../../src/shared/components/Layout";
import About from "../../src/client/About";

const AboutPage = () => {

    const { t } = useTranslation("about-idea");
    const article = t("article", {returnObjects: true});

    return (
        <Layout fileName="idea-page">
            <About title={t("title")} article={article} img="/img/About-us/about-idea.png" />
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["navbar", "footer", "about-idea", "main", "idea-page"])),
    },
});

export default AboutPage;
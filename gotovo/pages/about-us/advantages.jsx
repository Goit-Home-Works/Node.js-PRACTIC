import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

import Layout from "../../src/shared/components/Layout";
import About from "../../src/client/About";

const AboutPage = () => {

    const { t } = useTranslation("advantages");
    const article = t("article", {returnObjects: true});

    return (
        <Layout fileName="advantages-page">
            <About title={t("title")} article={article} img="/img/About-us/about-advantages.jpg" />
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["navbar", "advantages", "footer", "main", "advantages-page"])),
    },
});

export default AboutPage;
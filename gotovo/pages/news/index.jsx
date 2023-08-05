import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import Layout from "../../src/shared/components/Layout";
import Blog from "../../src/client/Blog";

const News = () => {
    return (
        <Layout fileName="blog-page">
            <Blog />
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['navbar', 'blog', 'blog-page', 'footer', 'main', 'branded-product-page']),
    },
})

export default News;
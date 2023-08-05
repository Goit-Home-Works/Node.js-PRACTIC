import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import Layout from "../../src/shared/components/Layout";
import BlogPage from "../../src/client/Blog/BlogPage";

const NewsPage = () => {
    return (
        <Layout fileName="blog-page">
            <BlogPage pageNumber="11" />
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['navbar', 'blog', 'blog-page', 'footer', 'main', 'branded-product-page']),
    },
})

export default NewsPage;
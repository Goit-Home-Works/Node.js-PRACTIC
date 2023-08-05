import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import Layout from "../../src/shared/components/Layout";
import Product from "../../src/client/Product";

const ProductPage = () => {
    return (
        <Layout fileName="branded-product-page">
            <Product page='3'/>
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['navbar', 'product-list', 'footer', 'main', 'branded-product-page']),
    },
})

export default ProductPage;
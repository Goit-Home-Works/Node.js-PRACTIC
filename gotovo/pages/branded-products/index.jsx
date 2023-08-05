import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import Layout from "../../src/shared/components/Layout";
import ProductsList from "../../src/client/ProductsList";

const BrandedProducts = () => {
    return (
        <Layout fileName="branded-product-page">
            <ProductsList />
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['navbar', 'branded-product', 'footer', 'main', 'branded-product-page']),
    },
})

export default BrandedProducts;
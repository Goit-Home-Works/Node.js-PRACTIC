import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../../src/shared/components/Layout";
import Services from "../../src/client/Services";

const ServicesPage = () => {
  return (
    <Layout fileName="services-page">
        <Services />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["navbar", "footer", "services", 'services-list', "main", "services-page"])),
    },
});

export default ServicesPage;
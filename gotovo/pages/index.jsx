import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from "../src/shared/components/Layout";
import MainHeader from "../src/client/MainHeader";
import OurTarget from "../src/client/OurTarget";
import Services from "../src/client/Services";
import Navigate from "../src/client/Navigate";
import Partners from "../src/client/Partners";
import MainContacts from "../src/client/MainContacts";

const Home = () => {
    return (
        <Layout fileName="index">
        <MainHeader />
        <OurTarget />
        <Services />
        <Navigate />
        <Partners />
        <MainContacts />
        </Layout>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['navbar', 'footer', 'header', 'our-target', 'services', 'services-list', 'navigate', 'partners', 'contacts', 'index']),
    },
})

export default Home
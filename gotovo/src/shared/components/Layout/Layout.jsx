import { useTranslation } from 'next-i18next'
import Head from "next/head";

import Navbar from "../../../client/Navbar";
import Footer from "../../../client/Footer";

const Layout = ({ fileName, children }) => {
    const { t } = useTranslation(fileName);
    return (
        <>
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{t("title")}</title>
            </Head>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import Layout from "../src/shared/components/Layout";
import MarriageHeader from "../src/client/MarriageHeader";
import MarriageInfo from "../src/client/MarriageInfo";
import MarriageGallery from "../src/client/MarriageGallery";
import MarriageDocuments from "../src/client/MarriageDocuments";
import MarriageCost from "../src/client/MarriageCost";
import MarriageQuestions from "../src/client/MarriageQuestions";
import MarriageContacts from "../src/client/MarriageContacts";
import WriteAboutUs from "../src/client/WriteAboutUs";

const WeddingForDay = () => {
    return (
        <Layout fileName="wedding-page">
            <MarriageHeader />
            <MarriageInfo />
            <MarriageGallery />
            <MarriageDocuments />
            <MarriageCost />
            <MarriageQuestions />
            <MarriageContacts />
            <WriteAboutUs />
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['navbar', 'marriage-header', 'marriage-info', 'marriage-gallery', 'marriage-documents', 'marriage-cost', 'marriage-questions', 'marriage-contacts', 'write-about-us', 'footer', 'main', 'wedding-page']),
    },
})

export default WeddingForDay;
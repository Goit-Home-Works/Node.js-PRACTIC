import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import {useEffect} from "react";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";

import Layout from "../src/shared/components/Layout";
import ProfileForm from "../old/ProfileForm";
import useAuth from "../auth/hooks/use-auth";

const Profile = ({ locale }) => {
    const isAuth = useAuth();
    const router = useRouter();

    useEffect(()=>{
        if (!isAuth) {
            router.push('/login');
        }
    }, [isAuth]);

    const { t } = useTranslation("profile");

    return (
        <Layout title="Profile">
            <section className="register-form-main">
                <div className="container">
                    <div className="register-form-container">
                        <h2 className="title">{t("form-title")}</h2>
                        <ProfileForm locale={locale} />
                    </div>
                </div>
                <img
                    className="header-img register-form-img"
                    src="/img/passport.png"
                    alt=""
                />
            </section>
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["navbar", "footer", "main", 'profile'])), locale
    },
});

export default Profile;

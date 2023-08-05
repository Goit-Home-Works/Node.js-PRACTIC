import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import React from "react";

import useAuth from "../auth/hooks/use-auth";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";

import LoginForm from "../old/LoginForm";
import Layout from "../src/shared/components/Layout";

const Login = () => {
    const isAuth = useAuth();
    const router = useRouter();

    if (isAuth) {
        router.push('/profile');
    }
    const { t } = useTranslation("login");
    return (
        <Layout title="login">
            <section className="register-form-main">
                <div className="container">
                    <div className="register-form-container">
                        <h2 className="title">{t("title")}</h2>
                        <LoginForm />
                    </div>
                </div>
                <img className="header-img login-form-img" src="/img/passport.png" alt="" />
            </section>

        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['navbar', 'footer', 'main', 'login']),
    },
})


export default Login;
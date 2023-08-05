import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import {useRouter} from "next/router";
import useAuth from "../auth/hooks/use-auth";
import {useTranslation} from "next-i18next";

import RegisterForm from "../old/RegisterForm/RegisterForm";
import Layout from "../src/shared/components/Layout";

const Register = () => {
    const isAuth = useAuth();
    const router = useRouter();
    if (isAuth) {
        router.push('/profile')
    }
    const { t } = useTranslation("register");
    return (
        <Layout title="reg">
            <section className="register-form-main">
                <div className="container">
                    <div className="register-form-container">
                        <h2 className="title">{t("title")}</h2>
                        <RegisterForm/>
                    </div>
                </div>
                <img className="header-img register-form-img" src="/img/passport.png" alt="" />
            </section>
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['navbar', 'footer', 'main', 'register']),
    },
})


export default Register;
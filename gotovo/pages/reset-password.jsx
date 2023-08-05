import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import useAuth from "../auth/hooks/use-auth";
import {useRouter} from "next/router";

import ResetPasswordForm from "../old/ResetPasswordForm";
import Layout from "../src/shared/components/Layout";

const ResetPassword = () => {
    const isAuth = useAuth();
    const router = useRouter();
    if (isAuth) {
        router.push('/profile')
    }
    return (
        <Layout title="reset password">
            <section className="register-form-main">
                <div className="container">
                    <div className="register-form-container">
                        <h2 className="title">Відновити пароль</h2>
                        <ResetPasswordForm />
                    </div>
                </div>
                <img className="header-img login-form-img" src="/img/passport.png" alt="" />
            </section>

        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['navbar', 'footer', 'main']),
    },
})


export default ResetPassword;
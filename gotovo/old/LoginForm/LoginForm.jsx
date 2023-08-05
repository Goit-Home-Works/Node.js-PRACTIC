import {Field, Form, Formik} from "formik";
import signInSchema from "./login-form.schema";
import useLogin from "../../auth/hooks/use-login";
import {useTranslation} from "next-i18next";

const LoginForm = () => {
    const {login} = useLogin();
    const { t } = useTranslation("login");
    const form = t("form", { returnObjects: true });
    return (
        <Formik initialValues={{
            email: '',
            password: ''
        }} validationSchema={signInSchema} onSubmit={login}>
            <Form>
                <Field className="text-field" name="email" placeholder={`${form.email}*`} type="email"/>
                <Field className="text-field" name="password" placeholder={`${form.password}*`} type="password"/>
                <button className="btn _dark _long" type="submit">{form.submitButton}</button>
            </Form>
        </Formik>
    );
};

export default LoginForm;
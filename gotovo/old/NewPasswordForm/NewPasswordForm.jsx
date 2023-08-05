import {Field, Form, Formik} from "formik";

const ResetPasswordForm = () => {
    const onSubmit = ()=>{

    };
    return (
        <Formik initialValues={{
            email: ''
        }} onSubmit={onSubmit}>
            <Form>
                <Field className="text-field" name="password" placeholder="Новий пароль*" type="password"/>
                <button className="btn _dark _long" type="submit">Створити новий пароль</button>
            </Form>
        </Formik>
    );
};

export default ResetPasswordForm;
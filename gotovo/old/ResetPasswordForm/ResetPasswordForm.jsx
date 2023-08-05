import {Field, Form, Formik} from "formik";

const ResetPasswordForm = () => {
    const onSubmit = ()=>{

    };
    return (
        <Formik initialValues={{
            email: ''
        }} onSubmit={onSubmit}>
            <Form>
                <Field className="text-field" name="email" placeholder="Email*" type="email"/>
                <button className="btn _dark _long" type="submit">Відновити пароль</button>
            </Form>
        </Formik>
    );
};

export default ResetPasswordForm;
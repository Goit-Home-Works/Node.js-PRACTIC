import {ErrorMessage, Field, Form, Formik} from "formik";
import useRegister from "../../auth/hooks/use-register";
import signUpSchema from "./register-form.schema";
import Modal from "../../src/shared/components/Modal";
import {ModalContent} from "../../src/shared/components/Modal/Modal";
import useConfirm from "../../auth/hooks/use-confirm";
import {useTranslation} from "next-i18next";

import styles from "./RegisterForm.module.scss";

const RegisterForm = () => {
    const {register, closeModal, confirmToken} = useRegister();
    const confirm = useConfirm();
    const { t } = useTranslation("register");
    const form = t("form", { returnObjects: true });
    return (
        <>
            <Formik initialValues={{
                email: '',
                phone: '',
                fullName: '',
                password: '',
            }} validationSchema={signUpSchema} onSubmit={register}>
                <Form>
                    <Field className="text-field" name="email" placeholder={`${form.email}*`} type="email"/>
                    <ErrorMessage className="form-error" component="p" name="email"/>
                    <Field className="text-field" name="phone" placeholder={`${form.phone}*`} type="tel"/>
                    <ErrorMessage className="form-error" component="p" name="phone"/>
                    <Field className="text-field" name="fullName" placeholder={`${form.fullName}*`} type="text"/>
                    <ErrorMessage className="form-error" component="p" name="fullName"/>
                    <Field className="text-field" name="password" placeholder={`${form.password}*`} type="password"/>
                    <ErrorMessage className="form-error" component="p" name="password"/>
                    <button className="btn _dark _long" type="submit">{form.submitButton}</button>
                    <a className={styles.social} href="https://cmusy-dev.space/api/v1/auth/accounts/facebook">Facebook</a>
                    <a className={styles.social} href="https://cmusy-dev.space/api/v1/auth/accounts/google">Google</a>
                </Form>
            </Formik>

            <Modal open={!!confirmToken} onClose={closeModal}>
                <ModalContent>
                    <Formik initialValues={{
                        confirmToken,
                        verificationCode: '',
                    }} onSubmit={confirm}>
                        <Form>
                            <Field name="verificationCode" type="text" className="text-field" placeholder="Код із листа" />
                            <button className="btn _dark _long" type="submit">Підтвердити</button>
                        </Form>
                    </Formik>
                </ModalContent>
            </Modal>
        </>
    );
};

export default RegisterForm;
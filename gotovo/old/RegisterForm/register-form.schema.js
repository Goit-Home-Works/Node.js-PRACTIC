import * as Yup from "yup";

const isStrongPassword = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
const signUpSchema = Yup.object().shape({
    email: Yup.string()
        .required("Поле обязательное!")
        .email("Введите пожалуйста валидный email!"),
    password: Yup.string()
        .required("Поле обязательное!"),
    phone: Yup.string()
        .required("Поле обязательное!"),
    fullName: Yup.string().required("Поле обязательное!"),
});

export default signUpSchema;
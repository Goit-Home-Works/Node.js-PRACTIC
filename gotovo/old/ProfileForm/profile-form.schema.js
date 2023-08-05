import * as Yup from "yup";

const requiredField = {
    ua: "Поле обов'язкове",
    ru: "Поле обязательное",
    en: "Field required"
}

const createProfileSchema = (locale) => {
    const requiredText = requiredField[locale];

    const profileFormSchema = Yup.object().shape({
        plan: Yup.string().required(requiredText),
        total: Yup.string().required(),
        // fullNameOfTheHusband: Yup.string().required(requiredText),
        // wifeSFullName: Yup.string().required(requiredText),
        // husbandPassport: Yup.string().length(6).required(requiredText),
        // husbandIssuedBy: Yup.string().required(requiredText),
        // wifePassport: Yup.string().required(requiredText),
        // wifeIssuedBy: Yup.string().required(requiredText),
        // dateOfBirth: Yup.mixed().required(requiredText),
        // wifeDateOfBirth: Yup.mixed().required(requiredText),
        // phone: Yup.string().required(requiredText),
        // email: Yup.string().required(requiredText),
        // status: Yup.string().required(),

        // weddingDate: Yup.string().required('Поле обязательное!'),
        // endWeddingDate: Yup.string().required('Поле обязательное!'),
        // citizenOfUkraine: Yup.bool().notRequired(),
        // wasHusbandPreviouslyMarried: Yup.bool().notRequired(),
        // wasWifePreviouslyMarried: Yup.bool().notRequired(),
        // attitudeMilitary: Yup.string().notRequired(),
        // registeredPlace: Yup.string().notRequired(),
        // servicePlace: Yup.string().notRequired(),
        // militaryRank: Yup.string().notRequired(),
        // militaryDocument: Yup.string().notRequired(),
        // comment: Yup.string().notRequired(),
        // docs: Yup.string().notRequired(),
    });

    return profileFormSchema;
}



export default createProfileSchema;
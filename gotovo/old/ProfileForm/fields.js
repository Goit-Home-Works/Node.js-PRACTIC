import {phoneNumberMask, passportMask} from "./masks";

export const fields = {
    plan: {
        name: "plan",
        value: "",
    },
    total: {
        type: "hidden",
        name: "total",
        value: 0,
    },
    fullNameOfTheHusband: {
        name: "fullNameOfTheHusband",
        value: "",
        required: true
    },
    wifeSFullName: {
        name: "wifeSFullName",
        value: "",
        required: true
    },
    husbandPassport: {
        name: "husbandPassport",
        value: "",
        mask: passportMask,
        required: true
    },
    husbandIssuedBy: {
        name: "husbandIssuedBy",
        value: "",
        required: true
    },
    wifePassport: {
        name: "wifePassport",
        value: "",
        mask: passportMask
    },
    wifeIssuedBy: {
        name: "wifeIssuedBy",
        value: ""
    },
    dateOfBirth: {
        name: "dateOfBirth",
        required: true,
        dateFormat: "dd.MM.yyyy",
        maxDate: new Date()
    },
    wifeDateOfBirth: {
        name: "wifeDateOfBirth",
        required: true,
        dateFormat: "dd.MM.yyyy",
        maxDate: new Date()
    },
    phone: {
        name: "phone",
        value: "",
        mask: phoneNumberMask
    },
    email: {
        name: "email",
        value: "",
        required: true
    }
}
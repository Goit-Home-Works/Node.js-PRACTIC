import {ErrorMessage, Field} from "formik";
import React from "react";

const FormField = ({label, type = "text", placeholder = "", name, required = false}) => {
    return (
        <>
            {label && <label className="form-label">{label}</label>}
            <Field
                className="text-field"
                type={type}
                placeholder={placeholder}
                name={name}
            />
            {required && <ErrorMessage
                className="form-error"
                component="p"
                name={name}
            />}
        </>
    )
};

export default FormField;
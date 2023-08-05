import DatePicker from "react-datepicker";
import {useState} from "react";
import {ErrorMessage, useField, useFormikContext} from "formik";

const DateField = (props) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    const {label, required, name} = props;
    return (
        <>
            {label && <label className="form-label">{label}</label>}
            <DatePicker
                {...field}
                {...props}
                className="text-field"
                dateFormat="dd/MM/yyyy"
                selected={(field.value && new Date(field.value)) || null}
                onChange={val => {
                    setFieldValue(field.name, val);
                }} />
            {required && <ErrorMessage
                className="form-error"
                component="p"
                name={name}
            />}
        </>
    );
};

export default DateField;
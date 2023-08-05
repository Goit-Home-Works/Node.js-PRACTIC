import {ErrorMessage, Field, useField, useFormikContext} from "formik";
import React from "react";
import MaskedInput from "react-text-mask";

const MaskedField = (props) => {
    const {handleChange, label, type = "text", placeholder = "", name, mask, required = false} = props;
    const {setFieldValue } = useFormikContext();

    return (
        <>
            {label && <label className="form-label">{label}</label>}
            <Field name={name}
                render={({ field, handleBlur }) => (
                    <MaskedInput
                        {...field}
                        mask={mask}
                        className="text-field"
                        placeholder={placeholder}
                        type={type}
                        guide={false}
                        keepCharPositions={true}
                        showMask={true}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                )}
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

export default MaskedField;
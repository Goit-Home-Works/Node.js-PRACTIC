import DatePicker from "react-datepicker";
import {useState} from "react";
import {ErrorMessage, useField, useFormikContext} from "formik";

const CalendarField = (props) => {
    const { values: {plan}, setFieldValue } = useFormikContext();
    const [field] = useField(props);
    const {label, required, name} = props;
    const timeIntervals = (plan === "PREMIUM") ? 60 : 30;
    const filterDate = (date) => {
        const day = date.getDay();
        switch(plan) {
            case "BASIC":
                return day >= 2 && day < 5;
            case "STANDART":
            case "PREMIUM":
                return true;
        }
    };
    const filterTime = (time) => {
        const selectedDate = new Date(time);
        const day = selectedDate.getDay();
        const hour = selectedDate.getHours();
        switch(day){
            case 0:
                return hour >= 10 && hour < 16;
            case 1:
                return hour >= 10 && hour < 16;
            case 2:
                return hour >= 10 && hour < 19;
            case 3:
                return hour >= 10 && hour < 17;
            case 4:
                return hour >= 10 && hour < 17;
            case 5:
                return hour >= 10 && hour < 17;
            case 6:
                return hour >= 10 && hour < 15;
        }
        // return currentDate.getTime() < selectedDate.getTime();
        return true;
    };
    return (
        <>
            <label className="form-label">Оберіть дату одруження</label>
            <DatePicker
                selected={new Date()}
                minDate={new Date()}
                timeIntervals={timeIntervals}
                showTimeSelect
                className="text-field"
                filterDate={filterDate}
                onChange={val => {
                    setFieldValue(field.name, val);
                }}
                filterTime={filterTime}
                withPortal
            />
            {/*<DatePicker*/}
            {/*    {...field}*/}
            {/*    {...props}*/}
            {/*    className="text-field"*/}
            {/*    showTimeSelect*/}
            {/*    selected={(field.value && new Date(field.value)) || null}*/}
            {/*    onChange={val => {*/}
            {/*        setFieldValue(field.name, val);*/}
            {/*    }} />*/}

        </>
    );
};

export default CalendarField;
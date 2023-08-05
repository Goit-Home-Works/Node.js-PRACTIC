import React, {useState, useEffect} from "react";
import {ErrorMessage, Field, Form, Formik, useFormikContext, useField} from "formik";
import axios from "axios";
import Cookie from "js-cookie";
import moment from 'moment';
import createProfileSchema from "./profile-form.schema";

import useLogout from "../../auth/hooks/use-logout";

import CalendarField from "../../src/shared/components/CalendarField";
import FormField from "../../src/shared/components/FormField";
import MaskedField from "../../src/shared/components/MaskedField";
import DateField from "../../src/shared/components/DateField";
import Modal from "../../src/shared/components/Modal";
import {ModalContent} from "../../src/shared/components/Modal/Modal";
import dynamic from "next/dynamic";

const CalendarForm = dynamic(() => import("../FullCalendar/FullCalendar"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});

import {fields} from "./fields";
import {useTranslation} from "next-i18next";

const initialValues = Object.entries(fields).reduce((acum, [key, value])=> {
    acum[key] = value.value;
    return acum;
}, {});


const ProfileForm = ({locale}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [docs, setDoc] = useState("");
    const [successOrder, setSuccessOrder] = useState(false);
    const [openCalendar, setOpenCalendar] = useState(false);
    const logout = useLogout();

    const uploadDocument = (event) => {
        const data = new FormData();
        for(const file of event.currentTarget.files) {
            data.append("files", file);
        }
        axios
            .post(`https://cmusy-dev.space/api/v1/profile/upload/multiply`, data, {
                headers: {
                    Authorization: `Bearer ${Cookie.get("accessToken")}`,
                },
            })
            .then(({data}) => {
                console.log(data);
                setDoc(data);
            })
            .catch((error) => {
                if (error.status === 401) {
                    logout();
                }
            });
    };

    const createOrder = async (values) => {
        values.dateOfBirth = moment(values.dateOfBirth).format("DD.MM.YYYY");
        values.wifeDateOfBirth = moment(values.wifeDateOfBirth).format("DD.MM.YYYY");
        const order = {
            ...values,
            docs,
        };
        console.log(order);
        try {
            await axios.post(`https://cmusy-dev.space/api/v1/orders`, order, {
                headers: {
                    Authorization: `Bearer ${Cookie.get("accessToken")}`,
                },
            });
            setSuccessOrder(true);
            setIsModalOpen(true);
        } catch (error) {
            if (error.status === 401) {
                logout();
            }
        }
    };
    const { t } = useTranslation("profile");
    const form = t("form", { returnObjects: true });
    const fullFields = Object.entries(fields).reduce((acum, [key, value]) => {
        acum[key] = {...value, ...form[key]};
        return acum;
    }, {});
    const profileFormSchema = createProfileSchema(locale);
    return (
        <>
            {!successOrder && (
                <Formik
                    initialValues={{
                        plan: "",
                        total: 0,
                        status: "NEW",
                        fullNameOfTheHusband: "",
                        wifeSFullName: "",
                        husbandPassport: "",
                        husbandIssuedBy: "",
                        wifePassport: "",
                        wifeIssuedBy: "",
                        dateOfBirth: "",
                        wifeDateOfBirth: "",
                        phone: "",
                        email: "",
                        // weddingDate: '',
                        // endWeddingDate: '',
                        citizenOfUkraine: true,
                        wasHusbandPreviouslyMarried: false,
                        wasWifePreviouslyMarried: false,
                        attitudeMilitary: "",
                        registeredPlace: "",
                        servicePlace: "",
                        militaryRank: "",
                        militaryDocument: "",
                        comment: "",
                        divorceDocumentHusband: "",
                        divorceDocumentWife: "",
                        docs,
                    }}
                    validationSchema={profileFormSchema}
                    onSubmit={createOrder}
                >
                    {({setFieldValue, handleChange, values}) => (
                        <Form style={{textAlign: "left"}}>
                            <label className="form-label bold">Оберіть тип церемонії </label>
                            <div className="form-group">
                                <label className="form-label">
                                    <Field name="plan" type="radio" value="BASIC" className="form-checkbox" />
                                    Без виконання урочистостей</label>
                                <p className="form-field-description">
                                    Державна реєстрація шлюбу відбувається в робочому кабінеті,
                                    де кожному з подружжя вручається свідотцтво про шлюб.
                                </p>
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                    <Field name="plan" type="radio" value="STANDART" className="form-checkbox" />
                                    Скороченний обряд з єлементами урочистості</label>
                                <p className="form-field-description">
                                    Державна реєстрація шлюбу відбувається в залі урочистих подій в присутності наречених.
                                    Церемонія включає в себе: обмін обручками, підписи в актовому залі під музичний супровід,
                                    привітання від ведучої та вручення свідоцтв про шлюб.
                                </p>
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                    <Field name="plan" type="radio" value="PREMIUM" className="form-checkbox" />
                                    Повний обряд з єлементами урочистості</label>
                                <p className="form-field-description">
                                    Державна реєстрація шлюбу відбувається в залі урочистих подій в присутності наречених,
                                    їх батьків та гостей. Церемонія включає в себе: обмін обручками,
                                    підписи в актовому залі під музичний супровід, привітання від ведучої та вручення свідоцтв про шлюб.
                                    За бажанням наречених в церемонії можут використовуватися рушник та каравай.
                                </p>
                            </div>
                            <Field type="hidden" name="status" value="NEW" />
                            <Field
                                type="hidden"
                                name="total">
                                {(props)=> {
                                    const {values: {plan, weddingDate}, setFieldValue} = useFormikContext();
                                    const [field, meta] = useField(props);
                                    useEffect(() => {
                                        let cost = 0;
                                        // console.log(props.name);
                                        // console.log(props.field);
                                        switch(plan) {
                                            case "BASIC":
                                                cost = 8776;
                                                break;
                                            case "STANDARD":
                                                cost = 11188;
                                                break;
                                            case "PREMIUM":
                                                cost = 15142;
                                                break;
                                        }
                                        setFieldValue("total", `${cost}`);
                                    }, [setFieldValue, props.name, plan]);
                                    return  <input {...props} {...field} type="hidden" />
                                }}
                            </Field>
                            {
                                values.plan && (
                                    <>
                                        <FormField {...fullFields.fullNameOfTheHusband} />
                                        <FormField {...fullFields.wifeSFullName} />
                                        <MaskedField {...fullFields.husbandPassport} handleChange={handleChange} />
                                        <FormField {...fullFields.husbandIssuedBy} />
                                        <MaskedField {...fullFields.wifePassport}  handleChange={handleChange} />
                                        <FormField {...fullFields.wifeIssuedBy} />
                                        <DateField {...fullFields.dateOfBirth} />
                                        <DateField {...fullFields.wifeDateOfBirth} />
                                        <MaskedField {...fullFields.phone}  handleChange={handleChange} />
                                        <FormField {...fullFields.email} />

                                        <CalendarField />
                                        {/*              <span className="select-date" onClick={() => setOpenCalendar(true)}>*/}
                                        {/*  Выбрать дату*/}
                                        {/*</span>*/}
                                        {/*              <ErrorMessage*/}
                                        {/*                  className="form-error"*/}
                                        {/*                  component="p"*/}
                                        {/*                  name="weddingDate"*/}
                                        {/*              />*/}
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="">
                                                <Field type="checkbox" name="citizenOfUkraine" className="form-checkbox" />
                                                Чоловік и жінка є громадянами України?
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="">
                                                <Field type="checkbox" name="wasHusbandPreviouslyMarried" className="form-checkbox"/>
                                                Чи був чоловік раніше одружений?
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="">
                                                <Field type="checkbox" name="wasWifePreviouslyMarried" className="form-checkbox"/>
                                                Чи була жiнка раніше одружена?
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="">
                                                <Field type="checkbox" name="attitudeMilitary" className="form-checkbox"/>
                                                Чоловік війсковозабовязанний?
                                            </label>
                                            <ErrorMessage
                                                className="form-error"
                                                component="p"
                                                name="attitudeMilitary"
                                            />
                                        </div>

                                        {values.attitudeMilitary && (
                                            <>
                                                <label className="form-label">Місто реєстрації</label>
                                                <Field
                                                    className="text-field"
                                                    type="text"
                                                    placeholder="Місто реєстрації"
                                                    name="registeredPlace"
                                                />
                                                <ErrorMessage
                                                    className="form-error"
                                                    component="p"
                                                    name="registeredPlace"
                                                />
                                                <label className="form-label">Де проходив війскову службу</label>
                                                <Field
                                                    className="text-field"
                                                    type="text"
                                                    placeholder="Де проходив війскову службу"
                                                    name="servicePlace"
                                                />
                                                <ErrorMessage
                                                    className="form-error"
                                                    component="p"
                                                    name="servicePlace"
                                                />
                                                <label className="form-label">Вйскове звання, якщо є</label>
                                                <Field
                                                    className="text-field"
                                                    type="text"
                                                    placeholder="Вйскове звання, якщо є"
                                                    name="militaryRank"
                                                />
                                                <ErrorMessage
                                                    className="form-error"
                                                    component="p"
                                                    name="militaryRank"
                                                />
                                                <label className="form-label">Документ, що підтвержджує проходження віскової служби</label>
                                                <Field
                                                    className="text-field"
                                                    type="text"
                                                    placeholder="Документ, що підтвержджує проходження віскової служби"
                                                    name="militaryDocument"
                                                />
                                                <ErrorMessage
                                                    className="form-error"
                                                    component="p"
                                                    name="militaryDocument"
                                                />
                                            </>
                                        )}

                                        <label className="form-label">Коментар</label>
                                        <Field
                                            className="text-field"
                                            type="text"
                                            placeholder="Коментар"
                                            name="comment"
                                        />
                                        <label className="form-label">Додати файли (тiльки у форматi jpg, jpeg, png або pdf)</label>
                                        <input
                                            className="text-field"
                                            type="file"
                                            multiple
                                            onChange={uploadDocument}
                                        />
                                        <button className="btn _dark _long" type="submit">
                                            Відправити заявку
                                        </button>
                                    </>
                                )
                            }

                            {/*<Modal*/}
                            {/*    open={openCalendar}*/}
                            {/*    onClose={() => setOpenCalendar(false)}*/}
                            {/*    fullSize*/}
                            {/*>*/}
                            {/*    /!*<Calendar />*!/*/}
                            {/*    <CalendarForm*/}
                            {/*        setFieldValue={setFieldValue}*/}
                            {/*        value={values.weddingDate}*/}
                            {/*    />*/}
                            {/*</Modal>*/}
                        </Form>
                    )}
                </Formik>
            )}
            <Modal open={successOrder && isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ModalContent>
                    <h2 className="title">Ваша заява успішно відправлена. </h2>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ProfileForm;

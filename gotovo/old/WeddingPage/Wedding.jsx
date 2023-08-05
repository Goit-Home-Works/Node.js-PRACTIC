import { FastField, Form, Formik } from "formik";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Modal from "../../shared/components";
import { ModalContent } from "../../src/shared/components/Modal/Modal";

const useSubmit = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [response, setResponse] = useState(false);

  useEffect(() => {
    let timeout;

    if (response) {
      timeout = setTimeout(() => setResponse(null), 3000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [response]);

  const sendFeedback = useCallback(async (values) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://cmusy-dev.space/api/v1/feedbacks",
        values
      );
      setResponse(data);
    } catch (errors) {
      setErrors(errors);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    sendFeedback,
    loading,
    response,
    errors,
    onClose: setResponse,
  };
};

const Wedding = () => {
  const { sendFeedback, response, onClose } = useSubmit();

  return (
    <>
      <header className="header">
        <div className="container">
          <h2 className="header-text-big">Шлюб за добу</h2>
          <p className="header-text-small">
            Державна реєстрація в самому центрі столиці.
          </p>
          <div className="header-buttons">
            <a href="#" className="btn _dark _shadow _long">
              Запис до електронної черги
            </a>
            <div className="contacts-item">
              <span className="contacts-icon">
                <img src="/img/Contacts/item-4.png" alt="contact icon" />
              </span>
              <p className="contacts-name">Телефон гарячої лінії</p>
              <a href="tel:0800300803" className="contacts-link">
                0 800 300 803
              </a>
            </div>
          </div>
        </div>
        <img
          className="header-img _mr-80"
          src="/img/marriage-header.png"
          alt=""
        />
      </header>
      <section className="marriage-registration">
        <div className="marriage-registration-item">
          <h2 className="marriage-registration-title underline">
            Реєстрація шлюбу без черг
          </h2>
          <div className="marriage-registration-text">
            <p>
              Кожній закоханій парі хочеться якнайшвидше потрапити у святая
              святих - місце, де будуть узаконені їхні стосунки. Тільки ось
              величезний потік людей ніяк не дає можливості швидко закінчити з
              довгими процедурами. Чи можна без черги зареєструвати шлюб?
            </p>
            <br />
            <p>Так, у нас це можливо!</p>
          </div>
        </div>
      </section>
      <section className="marriage-gallery">
        <div className="container">
          <h2 className="title">Як виглядає зал для весільної церемонії</h2>
          <div className="marriage-gallery-content">
            <div className="marriage-gallery-item _1"></div>
            <div className="marriage-gallery-item _2"></div>
            <div className="marriage-gallery-item _3"></div>
            <div className="marriage-gallery-item _4"></div>
            <div className="marriage-gallery-item _5"></div>
            <div className="marriage-gallery-item _6"></div>
          </div>
        </div>
      </section>
      <section className="marriage-documents">
        <div className="container">
          <h2 className="title">Необхідні документи</h2>
          <div className="marriage-documents-content">
            <ol>
              <li className="marriage-documents-tab selected underline">
                Державна реєстрація шлюбу між громадянами України
              </li>
              <li className="marriage-documents-tab">
                Державна реєстрація шлюбу між чоловіком та жінкою, які не є
                громадянами України (або один із них)
              </li>
              <li className="marriage-documents-tab">Проставлення апостиля</li>
            </ol>
            <ul>
              <li className="marriage-documents-item">
                Паспорт громадянина України (при наданні id-картки додатково
                подається додаток №13 «Довідка про реєстрацію місця проживання
                особи»)
              </li>
              <li className="marriage-documents-item">Ідентифікаційний код</li>
              <li className="marriage-documents-item">
                Особи, в яких було вилучено паспорт громадянина України, у
                зв'язку з взяттям на консульський облік в іншій державі, надають
                паспорт громадянина України для виїзду за кордон з відповідною
                відміткою про це в паспорті
              </li>
              <li className="marriage-documents-item">
                Якщо особа раніше перебувала в шлюбі, то додатково надається
                документ, що підтверджує припинення попереднього шлюбу або
                визнання шлюбу недійсним (свідоцтво про розірвання шлюбу, видане
                на ім’я замовника; рішення суду про розірвання шлюбу, про
                визнання шлюбу недійсним, яке набрало законної сили з відміткою;
                свідоцтво про смерть одного з подружжя; висновок відділу
                державної реєстрації актів цивільного стану про анулювання
                актового запису про шлюб, який є недійсним тощо).» Деталі за
                телефоном: +38 096 056 44 44 (Viber, WhatsApp, Telegram)
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="service-cost">
        <div className="container">
          <h3 className="title">Вартість послуг</h3>
          <div className="service-cost-list">
            <div className="service-cost-item">
              <div>
                <p className="service-cost-item-text">“Базовий”</p>
                <p className="service-cost-item-text underline">6 777 грн</p>
              </div>
              <a href="#" className="btn _light">
                Детальнiше
              </a>
            </div>
            <div className="service-cost-item">
              <div>
                <p className="service-cost-item-text">“Стандарт”</p>
                <p className="service-cost-item-text underline">9 189 грн</p>
              </div>
              <a href="#" className="btn _light">
                Детальнiше
              </a>
            </div>
            <div className="service-cost-item">
              <div>
                <p className="service-cost-item-text">Паспортний сервiс</p>
                <p className="service-cost-item-text underline">13 141 грн</p>
              </div>
              <a href="#" className="btn _light">
                Детальнiше
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="marriage-contacts">
        <div className="container marriage-contacts-content">
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              comment: "",
            }}
            onSubmit={sendFeedback}
          >
            <Form>
              <h2 className="title marriage-contacts-label">
                Залиште заявку і отримаєте безкоштовну консультацію
              </h2>
              <FastField
                name="name"
                placeholder="Ваше Ім'я"
                type="text"
                className="marriage-contacts-input"
              />
              <FastField
                name="email"
                placeholder="Ваш Email"
                type="text"
                className="marriage-contacts-input"
              />
              <FastField
                name="phone"
                placeholder="Ваш Телефон"
                type="text"
                className="marriage-contacts-input"
              />
              <FastField
                placeholder="Ваше Повідомлення"
                name="comment"
                id=""
                cols="30"
                rows="10"
                className="marriage-contacts-input"
              />
              <button
                type="submit"
                className="btn _dark _long marriage-contacts-btn"
              >
                Отримати консультацiю
              </button>
            </Form>
          </Formik>
          <Modal open={Boolean(response)} onClose={() => onClose()}>
            <ModalContent>Успешно!</ModalContent>
          </Modal>
          <div>
            <div className="contacts-item marriage-contacts-item">
              <span className="contacts-icon">
                <img src="/img/Contacts/item-4.png" alt="contact icon" />
              </span>
              <p className="contacts-name">Телефон</p>
              <a href="tel:0800300803" className="contacts-link">
                0 800 300 803
              </a>
            </div>
            <div className="contacts-item marriage-contacts-item">
              <span className="contacts-icon">
                <img src="/img/Contacts/item-5.png" alt="contact icon" />
              </span>
              <p className="contacts-name marriage-contacts-item">
                Робочий час
              </p>
              <p className="contacts-text marriage-contacts-schedule">
                <span>Пн — Пт</span>
                <span>9:00 — 20:00</span>
                <span>Сб— Нд</span>
                <span>9:00 — 18:00</span>
              </p>
            </div>
            <div className="contacts-item marriage-contacts-item">
              <span className="contacts-icon">
                <img src="/img/Contacts/item-1.png" alt="contact icon" />
              </span>
              <p className="contacts-name">Адреса</p>
              <p className="contacts-text">
                01010, м Київ, вулиця Генерала Алмазова, 11
              </p>
            </div>

            <iframe
              className="marriage-contacts-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.6669450101253!2d30.538946315696933!3d50.42867667947236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0e86f9427f%3A0x2470d8a05ef3d8eb!2z0YPQuy4g0JrRg9GC0YPQt9C-0LLQsCwgMTEsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1620860107854!5m2!1sru!2sua"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wedding;

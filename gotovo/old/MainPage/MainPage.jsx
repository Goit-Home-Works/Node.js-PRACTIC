import React from "react";

const MainPage = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <h2 className="header-text-big">“ГОТОВО!”</h2>
                    <p className="header-text-small">Сучасний і стильний документ-сервіс з швидким та ввічливим
                        обслуговуванням</p>
                    <div className="header-buttons">
                        <a href="#" className="btn _dark _shadow">Нашi послуги</a>
                        <a href="#" className="btn _light _shadow">Контакти</a>
                    </div>
                </div>
                <img className="header-img" src="/img/passport.png" alt="" />
            </header>
            <section className="our-target">
                <div className="our-target-content">
                    <img className="ornament _left" src="/img/ornament.svg" alt="Орнамент" />
                        <div className="container">
                            <div className="article _half">
                                <h3 className="article-heading">Наша мета -</h3>
                                <p className="article-text">
                                    спростити взаємини громадян та держави, сформувати новий продукт у сфері надання
                                    послуг, який максимально спростить процедуру отримання документів та забезпечить
                                    високий рівень клієнтського сервісу шляхом надання швидких, зручних та якісних
                                    послуг.
                                </p>
                            </div>
                        </div>
                </div>
                <div className="our-target-map">
                    <div className="our-target-map-text">
                        <span className="our-target-map-text-bold">1</span>
                        <span className="our-target-map-text-bold">/</span>
                        <span className="our-target-map-text-bold">128,650,000</span>
                        <span className="our-target-map-text-thin">державний центр</span>
                        <span className="our-target-map-text-thin"></span>
                        <span className="our-target-map-text-thin">Задоволенних вiдвiдувачiв</span>
                    </div>
                    <img src="/img/map.svg" alt="Карта" />
                </div>
            </section>
            <section className="navigate">
                <div className="navigate-content">
                    <img className="ornament _left" src="/img/ornament.svg" alt="Орнамент" />
                        <img className="ornament _right" src="/img/ornament.svg" alt="Орнамент" />
                            <div className="container navigate-container">
                                <div className="article">
                                    <h3 className="article-heading">Орієнтуватися у документ-сервісі дуже просто.</h3>
                                    <p className="article-text">
                                        Відвідувача, який зайшов до примiщення, зустрiчають адміністратори на ресепшен,
                                        якi проiнформують його по всiх питаннях та нададуть покрокову інструкцію дiй
                                    </p>
                                </div>
                                <div>
                                    <a href="#" className="btn _dark">Дiзнатись бiльше</a>
                                </div>
                            </div>
                </div>
            </section>
            <section className="partners">
                <div className="container">
                    <h3 className="title">Партнери</h3>
                    <div className="partners-content">
                        <div className="partners-item">
                            <img className="partners-img" src="/img/Partners/item-1.png" alt="partner-logo"
                                 className="partners-logo" />
                        </div>
                        <div className="partners-item">
                            <img className="partners-img" src="/img/Partners/item-2.png" alt="partner-logo"
                                 className="partners-logo" />
                        </div>
                        <div className="partners-item">
                            <img className="partners-img" src="/img/Partners/item-3.png" alt="partner-logo"
                                 className="partners-logo" />
                        </div>
                        <div className="partners-item">
                            <img className="partners-img" src="/img/Partners/item-4.png" alt="partner-logo"
                                 className="partners-logo" />
                        </div>
                        <div className="partners-item">
                            <img className="partners-img" src="/img/Partners/item-5.png" alt="partner-logo"
                                 className="partners-logo" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="contacts">
                <div className="container">
                    <h3 className="contacts-heading">Ми радi вам допомогти</h3>
                    <ul className="contacts-list">
                        <li className="contacts-item">
                <span className="contacts-icon">
                    <img src="/img/Contacts/item-1.png" alt="contact icon" />
                </span>
                            <p className="contacts-name">Адреса</p>
                            <p className="contacts-text">01010, м Київ, вулиця Генерала Алмазова, 11</p>
                        </li>
                        <li className="contacts-item">
                <span className="contacts-icon">
                    <img src="/img/Contacts/item-2.png" alt="contact icon" />
                </span>
                            <p className="contacts-name">Електронна пошта</p>
                            <a href="mailto:gotovo.ds@gmail.com" className="contacts-link">gotovo.ds@gmail.com</a>
                        </li>
                        <li className="contacts-item">
                <span className="contacts-icon">
                    <img src="/img/Contacts/item-3.png" alt="contact icon" />
                </span>
                            <p className="contacts-name">Генеральний директор</p>
                            <p className="contacts-text">Кузмицька Анастасія Ігорівна</p>
                        </li>
                        <li className="contacts-item">
                <span className="contacts-icon">
                    <img src="/img/Contacts/item-4.png" alt="contact icon" />
                </span>
                            <p className="contacts-name">Телефон гарячої лінії</p>
                            <a href="tel:0800300803" className="contacts-link">0 800 300 803</a>
                        </li>
                    </ul>
                </div>
                <img className="contacts-img" src="/img/contacts.png" alt="" />
            </section>
        </>
    );
};

export default MainPage;
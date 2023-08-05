const ContactsPage = () => {
    return (
        <>
            <section className="contacts-2">
                <div className="container">
                    <h2 className="title contacts-2-title">Контакти</h2>
                    <div className="contacts-2-content">
                        <div className="contacts-item">
                <span className="contacts-icon">
                    <img src="/img/Contacts/item-1.png" alt="contact icon"/>
                </span>
                            <p className="contacts-name">Адреса</p>
                            <p className="contacts-text">01010, м Київ, вулиця Генерала Алмазова, 11</p>
                        </div>
                        <div className="contacts-item">
                <span className="contacts-icon">
                    <img src="/img/Contacts/item-2.png" alt="contact icon"/>
                </span>
                            <p className="contacts-name">Електронна пошта</p>
                            <a href="mailto:gotovo.ds@gmail.com" className="contacts-link">gotovo.ds@gmail.com</a>
                        </div>
                        <div className="contacts-item">
                <span className="contacts-icon">
                    <img src="/img/Contacts/item-3.png" alt="contact icon"/>
                </span>
                            <p className="contacts-name">Генеральний директор</p>
                            <p className="contacts-text">Кузмицька Анастасія Ігорівна</p>
                        </div>
                        <div className="contacts-item">
                <span className="contacts-icon">
                    <img src="/img/Contacts/item-4.png" alt="contact icon"/>
                </span>
                            <p className="contacts-name">Телефон гарячої лінії</p>
                            <a href="tel:0800300803" className="contacts-link">0 800 300 803</a>
                        </div>
                    </div>
                </div>
                <img className="contacts-2-img" src="/img/square.png" alt=""/>
            </section>
            <section className="contacts-schedule">
                <div className="container">
                    <h2 className="title">Графiк роботи</h2>
                    <div className="contacts-schedule-content">
                        <div className="contacts-schedule-item">
                            <img src="/img/Services/icon-1.png" className="contacts-schedule-img" alt=""/>
                            <div>
                                <p className="contacts-schedule-name">Шлюб за добу</p>
                                <p className="contacts-schedule-text">Пн-Пт 9:00-20:00</p>
                                <p className="contacts-schedule-text">Сб-Нд 9:00-18:00</p>
                            </div>
                        </div>
                        <div className="contacts-schedule-item">
                            <img src="/img/Services/icon-2.png" className="contacts-schedule-img" alt=""/>
                            <div>
                                <p className="contacts-schedule-name">Страхування</p>
                                <p className="contacts-schedule-text">Пн-Сб 9:00-18:00</p>
                                <p className="contacts-schedule-text">Нд - вихiдний</p>
                            </div>
                        </div>
                        <div className="contacts-schedule-item">
                            <img src="/img/Services/icon-3.png" className="contacts-schedule-img" alt=""/>
                            <div>
                                <p className="contacts-schedule-name">Паспортний сервiс</p>
                                <p className="contacts-schedule-text">Пн-Пт 9:00-20:00</p>
                                <p className="contacts-schedule-text">Сб-Нд 9:00-18:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactsPage;
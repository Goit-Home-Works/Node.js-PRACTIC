import {useTranslation} from "next-i18next";

import Container from "../../shared/components/Container";
import Title from "../../shared/components/Title";
import ScheduleItem from "./ScheduleItem";

import styles from "./Schedule.module.scss";

const Schedule = () => {
    const { t } = useTranslation("schedule");

    const contactsItems = t('schedule', {returnObjects: true});

    const contactsElements = contactsItems.map(({ id, ...props }) => {
        return (
            <ScheduleItem key={id} {...props} />
        )
    });

    let obj1 = {name: "hello", age: 10};
    let arr = ['a', 'b', 'c'];

    console.log(Object.keys(arr));

    return (
        <section className={styles["section"]}>
            <Container>
                <Title text={t("title")} />
                <div className={styles["content"]}>
                    {contactsElements}
                </div>
            </Container>
        </section>
    )
};

export default Schedule;
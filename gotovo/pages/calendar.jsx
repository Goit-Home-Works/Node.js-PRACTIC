import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import React, { useCallback, useEffect, useState } from "react";

import axios from 'axios';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import { ModalContent } from "../src/shared/components/Modal/Modal";
import Layout from "../src/shared/components/Layout";

const CalendarPage = () => {
    const [events, setEvents] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            const { data } = await axios.get(
                `https://cmusy-dev.space/api/v1/weddings`
            );
            setEvents(data.map(({ date }) => ({ date, title: "Зайнято" })));
        } catch (error) {
            setEvents([]);
        }
    }, [setEvents]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);


    return (
        <Layout title="calendar">
            <ModalContent>
                <FullCalendar
                    locale="uk"
                    selectable
                    dayCount
                    displayEventTime
                    eventTimeFormat={{
                        hour: "numeric",
                        minute: "2-digit",
                        meridiem: false,
                    }}
                    initialEvents={events}
                    events={events}
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                />
            </ModalContent>
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["navbar", "footer", "main"])),
    },
});

export default CalendarPage;

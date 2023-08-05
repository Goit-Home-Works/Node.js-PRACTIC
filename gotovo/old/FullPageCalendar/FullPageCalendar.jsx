import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const FullPageCalendar = () => {
    // const [events, setEvents] = useState([]);
    //
    // const fetchData = useCallback(async () => {
    //     try {
    //         const { data } = await axios.get(
    //             `https://cmusy-dev.space/api/v1/weddings`
    //         );
    //         setEvents(data.map(({ date }) => ({ date, title: "Зайнято" })));
    //     } catch (error) {
    //         setEvents([]);
    //     }
    // }, []);
    //
    // useEffect(() => {
    //     fetchData();
    // }, [fetchData]);
    return (
        <FullCalendar
            locale="uk"
            selectable
            dayCount
            eventTimeFormat={{
                hour: "numeric",
                minute: "2-digit",
                meridiem: false,
            }}
            events={[]}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
        />
    );
};

export default FullPageCalendar;
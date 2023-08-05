import React, { useCallback, useEffect, useState } from "react";
import { ModalContent } from "../../src/shared/components/Modal/Modal";

import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import axios from "axios";

const FullCalendarTest = ({ setFieldValue, value }) => {
  const [events, setEvents] = useState([]);
  const handleDateClick = (arg) => {
                    // 2021-07-20T09:30:00+03:00
      const data = arg.dateStr.slice(0, -6) + ".826Z";
      console.log(data)
      // const data = "2021-07-20T05:36:23.826Z"
      // console.log(arg.dateStr);
          // setFieldValue("weddingDate", arg.dateStr );
          setFieldValue("weddingDate", data );
  };

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://cmusy-dev.space/api/v1/weddings`
      );
      setEvents(
        data.map(({ date }) => ({ date, title: 'Зайнято' }))
      );
    } catch (error) {
      setEvents([]);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ModalContent>
      <FullCalendar
        locale="uk"
        selectable
        dayCount
        dateClick={handleDateClick}
        eventTimeFormat={{
          hour: "numeric",
          minute: "2-digit",
          meridiem: false,
        }}
        events={[...events, { date: value }]}
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGrid"
      />
    </ModalContent>
  );
};

export default FullCalendarTest;

import React from "react";

const CalendarDays = () => {
    const day = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    return (
        <ul className="calendar-days-list">
            {
                day.map((_,i) =>
                    <li className={`calendar-days-list-item ${i<10 && "disable"}  ${i>12 && i<16 && "checked"}`}>
                        {i<10 ? `0${i}` : i}:00
                    </li>
                )
            }
        </ul>
    )
};

export default CalendarDays
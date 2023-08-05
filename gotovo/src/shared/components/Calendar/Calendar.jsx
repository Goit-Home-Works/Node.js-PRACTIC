import React,{useState,useEffect} from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarCells from "./CalendarCells";
import CalendarDays from "./CalendarDays";
import {getWeddingDays} from "../../../redux/actions/weddingActions";
import {useDispatch} from "react-redux";

const Calendar = () => {
    const [currentMonth,setCurrentMonth] = useState(new Date());
    const [view,setView] = useState("Month");
    const dispatch = useDispatch();
    useEffect(()=> {
        console.log("dsasdsa")
        dispatch(getWeddingDays());
    },[]);
    return (
        <div className="calendar">
            <CalendarHeader view={view} setView={setView} currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
            {view === "Month" ? <CalendarCells setView={setView} currentMonth={currentMonth} />
                : <CalendarDays />}
        </div>
    );
};

export default Calendar;
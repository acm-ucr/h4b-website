"use client";
import React from "react";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { useState } from "react";

const mLocalizer = momentLocalizer(moment);
const CalendarEvents = () => {
  const [date, setDate] = useState(new Date());
  const dummyEvents = [
    {
      title: "Tabling event",
      start: new Date(2024, 7, 20, 10, 0),
      end: new Date(2024, 7, 5, 11, 0),
      location: "WCH",
      summary: "the best event",
    },
    {
      title: "Tabling event",
      start: new Date(2024, 6, 20, 10, 0),
      end: new Date(2024, 6, 5, 11, 0),
      location: "WCH",
      summary: "even better event",
    },
  ];
  return (
    <section className="w-full flex justify-center items-center flex-col">
      <div className="mb-5 w-11/12 flex justify-center items-center">
        <div className="h-[110vh] w-full relative">
          <Calendar
            className="w-full m-0 p-0 text-3xl"
            date={date}
            onNavigate={(newDate) => {
              setDate(newDate);
            }}
            events={dummyEvents}
            localizer={mLocalizer}
            defaultView="month"
            views={["month"]}
          />
        </div>
      </div>
    </section>
  );
};

export default CalendarEvents;

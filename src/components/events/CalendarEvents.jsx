"use client";
import React, { useState } from "react";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import CustomEvent from "./CustomEvents";
import CustomHeader from "./CustomHeader";
import CustomToolbar from "./CustomToolbar";

const mLocalizer = momentLocalizer(moment);

const CalendarEvents = () => {
  const [date, setDate] = useState(new Date());
  const dummyEvents = [
    {
      title: "Tabling event 1",
      start: new Date(2024, 7, 5, 10, 0),
      end: new Date(2024, 7, 5, 11, 0),
      location: "WCH",
      summary: "the best event",
    },
    {
      title: "Tabling event 2",
      start: new Date(2024, 6, 5, 10, 0),
      end: new Date(2024, 6, 5, 11, 0),
      location: "WCH",
      summary: "even better event",
    },
  ];

  return (
    <div className="relative flex flex-col">
      {/* Calendar Section */}
      <section className="w-full flex-grow flex justify-center items-center">
        <div className="w-full h-[95vh] relative">
          <Calendar
            className="w-full m-0 p-0 2xl:text-3xl text-xl"
            date={date}
            onNavigate={(newDate) => {
              setDate(newDate);
            }}
            events={dummyEvents}
            localizer={mLocalizer}
            defaultView="month"
            views={["month"]}
            components={{
              event: CustomEvent,
              header: CustomHeader,
              toolbar: CustomToolbar,
            }}
            onSelectEvent={(event) => setSelectedEvent(event)}
            eventPropGetter={() => {
              return {
                className:
                  "!p-0 !active:ring-0 !focus:outline-0 !bg-transparent",
              };
            }}
            dayPropGetter={(event) => {
              return {
                className: `${
                  new Date(event).toLocaleDateString() ==
                  new Date().toLocaleDateString()
                    ? "!bg-biscuits-orange"
                    : "!bg-white"
                }`,
                style: {
                  margin: 0,
                  padding: 0,
                },
              };
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default CalendarEvents;

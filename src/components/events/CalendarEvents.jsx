"use client";
import React, { useState, useEffect } from "react";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import CustomEvent from "./CustomEvents";
import CustomHeader from "./CustomHeader";
import CustomToolbar from "./CustomToolbar";
import Modal from "./Modal";
import "./rbc.css";

const mLocalizer = momentLocalizer(moment);

const CalendarEvents = () => {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
    const startDate = new Date(
      new Date().getTime() - 60 * 60 * 24 * 7 * 10 * 1000
    ).toISOString();
    const endDate = new Date(
      new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000
    ).toISOString();
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
          &singleEvents=true&orderBy=startTime&timeMin=${startDate}&timeMax=${endDate}`
        );

        const offset = new Date().getTimezoneOffset() * 60000;
        const data = await response.json();
        const items = data.items.map((item) => {
          item.allDay = !item.start.dateTime;
          (item.start = item.start.dateTime
            ? new Date(item.start.dateTime)
            : new Date(new Date(item.start.date).getTime() + offset)),
            (item.end = new Date(
              item.end.dateTime || new Date(item.end.date).getTime() + offset
            )),
            (item.hidden = false);
          return item;
        });
        setEvents(items);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col py-[2%] animate-delay-100 animate-fade-up">
      {/* Calendar Section */}
      <span className="-rotate-90 text-biscuits-purple-200 font-shrikhand text-6xl  items-center w-[120px] absolute lg:bottom-1/4 xl:block hidden">
        {isClient ? date.toLocaleString("default", { month: "long" }) : ""}
      </span>
      <section className="w-full flex-grow flex justify-center items-center gap-x-4">
        <div className="md:w-5/6 w-11/12 h-[95vh] relative">
          <Calendar
            className="w-full m-0 p-0 2xl:text-3xl !border-biscuits-purple-200 !text-lg !font-fredoka"
            date={date}
            onNavigate={(newDate) => {
              setDate(newDate);
            }}
            events={events}
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
                    ? "!bg-biscuits-purple-100"
                    : "!bg-transparent"
                } !border-biscuits-purple-200 !border-dotted`,
                style: {
                  margin: 0,
                  padding: 0,
                },
              };
            }}
          />
          {selectedEvent && (
            <Modal
              setEvents={setSelectedEvent}
              title={selectedEvent.summary}
              description={selectedEvent.description}
              location={selectedEvent.location}
              startTime={selectedEvent.start}
              endTime={selectedEvent.end}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default CalendarEvents;

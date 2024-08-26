"use client";
import UpcomingCard from "./UpcomingCard";
import Title from "../Title";
import useView from "@/components/useView";
import { useEffect, useState } from "react";

const Upcoming = () => {
  const [inView, ref] = useView();
  const [events, setEvents] = useState([]);

  useEffect(() => {
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
        const maxEvents = 4;
        const today = new Date();

        const items = data.items
          .filter((item) => {
            item.allDay = !item.start.dateTime;

            item.start = item.start.dateTime
              ? new Date(item.start.dateTime)
              : new Date(new Date(item.start.date).getTime() + offset);

            item.end = new Date(
              item.end.dateTime || new Date(item.end.date).getTime() + offset
            );

            return item.start >= today;
          })
          .slice(0, maxEvents);

        // Extract the month
        const itemsMap = items.map((item) => {
          const month = item.start.toLocaleString("default", {
            month: "short",
          });

          // Extract the day (number)
          const day = item.start.getDate();

          // Extract the time in AM/PM format
          const time = item.start.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          });
          item.month = month;
          item.day = day;
          item.time = time;
          return item;
        });

        setEvents(itemsMap);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      ref={ref}
      className={`${
        inView && "animate-fade-left animate-delay-200 "
      } flex flex-col justify-center text-center my-[5%]`}
    >
      <Title text="Upcoming Events" color="purple" />
      <div
        className={`${
          inView && "animate-fade-left"
        } grid md:grid-cols-2 grid-cols-1 gap-4`}
      >
        {events[0] ? (
          <UpcomingCard
            event={events[0].summary}
            location={events[0].location}
            description={events[0].description}
            month={events[0].month}
            date={events[0].date}
            time={events[0].time}
          />
        ) : (
          ""
        )}
        {events[1] ? (
          <UpcomingCard
            event={events[1].summary}
            location={events[1].location}
            description={events[1].description}
            month={events[1].month}
            date={events[1].date}
            time={events[1].time}
          />
        ) : (
          ""
        )}
        {events[2] ? (
          <UpcomingCard
            event={events[2].summary}
            location={events[2].location}
            description={events[2].description}
            month={events[2].month}
            date={events[2].date}
            time={events[2].time}
          />
        ) : (
          ""
        )}
        {events[3] ? (
          <UpcomingCard
            event={events[3].summary}
            location={events[3].location}
            description={events[3].description}
            month={events[3].month}
            date={events[3].date}
            time={events[3].time}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Upcoming;

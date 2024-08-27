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
          const date = item.start.getDate();

          // Extract the time in AM/PM format
          const time = item.start.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          });
          item.month = month;
          item.date = date;
          item.time = time;
          if (item.description)
            item.description = item?.description.replace(
              /<\/?(?!br\b)[^>]+>/gi,
              ""
            );
          return item;
        });

        setEvents(itemsMap.slice(0, 5));
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
      } flex flex-col justify-center text-center my-[5%] w-2/3 gap-y-5`}
    >
      <Title text="Upcoming Events" color="purple" />
      {events.length === 0 && (
        <div className="text-6xl font-omc text-biscuits-purple-200 self-center">
          No upcoming events
        </div>
      )}
      <div
        className={`${
          inView && "animate-fade-left"
        } grid md:grid-cols-2 grid-cols-1 gap-4 w-full self-center`}
      >
        {events?.map((event, index) => (
          <UpcomingCard
            key={index}
            event={event.summary}
            location={event.location}
            description={event.description}
            month={event.month}
            date={event.date}
            time={event.time}
          />
        ))}
      </div>
    </div>
  );
};

export default Upcoming;

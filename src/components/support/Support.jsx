"use client";
import useView from "../useView";
import Title from "../Title";
import standing from "@/public/images/standing.webp";
import Image from "next/image";
import Connect from "@/components/support/Connect";
import Subtitle from "@/components/Subtitle";
import Button from "@/components/Button";
import { SOCIALS } from "@/data/support/Socials";

const Support = () => {
  const [inView, ref] = useView();
  return (
    <div
      ref={ref}
      className={`${inView && "animate-fade-up"} flex flex-col gap-y-8`}
    >
      <Title text="Support Us" food="croissant" color="gray" />
      <div className="flex md:flex-row flex-col justify-evenly items-center">
        <Image
          src={standing}
          alt="standing"
          className="pb-4 animate-wiggle animate-twice animate-ease-out sm:w-1/3 w-5/6"
        />
        <div className="flex flex-col items-center gap-y-10">
          <Subtitle color="text-biscuits-brown-200" text="Donations" />
          <Button text="VENMO" link="https://account.venmo.com/u/h4b_ucr" />
          <Subtitle color="text-biscuits-brown-200" text="Newsletter" />
          <Button text="SIGN UP" link="http://eepurl.com/iaWAc5" />
        </div>
      </div>
      <Subtitle
        color="text-center text-biscuits-brown-200"
        text="Connect with us!"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 xl:flex xl:flex-row xl:justify-evenly gap-y-4">
        {SOCIALS.map((social, index) => (
          <Connect
            key={index}
            name={social.name}
            icon={social.icon}
            link={social.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Support;

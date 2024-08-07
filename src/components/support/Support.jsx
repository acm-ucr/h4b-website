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
    <div className="px-10 bg-biscuits-orange-300">
      <div ref={ref} className={`${inView && "animate-fade-up"}`}>
        <Title text="Support Us" food="croissant" color="gray" />
        <div className="flex flex-wrap gap-x-6 py-14 justify-evenly items-center">
          <Image
            src={standing}
            alt="standing"
            className="pb-4 animate-wiggle animate-twice animate-ease-out"
          />
          <div className="flex flex-col items-center gap-y-8 pt-12 md:pt-0">
            <Subtitle color="text-biscuits-brown-200" text="Donations" />
            <Button text="VENMO" link="https://account.venmo.com/u/h4b_ucr" />
            <Subtitle color="text-biscuits-brown-200" text="Newsletter" />
            <Button text="SIGN UP" link="http://eepurl.com/iaWAc5" />
          </div>
        </div>
        <div className="font-shrikhand">
          <Subtitle
            color="text-center text-biscuits-brown-200"
            text="Connect with us!"
          />
          <div className="mx-12 xl:mx-64 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-32 gap-y-8 pb-10">
            {SOCIALS.map((social, index) => (
              <div
                key={index}
                className="w-auto flex items-center justify-center"
              >
                <Connect
                  name={social.name}
                  icon={social.icon}
                  link={social.link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

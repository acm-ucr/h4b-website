import Connect from "@/components/support/Connect";
import Subtitle from "@/components/Subtitle";
import Button from "@/components/Button";
import { SOCIALS } from "@/data/support/Socials";
import Title from "../Title";
import standing from "@/public/images/standing.webp";
import Image from "next/image";

const Support = () => {
  return (
    <div className="px-10 bg-biscuits-orange-300">
      <Title text="Support Us" food="croissant" color="gray" />
      <div className="">
        <div className="flex justify-items-end gap-x-6 py-14 justify-evenly items-center">
          <Image src={standing} alt="standing" className="justify-items-end" />
          <div className="flex flex-col items-center gap-y-8">
            <Subtitle color="text-biscuits-brown-200" text="Donations" />
            <Button text="VENMO" link="https://account.venmo.com/u/h4b_ucr" />
            <Subtitle color="text-biscuits-brown-200" text="Newsletter" />
            <Button text="SIGN UP" link="http://eepurl.com/iaWAc5" />
          </div>
        </div>
      </div>
      <div className="font-shrikhand">
        <Subtitle color="text-biscuits-brown-200" text="Connect with us!" />
        <div className="flex justify-evenly translate-y-5 pb-10">
          {SOCIALS.map((socials, index) => (
            <Connect
              key={index}
              name={socials.name}
              icon={socials.icon}
              link={socials.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Support;

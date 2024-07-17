import Connect from "@/components/support/Connect";
import Subtitle from "@/components/Subtitle";
import Button from "@/components/Button";
import { SOCIALS } from "@/data/support/Socials";
import Title from "../Title";
import standing from "@/public/images/standing.webp";
import Image from "next/image";

const Support = () => {
  return (
    <div className="px-10">
      <Title text="Support Us" food="croissant" color="gray" />
      <div className="grid grid-cols-2 items-center justify-center py-14">
        <Image src={standing} alt="standing" />
        <div className="flex flex-col items-center gap-y-8">
          <Subtitle color="text-biscuits-brown-200" text="Donations" />
          <Button text="VENMO" link="https://account.venmo.com/u/h4b_ucr" />
          <Subtitle color="text-biscuits-brown-200" text="Newsletter" />
          <Button text="SIGN UP" link="http://eepurl.com/iaWAc5" />
        </div>
      </div>
      <div className="text-center text-biscuits-brown-200 font-shrikhand text-5xl">
        Connect with us!
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

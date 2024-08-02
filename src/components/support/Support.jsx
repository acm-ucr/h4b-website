import Connect from "@/components/support/Connect";
import Subtitle from "@/components/Subtitle";
import Button from "@/components/Button";
import { SOCIALS } from "@/data/support/Socials";
import Title from "../Title";
import standing from "@/public/images/standing.webp";
import Image from "next/image";
import Link from "next/link";

const Support = () => {
  return (
    <div className="px-10 bg-biscuits-orange-300">
      <Title text="Support Us" food="croissant" color="gray" />
      <div className="flex flex-wrap gap-x-6 py-14 justify-evenly items-center">
        <Image src={standing} alt="standing" className="pb-4" />
        <div className="flex flex-col items-center gap-y-8 pt-12 md:pt-0">
          <Link href="https://account.venmo.com/u/h4b_ucr">
            <div className="cursor-pointer text-biscuits-brown-200 hover:underline">
              <Subtitle text="Donations" color="text-biscuits-brown-200" />
            </div>
          </Link>
          <Button text="VENMO" link="https://account.venmo.com/u/h4b_ucr" />
          <Link href="http://eepurl.com/iaWAc5">
            <div className="cursor-pointer text-biscuits-brown-200 hover:underline">
              <Subtitle text="Newsletter" color="text-biscuits-brown-200" />
            </div>
          </Link>
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
            <div key={index} className="w-auto px-5">
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
  );
};

export default Support;

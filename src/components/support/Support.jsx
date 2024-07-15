import Connect from "@/components/support/Connect";
import Subtitle from "@/components/Subtitle";
import Button from "@/components/Button";
import { SOCIALS } from "@/data/support/Socials";

const Support = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-y-8">
        <Subtitle color="text-biscuits-brown-200" text="Donations" />
        <Button text="VENMO" link="https://account.venmo.com/u/h4b_ucr" />
        <Subtitle color="text-biscuits-brown-200" text="Newsletter" />
        <Button text="SIGN UP" link="http://eepurl.com/iaWAc5" />
      </div>
      <div className="text-center text-biscuits-brown-200 font-shrikhand text-5xl">
        Connect with us!
        <div className="flex justify-evenly translate-y-5">
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

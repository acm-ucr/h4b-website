import Connect from "@/components/support/Connect";
import { SOCIALS } from "@/data/support/Socials";

const Support = () => {
  return (
    <div className="text-center text-biscuits-brown-200 font-shrikhand text-5xl">
      Connect with us!
      <div className="flex justify-center justify-evenly">
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
  );
};
export default Support;

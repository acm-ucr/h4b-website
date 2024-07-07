import Connect from "@/components/support/Connect";
import { SOCIALS } from "@/data/support/Socials";

const Page = () => {
  return (
    <>
      <div className="text-center text-biscuits-brown-200 font-shrikhand p-1 -translate-y-1 text-3xl">
        {"Connect with us!"}
        <div className="flex space-x-6 justify-center">
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
    </>
  );
};

export default Page;

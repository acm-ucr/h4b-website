import { FOOTER } from "@/data/Footer.js";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex  items-center p-4 bg-biscuits-peach justify-between text-biscuits-purple-200 font-omc text-3xl text-center">
      <div className="flex tracking-widest"> H4B at UCR </div>
      <div className="flex flex-row space-x-5">
        {FOOTER.map((social, index) => (
          <Link key={index} href={social.link}>
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Footer;

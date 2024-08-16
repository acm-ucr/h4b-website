import { FOOTER } from "@/data/Footer.js";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex drop-shadow items-center p-4 bg-biscuits-peach justify-between text-biscuits-purple-200 font-omc text-2xl md:text-3xl text-center">
      <div className="hidden md:flex tracking-widest">H4B at UCR</div>
      <div className="flex md:hidden tracking-widest">H4B</div>
      <div className="flex flex-row space-x-2 md:space-x-5 ">
        {FOOTER.map((social, index) => (
          <Link
            className="transition ease-in-out hover:-translate-y-1"
            key={index}
            href={social.link}
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Footer;

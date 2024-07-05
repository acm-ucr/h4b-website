import { HiLink } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { PiTiktokLogo } from "react-icons/pi";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex w-screen items-center p-2 mt-[10%] bg-biscuits-peach justify-between text-biscuits-purple-200 font-omc text-3xl">
      <div className="flex tracking-widest"> H4B at UCR </div>
      <div className="flex flex-row space-x-2">
        <Link href="mailto: ">
          <IoMdMail />
        </Link>

        <Link href="https://www.tiktok.com/@h4b_ucr?_t=8nGg0Pbrzhu&_r=1">
          <PiTiktokLogo />
        </Link>

        <Link href="https://discord.gg/zPKDGXkqPu">
          <FaDiscord />
        </Link>

        <Link href="https://www.instagram.com/hungry4biscuits_ucr/">
          <AiFillInstagram />
        </Link>

        <Link href="https://highlanderlink.ucr.edu/organization/h4b">
          <HiLink />
        </Link>
      </div>
    </div>
  );
};
export default Footer;

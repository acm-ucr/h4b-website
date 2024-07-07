import { IoMdMail } from "react-icons/io";
import { PiTiktokLogo } from "react-icons/pi";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export const SOCIALS = [
  { name: "Mail", 
    icon: <IoMdMail />, 
    link: "mailto:" 
  },
  {
    name: "TikTok",
    icon: <PiTiktokLogo />,
    link: "https://www.tiktok.com/@h4b_ucr?_t=8nGg0Pbrzhu&_r=1",
  },
  {
    name: "Discord",
    icon: <FaDiscord />,
    link: "https://discord.gg/zPKDGXkqPu",
  },
  {
    name: "Instagram",
    icon: <AiFillInstagram />,
    link: "https://www.instagram.com/hungry4biscuits_ucr/",
  },
];

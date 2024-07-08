import { HiLink } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { PiTiktokLogo } from "react-icons/pi";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
export const footer = [
  {
    // email

    link: "mailto: ",
    icon: <IoMdMail />,
  },
  {
    // tiktok
    link: "https://www.tiktok.com/@h4b_ucr?_t=8nGg0Pbrzhu&_r=1",
    icon: <PiTiktokLogo />,
  },
  {
    // discord
    link: "https://discord.gg/zPKDGXkqPu",
    icon: <FaDiscord />,
  },
  {
    // instagram
    link: "https://www.instagram.com/hungry4biscuits_ucr/",
    icon: <AiFillInstagram />,
  },
  {
    // highlander link
    link: "https://highlanderlink.ucr.edu/organization/h4b",
    icon: <HiLink />,
  },
];

/* eslint-disable new-cap */
/* eslint-disable camelcase */
import "./globals.css";
import { Shrikhand, Odor_Mean_Chey, Inika } from "next/font/google";
import NavBar from "@/components/Navigation";

const shrikhand = Shrikhand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-shrikhand",
});
const omc = Odor_Mean_Chey({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-omc",
});
const inika = Inika({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inika",
});

export const metadata = {
  title: "Hungry 4 Biscuits @ UCR",
  description: "Building a community to combat food insecurity at UCR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inika.className} ${shrikhand.variable} ${omc.variable} `}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}

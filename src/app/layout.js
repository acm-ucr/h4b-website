/* eslint-disable new-cap */
/* eslint-disable camelcase */
import "./globals.css";
import {
  Shrikhand,
  Odor_Mean_Chey,
  Inika,
  Gurajada,
  Fredoka,
} from "next/font/google";
import NavBar from "@/components/Navigation";
import Footer from "@/components/Footer";

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
const gurajada = Gurajada({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gurajada",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
});

export const metadata = {
  title: "Hungry 4 Biscuits @ UCR",
  description: "Building a community to combat food insecurity at UCR",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inika.className} ${shrikhand.variable} ${omc.variable} ${gurajada.variable} ${fredoka.variable}`}
    >
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

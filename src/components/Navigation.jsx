"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/H4B-logo.webp";
import { IoMdMenu } from "react-icons/io";
import { ITEMS } from "@/data/navItems.js";

const NavBar = () => {
  const [selected, setSelected] = useState("");
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="sticky top-0 z-10">
        <div className="bg-biscuits-peach px-8 py-1 flex items-center justify-between">
          <Link
            onClick={() => {
              setSelected("");
            }}
            href="/"
          >
            <Image
              src={logo}
              alt="Logo"
              className="w-32 hover:opacity-60 duration-300"
            />
          </Link>
          <div className="hidden md:flex space-x-4">
            {ITEMS.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                onClick={() => {
                  setSelected(item.name);
                }}
                className={`hover:opacity-60 duration-300 border-solid font-semibold font-gurajada text-4xl ${
                  selected === item.name
                    ? "border-b-2 border-biscuits-purple-200 text-biscuits-purple-200"
                    : "text-biscuits-purple-200"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex md:hidden" onClick={handleNav}>
            <IoMdMenu className="text-3xl text-black hover:cursor-pointer hover:text-biscuits-purple-200" />
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={
            nav
              ? "transition ease-in-out md:hidden flex flex-col items-center justify-evenly w-[100%] duration-500 bg-biscuits-peach space-y-2 pb-2"
              : "hidden"
          }
        >
          {ITEMS.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              onClick={() => {
                setSelected(item.name);
                handleNav();
              }}
              className={`hover:opacity-60 duration-300 border-solid font-semibold font-gurajada text-4xl ${
                selected === item.name
                  ? "border-b-2 border-biscuits-purple-200 text-biscuits-purple-200"
                  : "text-biscuits-purple-200"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;

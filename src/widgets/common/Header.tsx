import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/utils/constant";

export default function Header() {
  return (
    <header className="fixed z-10 top-0 w-full bg-gradient-to-b from-gray-700/60 via-gray-700/40 to-transparent">
      <div className="container mx-auto px-[5vw] py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-red-600 italic">
              ROCK N ROLL
            </span>
            <span className="text-xs font-normal text-white leading-3.5 tracking-[0.27rem] italic">
              Tour planners
            </span>
          </div>
        </Link>

        {/* Menu Items */}
        <nav className="hidden md:flex space-x-8">
          {navLinks?.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {item?.title}
            </Link>
          ))}
        </nav>

        {/* Enquire Button */}
        <Link
          href="/enquire"
          className="px-4 rounded-md py-2 text-white font-medium bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Enquire
        </Link>
      </div>
    </header>
  );
}

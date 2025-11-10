"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/utils/constant";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(0);

  useEffect(() => {
    setVh(window.innerHeight);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isBlurred = scrollY > 10;
  const isWhite = scrollY > vh;

  const bgClass = isWhite
    ? "bg-white"
    : "bg-gradient-to-b from-gray-700/60 via-gray-700/40 to-transparent";
  const blurClass = isBlurred && !isWhite ? "backdrop-blur-md" : "";
  const textClass = isWhite ? "text-black" : "text-white";
  const subtitleClass = isWhite ? "text-gray-600" : "text-white";

  return (
    <header
      className={`fixed z-10 top-0 w-full ${bgClass} ${blurClass} ${textClass} transition-all duration-300`}
    >
      <div className="container mx-auto px-[5vw] py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-1 items-center justify-start">
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
            <span className={`text-xs font-normal ${subtitleClass} leading-3.5 tracking-[0.27rem] italic`}>
              Tour planners
            </span>
          </div>
        </Link>

        {/* Menu Items */}
        <nav className="hidden flex-2 md:flex space-x-8 items-center justify-center">
          {navLinks?.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`${textClass} hover:${isWhite ? "text-gray-700" : "text-gray-300"} transition-colors`}
            >
              {item?.title}
            </Link>
          ))}
        </nav>

        {/* Enquire Button */}
        <div className="flex flex-1 items-center justify-end">
          <Link
            href="/enquire"
            className="px-4 rounded-md py-2 text-white font-medium bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Enquire
          </Link>
        </div>
      </div>
    </header>
  );
}
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, whatsappLink } from "@/utils/constant";
import { ChevronRight, Menu, X } from "lucide-react";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Default to "home"
  const pathname = usePathname();

  useEffect(() => {
    setVh(window.innerHeight);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 Set initial active section from hash on mount (SSR-safe)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "") || "home";
      setActiveSection(hash);
    }
  }, []);

  // 👇 Listen for hash changes (e.g., link clicks, browser back/forward)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleHashChange = () => {
        const hash = window.location.hash.replace("#", "") || "home";
        setActiveSection(hash);
      };
      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);

  // 👇 Intersection Observer for scroll-based updates (fallback/enhancement)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const sections = document.querySelectorAll("section[id]");
      console.log("Observed sections:", sections); // Debug: Log sections
      const observer = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          let bestEntry: IntersectionObserverEntry | null = null;

          for (const entry of entries) {
            if (
              entry.isIntersecting &&
              (!bestEntry ||
                entry.intersectionRatio > bestEntry.intersectionRatio)
            ) {
              bestEntry = entry;
            }
          }

          const visibleSection =
            bestEntry && bestEntry.target instanceof HTMLElement
              ? bestEntry.target.id
              : "";

          if (visibleSection && visibleSection !== activeSection) {
            setActiveSection(visibleSection);
          }
        },
        {
          threshold: 0.1,
          rootMargin: "-80px 0px -60% 0px",
        }
      );

      sections.forEach((section) => observer.observe(section));
      return () => sections.forEach((section) => observer.unobserve(section));
    }
  }, [activeSection]); // Re-run if active changes (for sync)

  // 👇 Reset to "home" only at top with no hash
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      scrollY === 0 &&
      !window.location.hash
    ) {
      setActiveSection("home");
    }
  }, [scrollY]);

  const isBlurred = scrollY > 10;
  const isWhite = scrollY > vh;

  const bgClass = isWhite
    ? "bg-white"
    : "bg-linear-to-b from-gray-700/60 via-gray-700/40 to-transparent";
  const blurClass = isBlurred && !isWhite ? "backdrop-blur-md" : "";
  const textClass = isWhite ? "text-black" : "text-white";
  const subtitleClass = isWhite ? "text-gray-600" : "text-white";

  return (
    <header
      className={`fixed z-50 top-0 w-full ${bgClass} ${blurClass} ${textClass} transition-all duration-300`}
    >
      <div className="container px-[5vw] py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-1 items-center justify-start">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-red-600 italic">
              ROCK N ROLL
            </span>
            <span
              className={`text-xs font-normal ${subtitleClass} leading-3.5 tracking-[0.27rem] italic`}
            >
              Tour planners
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex flex-2 space-x-8 items-center justify-center">
          {navLinks?.map((item, index) => {
            const linkId = item.link.replace("#", "");
            const isActive = activeSection === linkId;

            return (
              <Link
                key={index}
                href={item.link}
                className={`relative transition-colors duration-300 ${
                  isActive
                    ? "text-orange-500 font-semibold"
                    : `${textClass} hover:${
                        isWhite ? "text-gray-700" : "text-gray-300"
                      }`
                }`}
              >
                {item?.title}

                {/* Highlight underline */}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 rounded-full"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Enquire Button */}
        <div className="flex flex-1 items-center justify-end">
          <Link
            target="_blank"
            href={whatsappLink}
            className="hidden lg:inline-block px-4 rounded-md py-2 text-white font-medium bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Enquire
          </Link>

          {/* Drawer Toggle for <lg screens */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden self-end p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            {menuOpen ? (
              <X className={`${textClass} w-6 h-6`} />
            ) : (
              <Menu className={`${textClass} w-6 h-6`} />
            )}
          </button>
        </div>
      </div>

      {/* Drawer (Visible for <lg only) */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-white text-black flex flex-col justify-between transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden shadow-2xl`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-[5vw] py-5 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="mr-1"
            />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-red-600 italic">
                ROCK N ROLL
              </span>
              <span className="text-xs font-normal text-gray-600 leading-3.5 tracking-[0.27rem] italic">
                Tour planners
              </span>
            </div>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-md focus:outline-none"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Drawer Nav Links */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-6 px-[5vw]">
          {navLinks?.map((item, index) => {
            const linkId = item.link.replace("#", "");
            const isActive = activeSection === linkId;

            return (
              <div
                key={index}
                className="flex flex-row items-center justify-between w-full"
              >
                <Link
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className={`text-2xl font-semibold transition-colors ${
                    isActive
                      ? "text-red-500"
                      : "text-gray-800 hover:text-red-500"
                  }`}
                >
                  {item.title}
                </Link>
                <ChevronRight className="text-gray-500" />
              </div>
            );
          })}

          <Link
            href={whatsappLink}
            target="_blank"
            onClick={() => setMenuOpen(false)}
            className="mt-6 px-6 py-3 rounded-md w-full flex items-center justify-center bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white transition-all duration-300 font-semibold shadow-lg"
          >
            Enquire
          </Link>
        </div>

        {/* Drawer Footer */}
        <div className="text-center text-gray-500 text-sm py-5 border-t border-gray-200">
          © {new Date().getFullYear()} Rock N Roll Tour Planners. <br />
          <span className="text-gray-600">
            Crafted by{" "}
            <span className="text-red-500 font-semibold">
              Beyond Innovations
            </span>
          </span>
        </div>
      </div>
    </header>
  );
}

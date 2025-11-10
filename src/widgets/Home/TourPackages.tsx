"use client";
import React from "react";
import { motion } from "motion/react";
import { Award } from "lucide-react";
import { PackageCard } from "./components/PackageCard";

export default function TourPackages() {
  const packages = [
    {
      image:
        "https://images.unsplash.com/photo-1736228077374-4071eee51781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIYW1waSUyMHJ1aW5zJTIwSW5kaWF8ZW58MXx8fHwxNzYyNTE0MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Industrial & Educational Tour",
      duration: "3-5 Days",
      groupSize: "20-50 Students",
      features: [
        "Factory & plant visits with guided tours",
        "Educational workshops & seminars",
        "Historical site explorations (Hampi, Mysore)",
        "Accommodation & meals included",
        "Expert guides & safety measures",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1666891717987-7509e81db05a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW5uYXIlMjB0ZWElMjBwbGFudGF0aW9uc3xlbnwxfHx8fDE3NjI1ODAxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Family Hill Station Package",
      duration: "4-6 Days",
      groupSize: "4-15 People",
      features: [
        "Munnar, Ooty & Kodaikanal options",
        "Comfortable family accommodations",
        "Sightseeing & nature walks",
        "Tea/coffee plantation tours",
        "Kid-friendly activities",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1702665612461-baf61de29cb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEYW5kZWxpJTIwcml2ZXIlMjBJbmRpYXxlbnwxfHx8fDE3NjI1ODExMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Adventure & Beach Getaway",
      duration: "3-4 Days",
      groupSize: "6-25 People",
      features: [
        "Goa beaches & water sports",
        "Dandeli river rafting & trekking",
        "Group bonding activities",
        "Adventure sports with safety gear",
        "Beach resorts & camping options",
      ],
    },
  ];

  return (
    <div className="flex flex-col px-[5vw] items-center justify-center">
      <motion.div
        className="inline-block mb-4"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        // viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-orange-100 to-red-100 rounded-full">
          <Award className="h-4 w-4 text-orange-600" />
          <span className="text-orange-700">Tour Packages</span>
        </div>
      </motion.div>
      <h2 className="text-gray-900 mb-4">
        <span className="bg-linear-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
          Tailored Experiences
        </span>{" "}
        For Every Journey
      </h2>
      <p className="text-gray-600 mx-auto">
        Specialized packages for industrial visits, family tours, school trips,
        and adventure getaways
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {packages.map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>
    </div>
  );
}

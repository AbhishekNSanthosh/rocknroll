"use client";
import React from "react";
import { motion } from "motion/react";
import { Compass } from "lucide-react";
import { DestinationCard } from "./components/DestinationCards";

export default function Destinations() {
  const destinations = [
    {
      image:
        "https://images.unsplash.com/photo-1666891717987-7509e81db05a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW5uYXIlMjB0ZWElMjBwbGFudGF0aW9uc3xlbnwxfHx8fDE3NjI1ODAxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Munnar",
      location: "Kerala",
      rating: 4.9,
      reviews: 1250,
      description:
        "Lush tea plantations, misty hills, and scenic waterfalls perfect for family getaways.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1663848018507-accf7c6a2ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2ElMjBiZWFjaCUyMEluZGlhfGVufDF8fHx8MTc2MjUxMzM0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Goa",
      location: "Beach Paradise",
      rating: 4.8,
      reviews: 982,
      description:
        "Stunning beaches, water sports, and vibrant culture ideal for school trips.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1702665612461-baf61de29cb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEYW5kZWxpJTIwcml2ZXIlMjBJbmRpYXxlbnwxfHx8fDE3NjI1ODExMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Dandeli",
      location: "Karnataka",
      rating: 5.0,
      reviews: 1456,
      description:
        "Adventure hub with river rafting, wildlife safaris, and outdoor activities.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1736228077374-4071eee51781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIYW1waSUyMHJ1aW5zJTIwSW5kaWF8ZW58MXx8fHwxNzYyNTE0MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Hampi",
      location: "Karnataka",
      rating: 4.7,
      reviews: 876,
      description:
        "UNESCO World Heritage Site with ancient ruins and rich historical significance.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1669711294933-12a8bb8bd7c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb2RhaWthbmFsJTIwbGFrZSUyMEluZGlhfGVufDF8fHx8MTc2MjU4MTExMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Kodaikanal",
      location: "Tamil Nadu",
      rating: 4.8,
      reviews: 1120,
      description:
        "Serene hill station with pristine lakes and pleasant climate year-round.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1694537623072-a1172819c577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb29yZyUyMGNvZmZlZSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzYyNTA2OTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Coorg",
      location: "Karnataka",
      rating: 4.9,
      reviews: 1340,
      description:
        "Coffee plantations, lush forests, and tranquil atmosphere for relaxation.",
    },
  ];

  return (
    <section id="destinations">
      <div className="px-[5vw] pt-[15vh]">
        <div className="w-full items-center justify-center flex flex-col">
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            //   viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-orange-100 to-red-100 rounded-full">
              <Compass className="h-4 w-4 text-orange-600" />
              <span className="text-orange-700">Explore Destinations</span>
            </div>
          </motion.div>
          <h2 className="text-gray-900 mb-4">
            <span className="bg-linear-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Discover Paradise
            </span>{" "}
            Across South India
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of India's most breathtaking
            destinations
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

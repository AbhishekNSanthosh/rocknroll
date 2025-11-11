"use client";

import {
  MapPin,
  Star,
  ArrowRight,
  X,
  Compass,
  Calendar,
  Users,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { whatsappLink } from "@/utils/constant";

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  description: string;
}

export function DestinationCard({
  image,
  title,
  location,
  rating,
  reviews,
  description,
}: DestinationCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const highlights = [
    "Expert local guides",
    "Comfortable transportation",
    "Customizable itineraries",
    "Best seasonal experiences",
    "Safety certified tours",
    "Group discounts available",
  ];

  return (
    <>
      {/* CARD */}
      <motion.div
        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -12 }}
      >
        {/* Image Section */}
        <div className="relative h-72 overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

          {/* Rating Badge */}
          <motion.div
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-2 rounded-full shadow-lg flex items-center gap-1.5"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-gray-900">{rating}</span>
          </motion.div>

          {/* Location */}
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center gap-2">
            <MapPin className="h-4 w-4 text-orange-500" />
            <span className="text-gray-800">{location}</span>
          </div>
        </div>

        {/* Text Content */}
        <div className="p-6">
          <h3 className="text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-gray-500">
              {/* Rounded Avatars */}
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    src={image}
                    alt="tour"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
                    alt="traveller"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
                    alt="guide"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* <span className="ml-2 text-sm">Trusted Choice</span> */}
            </div>

            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 text-orange-600 hover:text-orange-700 group/btn"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore</span>
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </div>

        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-linear-to-br from-orange-500/20 via-transparent to-red-500/20" />
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
              >
                <X className="h-5 w-5 text-gray-700" />
              </button>

              <div className="overflow-y-auto max-h-[90vh]">
                {/* Hero */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="h-5 w-5 text-white" />
                      <span className="text-white">{location}</span>
                    </div>
                    <h2 className="text-white mb-2">{title}</h2>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-gray-900">{rating}</span>
                      </div>
                      <span className="text-white/90">{reviews}+ reviews</span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-8">
                  <div className="mb-8">
                    <h3 className="text-gray-900 mb-3 flex items-center gap-2">
                      <Compass className="h-5 w-5 text-orange-600" />
                      About {title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h3 className="text-gray-900 mb-4">Tour Highlights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-center gap-3 bg-linear-to-r from-orange-50 to-red-50 p-3 rounded-xl"
                        >
                          <div className="w-2 h-2 rounded-full bg-linear-to-r from-orange-500 to-red-500" />
                          <span className="text-gray-700">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Info Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-gray-50 p-4 rounded-xl text-center">
                      <Calendar className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                      <div className="text-gray-900 mb-1">Best Time</div>
                      <div className="text-gray-600">Year Round</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl text-center">
                      <Users className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                      <div className="text-gray-900 mb-1">Ideal For</div>
                      <div className="text-gray-600">Families & Groups</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl text-center">
                      <Compass className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                      <div className="text-gray-900 mb-1">Duration</div>
                      <div className="text-gray-600">3–7 Days</div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link target="_blank" href={whatsappLink} className="flex-1 flex items-center justify-center py-3 bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white h-12 rounded-xl shadow-lg">
                      Enquire Now
                    </Link>
                    <button
                      className="flex-1 border-2 py-3 border-orange-500 text-orange-600 hover:bg-orange-50 h-12 rounded-xl"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { motion } from "motion/react";
import { ImageWithFallback } from "../common/ImageFallBack";
import { Camera } from "lucide-react";

const galleryItems = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1639763703351-c27defbb51b1?auto=format&q=80&w=1080",
    alt: "Travel group tourists",
  },
  {
    type: "video",
    src: "https://www.shutterstock.com/shutterstock/videos/3735136207/preview/stock-footage-top-hill-village-drone-view-india-kerala-munnar.webm",

    alt: "School trip students",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1656232958764-683fafca08c8?auto=format&q=80&w=1080",
    alt: "Family vacation in India",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1673995995468-f39e8ca9e839?auto=format&q=80&w=1080",
    alt: "Industrial factory tour",
  },
  {
    type: "video",
    src: "https://www.shutterstock.com/shutterstock/videos/3779690547/preview/stock-footage-dancing-cranes-showcase-elegant-movements-at-sunset-near-a-tranquil-wetland-habitat.webm",

    alt: "Adventure trekking group",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1625023455567-09b002682d1d?auto=format&q=80&w=1080",
    alt: "Waterfall nature",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1679841665700-2c962e7e652a?auto=format&q=80&w=1080",
    alt: "Temple heritage",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1622993003590-17208f5e3441?auto=format&q=80&w=1080",
    alt: "Beach sunset",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1666891717987-7509e81db05a?auto=format&q=80&w=1080",
    alt: "Munnar tea plantations",
  },
  {
    type: "video",
    src: "https://www.shutterstock.com/shutterstock/videos/3748019713/preview/stock-footage-bogmalo-beach-goa-india-a-typical-view-of-people-enjoying-the-sunset-at-bogmalo.webm",
    alt: "Hampi ruins",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1702665612461-baf61de29cb2?auto=format&q=80&w=1080",
    alt: "Dandeli river rafting",
  },
  {
    type: "video",
    src: "https://www.shutterstock.com/shutterstock/videos/3779690547/preview/stock-footage-dancing-cranes-showcase-elegant-movements-at-sunset-near-a-tranquil-wetland-habitat.webm",
    alt: "Hampi ruins",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1669711294933-12a8bb8bd7c3?auto=format&q=80&w=1080",
    alt: "Kodaikanal lake",
  },
  {
    type: "video",
    src: "https://www.shutterstock.com/shutterstock/videos/3737929107/preview/stock-footage-canacona-goa-india-february-people-resting-on-palolem-beach-at-sunny-summer-day-under.webm",
    alt: "Hampi ruins",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="pt-[7vh]">
      <div className="px-[1vw]">
        {/* Header */}
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            // viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-orange-100 to-red-100 rounded-full">
              <Camera className="h-4 w-4 text-orange-600" />
              <span className="text-orange-700">Captured Moments</span>
            </div>
          </motion.div>

          <h2 className="text-gray-900 mb-4 text-3xl font-semibold">
            <span className="bg-linear-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Journey Through
            </span>{" "}
            Our Adventures
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Witness the unforgettable moments from our tours across breathtaking
            destinations.
          </p>
        </motion.div>

        {/* Pinterest Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-4 gap-3 [column-fill:balance]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative mb-3 break-inside-avoid overflow-hidden cursor-pointer group rounded-[20px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {/* Render Image or Video */}
              {item.type === "video" ? (
                <video
                  src={item.src || ""}
                  muted
                  playsInline
                  autoPlay
                  loop
                  preload="auto"
                  className="w-full h-auto object-cover rounded-[20px] transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <ImageWithFallback
                  src={item.src || ""}
                  alt={item.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 rounded-[20px]"
                />
              )}

              {/* Overlay Text */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px]">
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

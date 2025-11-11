"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ContactRound, Heart } from "lucide-react";

export default function Contact() {
  // WhatsApp number (no spaces or + sign)
  const whatsappNumber = "918848774596";
  const whatsappMessage = encodeURIComponent(
    "Hi Rock N Roll Tour Planners, I’d like to plan my next adventure with you!"
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="pt-[5vh]">
      <div className="py-20 bg-gradient-to-r from-orange-500 to-red-500 relative overflow-hidden text-center">
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Badge */}
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-orange-100 to-red-100 rounded-full shadow-sm">
              <ContactRound className="h-4 w-4 text-orange-600" />
              <span className="text-orange-700 font-medium">
               Contact Us
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2 className="text-white mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} > {" "} Let's Rock Your Next{" "} <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full"> {" "} Adventure{" "} </span>{" "} </motion.h2>

          {/* Description */}
          <motion.p
            className="text-white/90 mb-10 max-w-2xl text-lg sm:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Get in touch with our travel experts today and let us help plan your
            perfect group tour, industrial visit, or family getaway.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* WhatsApp Button */}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-orange-600 rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg text-center font-medium"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us on WhatsApp
            </motion.a>

            {/* View Destinations */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#destinations"
                className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white/10 transition-all duration-300 font-medium inline-block"
              >
                View Destinations
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

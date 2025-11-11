"use client";

import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Send,
  Globe,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-gray-900 via-gray-900 to-black text-gray-300 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute -top-24 -left-24 w-96 h-96 bg-linear-to-r from-orange-500 to-red-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-linear-to-l from-orange-500 to-red-500 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Newsletter Section */}

      <div className="relative px-[5vw] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <motion.div
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-orange-500 to-red-500 rounded-full blur-lg opacity-50"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <img
                  src={"/logo.png"}
                  alt="Rock N Roll Tour Planners"
                  className="h-14 w-14 object-contain relative z-10"
                />
              </div>
              <span className="text-white">Rock N Roll Tour Planners</span>
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for industrial visits, family tours, and
              group adventures across South India. Let's rock your next journey!
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-linear-to-r hover:from-orange-500 hover:to-red-500 transition-all duration-300"
                  whileHover={{ scale: 1.15, rotate: 5, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white mb-6 relative inline-block">
              Quick Links
              <motion.div
                className="absolute -bottom-2 left-0 h-0.5 bg-linear-to-r from-orange-500 to-red-500"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Destinations", href: "#destinations" },
                { label: "Packages", href: "#packages" },
                { label: "About Us", href: "#about" },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <motion.a
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div className="w-0 h-0.5 bg-linear-to-r from-orange-500 to-red-500 group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Popular Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white mb-6 relative inline-block">
              Popular Destinations
              <motion.div
                className="absolute -bottom-2 left-0 h-0.5 bg-linear-to-r from-orange-500 to-red-500"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Munnar, Kerala", icon: "🍃" },
                { label: "Goa Beaches", icon: "🏖️" },
                { label: "Dandeli, Karnataka", icon: "🚣" },
                { label: "Hampi, Karnataka", icon: "🏛️" },
              ].map((dest, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <motion.a
                    href="#"
                    className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-lg">{dest.icon}</span>
                    {dest.label}
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white mb-6 relative inline-block">
              Get in Touch
              <motion.div
                className="absolute -bottom-2 left-0 h-0.5 bg-linear-to-r from-orange-500 to-red-500"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
            </h4>
            <ul className="space-y-4">
              <motion.li
                className="flex items-center gap-3 group"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-linear-to-r group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300">
                  <MapPin className="h-5 w-5 text-orange-500 group-hover:text-white" />
                </div>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Kerala • Karnataka • Goa
                </span>
              </motion.li>
              <motion.li
                className="flex items-center gap-3 group"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="tel:+918848774596"
                  className="flex items-center gap-3 no-underline"
                >
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300">
                    <Phone className="h-5 w-5 text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    +91 88487 74596
                  </span>
                </a>
              </motion.li>

              <motion.li
                className="flex items-center gap-3 group"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-linear-to-r group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300">
                  <Mail className="h-5 w-5 text-orange-500 group-hover:text-white" />
                </div>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  rocknrolltourplanners@gmail.com
                </span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-16 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 Rock N Roll Tour Planners. All rights reserved.
            </p>

            <div className="flex items-center gap-6">

              <motion.a
                href="https://wa.me/917907247909?text=Hi%20Beyond%20Innovations%20👋"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-400 hover:text-orange-500 transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                <span>Crafted by</span>
                <span className="font-semibold text-orange-500">
                  Beyond Innovations
                </span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

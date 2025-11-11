"use client"
import React from "react";
import { motion } from "motion/react";
import { Compass, HeadphonesIcon, MapPinned, Shield, Users, Award, Calendar, Users as UsersIcon } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="pt-[15vh]">
      <div className="px-[5vw]">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-orange-100 to-red-100 rounded-full">
              <Shield className="h-4 w-4 text-orange-600" />
              <span className="text-orange-700">Why Rock N Roll</span>
            </div>
          </motion.div>
          <h2 className="text-gray-900 mb-4">
            Your Journey,{" "}
            <span className="bg-linear-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Our Passion
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're committed to making your travel dreams a reality with unmatched service
          </p>

          {/* Added: Company Story */}
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in the misty hills of the Western Ghats, Rock N Roll Tour Planners was born from a group of adventure enthusiasts who traded corporate desks for untrodden paths. With over a decade of crafting unforgettable escapades, we've transformed ordinary trips into legendary tales for thousands of explorers. From serene tea estates to adrenaline-fueled treks, our story is woven into every journey we design—because travel isn't just about destinations; it's about the rhythm of discovery.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Calendar className="h-4 w-4 inline mr-1" /> 5+ Years Experience
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <UsersIcon className="h-4 w-4 inline mr-1" /> 5000+ Happy Travelers
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Award className="h-4 w-4 inline mr-1" /> 100+ Destinations
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        {/* Added: Stats Row */}
        <motion.div
          className="grid grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
        >
          <motion.div
            className="text-center"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl font-bold text-orange-600 mb-2">5000+</div>
            <p className="text-gray-600">Happy Travelers</p>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl font-bold text-red-600 mb-2">100+</div>
            <p className="text-gray-600">Destinations Explored</p>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl font-bold text-pink-600 mb-2">98%</div>
            <p className="text-gray-600">Customer Satisfaction</p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-r from-orange-100 to-red-100 rounded-full mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Compass className="h-8 w-8 text-orange-600" />
            </motion.div>
            <h3 className="text-gray-900 mb-2">Expert Guides</h3>
            <p className="text-gray-600">
              Experienced professionals who know every destination inside out
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-r from-orange-100 to-red-100 rounded-full mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Shield className="h-8 w-8 text-orange-600" />
            </motion.div>
            <h3 className="text-gray-900 mb-2">Safe & Secure</h3>
            <p className="text-gray-600">
              Your safety is our priority with comprehensive travel insurance
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-r from-orange-100 to-red-100 rounded-full mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MapPinned className="h-8 w-8 text-orange-600" />
            </motion.div>
            <h3 className="text-gray-900 mb-2">Custom Itineraries</h3>
            <p className="text-gray-600">
              Personalized trips tailored to your group's unique needs
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-r from-orange-100 to-red-100 rounded-full mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <HeadphonesIcon className="h-8 w-8 text-orange-600" />
            </motion.div>
            <h3 className="text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Round-the-clock assistance whenever you need it
            </p>
          </motion.div>
        </div>

        {/* Added: Quick Testimonial */}
        
      </div>
    </section>
  );
}
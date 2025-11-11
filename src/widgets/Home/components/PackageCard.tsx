"use client";

import { ImageWithFallback } from "@/widgets/common/ImageFallBack";
import {
  Clock,
  Users,
  CheckCircle,
  Sparkles,
  ArrowRight,
  X,
  Mail,
  Phone,
  User,
  Calendar,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { whatsappLink } from "@/utils/constant";

interface PackageCardProps {
  image: string;
  title: string;
  duration: string;
  groupSize: string;
  features: string[];
  popular?: boolean;
}

export function PackageCard({
  image,
  title,
  duration,
  groupSize,
  features,
  popular = false,
}: PackageCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    groupSize: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry! Our team will contact you shortly.");
    setIsModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      travelDate: "",
      groupSize: "",
      message: "",
    });
  };

  return (
    <>
      <motion.div
        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -12 }}
      >
        {/* Popular Badge */}
        {popular && (
          <motion.div
            className="absolute top-4 left-4 z-10 bg-linear-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Sparkles className="h-4 w-4" />
            <span>Popular</span>
          </motion.div>
        )}

        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-gray-900 mb-5 group-hover:text-orange-600 transition-colors duration-300">
            {title}
          </h3>

          <div className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 text-gray-700 bg-gray-50 group-hover:bg-orange-50 px-3 py-2.5 rounded-xl transition-all duration-300"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                // viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <CheckCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={whatsappLink}
              target="_blank"
              // onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full h-12 rounded-xl group/btn"
            >
              <span>Request Package</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* linear Border Effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-orange-500/20 via-transparent to-red-500/20" />
        </div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-orange-500/10 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
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
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

                  {popular && (
                    <div className="absolute top-4 left-4 bg-linear-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      <span>Popular Choice</span>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h2 className="text-white mb-3">{title}</h2>
                    <div className="flex items-center gap-4 text-white">
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                        <Clock className="h-4 w-4" />
                        <span>{duration}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                        <Users className="h-4 w-4" />
                        <span>{groupSize}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Left - Details */}
                  <div>
                    <h3 className="text-gray-900 mb-4">Package Includes</h3>
                    <div className="space-y-3 mb-6">
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start gap-3 bg-linear-to-r from-orange-50 to-red-50 p-3 rounded-xl"
                        >
                          <CheckCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h4 className="text-gray-900 mb-2">
                        Why Choose This Package?
                      </h4>
                      <p className="text-gray-600">
                        Carefully curated for the best experience. Our expert
                        team ensures every detail is perfect, from accommodation
                        to activities. Flexible itineraries and dedicated
                        support throughout your journey.
                      </p>
                    </div>
                  </div>

                  {/* Right - Form */}
                  <div>
                    <h3 className="text-gray-900 mb-4">Request This Package</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-gray-700 mb-2">
                          <User className="inline h-4 w-4 mr-1" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2">
                          <Mail className="inline h-4 w-4 mr-1" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2">
                          <Phone className="inline h-4 w-4 mr-1" />
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 mb-2">
                            <Calendar className="inline h-4 w-4 mr-1" />
                            Travel Date
                          </label>
                          <input
                            type="date"
                            value={formData.travelDate}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                travelDate: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 mb-2">
                            <Users className="inline h-4 w-4 mr-1" />
                            Group Size
                          </label>
                          <input
                            type="number"
                            value={formData.groupSize}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                groupSize: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                            placeholder="10"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2">
                          Additional Message
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
                          placeholder="Tell us about your requirements..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white h-12 rounded-xl shadow-lg"
                      >
                        Submit Enquiry
                      </button>
                    </form>
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

"use client";

import {
  Star,
  Quote,
  Heart,
  BadgeCheck,
  Users,
  GraduationCap,
  Building2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Principal",
    organization: "Delhi Public School",
    rating: 5,
    category: "School Trip",
    categoryIcon: GraduationCap,
    text: "Organized our school trip to Hampi and Dandeli with 50 students. Excellent arrangements, safety measures, and educational value. Rock N Roll made it incredibly smooth and hassle-free. The students had an enriching experience!",
    avatar: "PS",
    linear: "from-purple-400 to-pink-500",
    verified: true,
  },
  {
    name: "Rajesh Kumar",
    role: "HR Manager",
    organization: "Tech Corp India",
    rating: 5,
    category: "Industrial Visit",
    categoryIcon: Building2,
    text: "Our industrial visit to manufacturing units in Karnataka was perfectly planned. The team coordinated everything seamlessly for our group of 40 employees. Professional, punctual, and accommodating to all our special requests.",
    avatar: "RK",
    linear: "from-blue-400 to-cyan-500",
    verified: true,
  },
  {
    name: "Anita Menon",
    role: "Parent",
    organization: "Bangalore",
    rating: 5,
    category: "Family Tour",
    categoryIcon: Users,
    text: "Had an amazing family vacation to Munnar and Kodaikanal. The itinerary was perfect for kids and adults. Every detail was thoughtfully planned. Thank you Rock N Roll for the wonderful memories that we will cherish forever!",
    avatar: "AM",
    linear: "from-orange-400 to-red-500",
    verified: true,
  },
  {
    name: "Vikram Reddy",
    role: "Team Lead",
    organization: "Startup Hub",
    rating: 5,
    category: "Industrial Visit",
    categoryIcon: Building2,
    text: "Fantastic experience with our team outing to Coorg and surrounding areas. The activities were well-chosen and the accommodation was top-notch. Highly recommend for corporate team building events!",
    avatar: "VR",
    linear: "from-green-400 to-emerald-500",
    verified: true,
  },
  {
    name: "Sunita Iyer",
    role: "Vice Principal",
    organization: "Kendriya Vidyalaya",
    rating: 5,
    category: "School Trip",
    categoryIcon: GraduationCap,
    text: "Exceptional service for our annual school excursion to Goa. 80 students and 10 teachers were managed brilliantly. Safety protocols were exemplary. Will definitely book again for our next trip!",
    avatar: "SI",
    linear: "from-indigo-400 to-purple-500",
    verified: true,
  },
  {
    name: "Arjun Patel",
    role: "Family Head",
    organization: "Mumbai",
    rating: 5,
    category: "Family Tour",
    categoryIcon: Users,
    text: "Took our extended family of 12 people to Hampi and Dandeli. The tour was perfectly paced with activities for all age groups. Our elderly parents were especially well taken care of. Outstanding service!",
    avatar: "AP",
    linear: "from-yellow-400 to-orange-500",
    verified: true,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, slidesToShow, isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - slidesToShow : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= testimonials.length - slidesToShow ? 0 : prev + 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + slidesToShow
  );
  if (visibleTestimonials.length < slidesToShow) {
    visibleTestimonials.push(
      ...testimonials.slice(0, slidesToShow - visibleTestimonials.length)
    );
  }

  return (
    <section className="py-[15vh]  relative overflow-hidden" id="stories">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-orange-100/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-tl from-red-100/30 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            // viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-orange-100 to-red-100 rounded-full">
              <Heart className="h-4 w-4 text-orange-600" />
              <span className="text-orange-700">Client Stories</span>
            </div>
          </motion.div>
          <h2 className="text-gray-900 mb-4">
            <span className="bg-linear-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Voices of Joy
            </span>{" "}
            From Our Travelers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have experienced
            unforgettable journeys with us
          </p>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-2 mb-8">
          <motion.button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-gray-700 hover:text-orange-600 transition-all duration-300 border border-gray-100"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9, rotate: -15 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-gray-700 hover:text-orange-600 transition-all duration-300 border border-gray-100"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9, rotate: 15 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="relative overflow-hidden mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {visibleTestimonials.map((testimonial, index) => {
                const CategoryIcon = testimonial.categoryIcon;
                const actualIndex = testimonials.indexOf(testimonial);
                return (
                  <motion.div
                    key={`${actualIndex}-${currentIndex}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                    className="relative bg-linear-to-br from-white to-gray-50/50 rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -6 }}
                  >
                    {/* Left Accent Bar */}
                    <div
                      className={`absolute left-0 top-8 bottom-8 w-1 bg-linear-to-b ${testimonial.linear} rounded-r-full`}
                    />

                    {/* Category & Verified */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <CategoryIcon className="h-4 w-4 text-orange-500" />
                        <span className="text-sm">{testimonial.category}</span>
                      </div>
                      {testimonial.verified && (
                        <BadgeCheck className="h-5 w-5 text-blue-500" />
                      )}
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="mb-8 relative">
                      <Quote className="absolute -left-2 -top-2 h-12 w-12 text-orange-500/10" />
                      <p className="text-gray-700 leading-relaxed relative pl-6">
                        {testimonial.text}
                      </p>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-full bg-linear-to-br ${testimonial.linear} flex items-center justify-center text-white shrink-0`}
                      >
                        <span>{testimonial.avatar}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-gray-900 truncate">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-500 text-sm truncate">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({
              length: Math.ceil(testimonials.length / slidesToShow),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * slidesToShow)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / slidesToShow) === index
                    ? "bg-orange-500 w-8"
                    : "bg-orange-200 hover:bg-orange-300 w-2"
                }`}
                aria-label={`Go to testimonial set ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: "5000+", label: "Happy Travelers" },
            { number: "500+", label: "Tours Completed" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "98%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-gray-900 mb-2 bg-linear-to-r from-orange-500 to-red-500 bg-clip-text">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

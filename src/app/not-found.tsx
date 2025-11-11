"use client";
import React from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 text-gray-800 px-6">
      {/* Floating Gradient Circle */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-20 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* 404 Text */}
      <motion.h1
        className="text-[10rem] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600 drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        className="text-2xl font-semibold text-gray-700 mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>

      <motion.p
        className="text-gray-500 text-center mb-8 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        It might have been removed, renamed, or never existed in the first place.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <Link href="/">
          <button className="px-8 py-3 bg-linear-to-r from-orange-500 to-red-500 text-white text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
            <Home className="h-5 w-5" />
            Go Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

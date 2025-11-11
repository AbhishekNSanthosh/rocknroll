"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  CalendarDays,
  Users,
  Star,
  MapPin,
  TrendingUp,
  Send,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { whatsappLink } from "@/utils/constant";

export default function Hero() {
  // Form state
  const [form, setForm] = useState({
    destination: "",
    date: "",
    guests: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // Handle WhatsApp submission
  const handleSubmit = () => {
    const { destination, date, guests } = form;

    const message = `🌍 *New Trip Enquiry from Rock N Roll Website*\n\n` +
      `🗺️ *Destination:* ${destination || "Not specified"}\n` +
      `📅 *Date:* ${date || "Not selected"}\n` +
      `👥 *Guests:* ${guests || "Not specified"}\n\n` +
      `Hi Rock N Roll Tour Planners, I’d like to plan this trip!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "918848774596";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="home">
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://i.pinimg.com/1200x/95/04/d2/9504d2fe72e0219dd0d41a5c4a4cb528.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />

        {/* linear Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-transparent" />

        {/* Main Content */}
        <div className="absolute inset-0 flex items-center justify-center px-[5vw]">
          <div className="w-full flex flex-col lg:flex-row gap-10 items-center justify-between">
            {/* Left Section */}
            <div className="flex-1 max-w-full lg:max-w-[40vw] space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-1" />
                Premium Travel Experiences
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Rock Your World
                <br />
                <span className="text-orange-400">with Epic Adventures</span>
              </h1>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-[90%] mx-auto lg:mx-0">
                Specialized tours for industrial visits, family getaways, school
                trips, and adventure expeditions across South India&apos;s most
                beautiful destinations.
              </p>

              <div className="grid grid-cols-3 gap-4 max-w-[90%] mx-auto lg:mx-0">
                {[
                  { icon: Star, label: "Rating", value: "4.9" },
                  { icon: Users, label: "Group Tours", value: "500+" },
                  { icon: TrendingUp, label: "Destinations", value: "50+" },
                ].map(({ icon: Icon, label, value }, i) => (
                  <div
                    key={i}
                    className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                  >
                    <Icon className="w-5 h-5 text-orange-400 mx-auto mb-1" />
                    <p className="text-white text-sm sm:text-base font-semibold">
                      {value}
                    </p>
                    <p className="text-white/70 text-xs">{label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 max-w-[90%] mx-auto lg:mx-0">
                <Link
                  target="_blank"
                  href={whatsappLink}
                  className="flex-1 cursor-pointer bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 duration-300 hover:scale-105 text-white py-3 px-6 rounded-full font-semibold transition-all flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Start Your Journey
                </Link>
                <Link
                  href="#packages"
                  className="flex-1 flex items-center justify-center cursor-pointer bg-white/10 backdrop-blur-sm text-white py-3 px-6 rounded-full border-2 border-white/30 font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  View Packages
                </Link>
              </div>
            </div>

            {/* Right Section — Form */}
            <div className="flex-1 w-full max-w-full lg:max-w-[40vw] mt-10 lg:mt-0 hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 sm:p-6 space-y-4">
                <h2 className="text-2xl font-bold text-white text-center lg:text-left">
                  Plan Your Trip
                </h2>
                <p className="text-white/80 text-sm text-center lg:text-left">
                  Fill in your details and we&apos;ll get back to you
                </p>

                {/* Form Fields */}
                <div className="space-y-3">
                  <div className="flex items-center border p-3 rounded-lg border-white/20 bg-white/10">
                    <MapPin className="w-5 h-5 text-white/60" />
                    <input
                      type="text"
                      placeholder="Where do you want to go?"
                      value={form.destination}
                      onChange={(e) =>
                        handleChange("destination", e.target.value)
                      }
                      className="w-full outline-none placeholder-white/60 pl-2 text-white bg-transparent"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row w-full gap-3">
                    <div className="relative flex-1">
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => handleChange("date", e.target.value)}
                        className="w-full bg-white/10 text-white placeholder-white/60 p-3 rounded-lg border border-white/20 backdrop-blur-sm focus:outline-none focus:border-orange-400
                        [&::-webkit-calendar-picker-indicator]:opacity-0
                        [&::-webkit-calendar-picker-indicator]:absolute
                        [&::-webkit-calendar-picker-indicator]:w-full
                        [&::-webkit-calendar-picker-indicator]:h-full
                        [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                      />
                      <CalendarDays className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60 pointer-events-none" />
                    </div>

                    <div className="relative flex-1">
                      <input
                        type="number"
                        min="1"
                        value={form.guests}
                        onChange={(e) => handleChange("guests", e.target.value)}
                        className="w-full bg-white/10 text-white placeholder-white/60 p-3 rounded-lg border border-white/20 backdrop-blur-sm focus:outline-none focus:border-orange-400"
                        placeholder="Guests"
                      />
                      <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white h-14 rounded-xl shadow-xl shadow-orange-500/50 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Enquiry
                </button>

                {/* Bottom Note */}
                <div className="w-full h-[1px] bg-white/20 mt-6" />
                <div className="flex items-center justify-center lg:justify-start space-x-2 pt-2 flex-wrap">
                  <div className="flex items-center space-x-[-10px]">
                    {[1, 2, 3, 4].map((_, i) => (
                      <div
                        key={i}
                        className="w-9 h-9 rounded-full overflow-hidden border-2 border-orange-400"
                      >
                        <Image
                          src="https://i.pinimg.com/1200x/95/04/d2/9504d2fe72e0219dd0d41a5c4a4cb528.jpg"
                          alt="Traveler"
                          width={60}
                          height={60}
                          className="object-cover w-full h-full"
                          priority
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-white/70 text-sm">
                    Join 500+ successful group tours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

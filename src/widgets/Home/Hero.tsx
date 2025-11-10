import React from "react";
import Image from "next/image";
import {
  ChevronDown,
  Calendar,
  Users,
  Star,
  MapPin,
  User,
  TrendingUp,
  Send,
  Sparkles,
  LocateIcon,
  CalendarDays,
} from "lucide-react";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://i.pinimg.com/1200x/95/04/d2/9504d2fe72e0219dd0d41a5c4a4cb528.jpg"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlay — smooth cinematic fade */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-transparent" />

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="w-full px-[4vw] flex flex-col lg:flex-row gap-8 items-center justify-between">
          {/* Left Section */}
          <div className="flex-1 max-w-[40vw] space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-1" />
              Premium Travel Experiences
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight ">
              Rock Your World
              <br />
              <span className="text-orange-400">with Epic Adventures</span>
            </h1>

            {/* Description */}
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              Specialized tours for industrial visits, family getaways, school
              trips, and adventure expeditions across South India&apos;s most
              beautiful destinations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="flex items-center justify-center mb-1">
                  <Star className="w-5 h-5 text-orange-400" />
                </div>
                <p className="text-white text-sm font-semibold">4.9</p>
                <p className="text-white/70 text-xs">Rating</p>
              </div>
              <div className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="flex items-center justify-center mb-1">
                  <Users className="w-5 h-5 text-orange-400" />
                </div>
                <p className="text-white text-sm font-semibold">500+</p>
                <p className="text-white/70 text-xs">Group Tours</p>
              </div>
              <div className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="flex items-center justify-center mb-1">
                  <TrendingUp className="w-5 h-5 text-orange-400" />
                </div>
                <p className="text-white text-sm font-semibold">50+</p>
                <p className="text-white/70 text-xs">Destinations</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col max-w-[28vw] sm:flex-row gap-3">
              <button className="flex-1 cursor-pointer bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600  duration-300 hover:scale-105 text-white py-3 px-6 rounded-full font-semibold hover:bg-orange-600 transition-all flex items-center justify-center">
                <Send className="w-4 h-4 mr-2" />
                Start Your Journey
              </button>
              <button className="flex-1 cursor-pointer bg-white/10  backdrop-blur-sm text-white py-3 px-6 rounded-full border-2 border-white/30 font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105">
                View Packages
              </button>
            </div>
          </div>

          {/* Right Section — Form */}
          <div className="flex-1 max-w-[40vw]">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-4">
              <h2 className="text-2xl font-bold text-white">Plan Your Trip</h2>
              <p className="text-white/80 text-sm">
                Fill in your details and we&apos;ll get back to you
              </p>

              {/* Form Fields */}
              <div className="space-y-3">
                <div className="flex flex-row items-center border p-3 rounded-lg border-white/20 bg-white/10">
                  <MapPin className=" w-5 h-5 text-white/60" />
                  <input
                    type="text"
                    placeholder="Where do you want to go?"
                    className=" w-full outline-none placeholder-white/60 pl-2 text-white"
                  />
                </div>

                <div className="flex flex-row w-full gap-3">
                  <div className="relative flex-1">
                    <input
                      type="date"
                      className="w-full bg-white/10 text-white placeholder-white/60 p-3 rounded-lg border border-white/20 backdrop-blur-sm focus:outline-none focus:border-orange-400 
      [&::-webkit-calendar-picker-indicator]:opacity-0 
      [&::-webkit-calendar-picker-indicator]:absolute 
      [&::-webkit-calendar-picker-indicator]:w-full 
      [&::-webkit-calendar-picker-indicator]:h-full 
      [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                    />
                    <CalendarDays className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />
                  </div>

                  <div className="relative flex-1">
                    <input
                      type="number"
                      min="1"
                      className="w-full bg-white/10 text-white placeholder-white/60 p-3 rounded-lg border border-white/20 backdrop-blur-sm focus:outline-none focus:border-orange-400"
                      placeholder="Guests"
                    />
                    <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white h-14 rounded-xl shadow-xl shadow-orange-500/50 flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                Submit Enquiry
              </button>

              {/* Bottom Note */}
              <div className="w-full h-[.5px] bg-white/20 mt-6"></div>
              <div className="flex items-center justify-start space-x-2 pt-2 mb-2">
                <div className="flex items-center space-x-2">
                  {/* Circular Image */}
                  <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-orange-400">
                    <Image
                      src="https://i.pinimg.com/1200x/95/04/d2/9504d2fe72e0219dd0d41a5c4a4cb528.jpg"
                      alt="Traveler"
                      width={60}
                      height={60}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>

                  {/* Small orange dots */}
                  <div className="w-9 h-9 ml-[-25px] rounded-full overflow-hidden border-2 border-orange-400">
                    <Image
                      src="https://i.pinimg.com/1200x/95/04/d2/9504d2fe72e0219dd0d41a5c4a4cb528.jpg"
                      alt="Traveler"
                      width={60}
                      height={60}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                  <div className="w-9 h-9 ml-[-25px] rounded-full overflow-hidden border-2 border-orange-400">
                    <Image
                      src="https://i.pinimg.com/1200x/95/04/d2/9504d2fe72e0219dd0d41a5c4a4cb528.jpg"
                      alt="Traveler"
                      width={60}
                      height={60}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                  <div className="w-9 h-9 ml-[-25px] rounded-full overflow-hidden border-2 border-orange-400">
                    <Image
                      src="https://i.pinimg.com/1200x/95/04/d2/9504d2fe72e0219dd0d41a5c4a4cb528.jpg"
                      alt="Traveler"
                      width={60}
                      height={60}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
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
  );
}

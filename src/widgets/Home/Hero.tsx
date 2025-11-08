import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src={"https://i.pinimg.com/1200x/43/91/59/43915985328b76d78244b6673d831dc6.jpg"}
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center bg-opacity-40">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold md:text-6xl">Hero</h1>
          {/* Add more content here as needed */}
        </div>
      </div>
    </div>
  )
}
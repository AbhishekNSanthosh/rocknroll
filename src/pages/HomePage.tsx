
import { Footer } from "@/widgets/common/Footer";
import Header from "@/widgets/common/Header";
import About from "@/widgets/Home/About";
import { Testimonials } from "@/widgets/Home/ClientStories";
import Contact from "@/widgets/Home/Contact";
import Destinations from "@/widgets/Home/Destinations";
import { Gallery } from "@/widgets/Home/Gallery";
import Hero from "@/widgets/Home/Hero";
import { PackagesSection } from "@/widgets/Home/OurPackage";
import TourPackages from "@/widgets/Home/TourPackages";
import React from "react";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Destinations/>
      <TourPackages/>
      <PackagesSection/>
      <About/>
      <Gallery/>
      <Testimonials/>
      <Contact/>
      <Footer />
    </main>
  );
}

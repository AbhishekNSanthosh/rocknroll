import Footer from "@/widgets/common/Footer";
import Header from "@/widgets/common/Header";
import Destinations from "@/widgets/Home/Destinations";
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
      <Footer />
    </main>
  );
}

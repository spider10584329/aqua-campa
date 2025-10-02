"use client";

import { Button } from "@/components/ui/button";
import WaveDivider from "./WaveDivider";
import Image from "next/image";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/assets/hero-boat.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-foreground/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24 md:py-32 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary-foreground mb-4 sm:mb-6 tracking-tight drop-shadow-lg">
          AQUA-CAMPA
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto drop-shadow-md font-light leading-relaxed">
          Unique rotationally moulded boat, complete with motor, trailer, and aluminium framed top.
        </p>
        <Button
          size="lg"
          onClick={scrollToContact}
          className="bg-primary hover:bg-primary/80 text-primary-foreground text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 shadow-medium transition-all duration-300"
        >
          <span className="hidden sm:inline">PRE-ORDER YOUR AQUA-CAMPA</span>
          <span className="sm:hidden">PRE-ORDER NOW</span>
        </Button>
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 text-background">
        <WaveDivider fill="hsl(var(--background))" />
      </div> */}
    </section>
  );
};

export default Hero;

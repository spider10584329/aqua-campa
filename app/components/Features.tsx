import { Card } from "@/components/ui/card";
import WaveDivider from "./WaveDivider";
import Image from "next/image";

import {
  Baby,
  Users,
  DollarSign,
  Ban,
  Compass,
  Lightbulb,
  PauseCircle,
  Utensils,
} from "lucide-react";

const features = [
  { icon: Baby, text: "Safe and fun for all children" },
  { icon: Users, text: "Easy for mobile elderly" },
  { icon: DollarSign, text: "Economical to operate" },
  { icon: Ban, text: "No overnight charges unless staying in camp grounds" },
  { icon: Compass, text: "Great for exploring many waterways and getting into nature" },
  { icon: Lightbulb, text: "Underwater lighting to see fish activity at night time" },
  { icon: PauseCircle, text: "Stop when you want, where you want" },
  {
    icon: Utensils,
    text: "Cooker, Sink, Toilet, Beds, Lighting, Safety Equipment, and even an outdoor portable hot/cold shower if requested",
  },
];

const Features = () => {
  return (
    <>
      <div className="relative" style={{ background: 'linear-gradient(to bottom, #24b6a7 0%, #06639c 100%)' }}>
        <section id="features" className="py-10 sm:py-10 md:py-10 pt-10 pb-20 sm:pb-24 md:pb-32">
          <div className="px-2 sm:px-4">            
            
            {/* Title Section */}
            <div className="text-center mb-8  mt-8 sm:mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#ffffff] mb-0">
                Key Features
              </h2>           
            </div>
            
            {/* Two-part content section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-12 md:gap-16 lg:gap-20 mx-auto max-w-7xl">
              {/* Left side - Boat Icon */}
              <div className="flex-shrink-0 w-full lg:w-1/3 flex justify-center">
                <Image 
                  src="/assets/ship_boat_icon.svg" 
                  alt="Boat Icon" 
                  width={256}
                  height={256}
                  className="w-auto h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 filter brightness-0 invert"
                />
              </div>
              
              {/* Right side - Text Content */}
              <div className="w-full lg:w-2/3 text-white space-y-3 sm:space-y-4">
                <div className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <Image 
                      src="/assets/check_mark.svg" width={24} height={24} 
                      alt="Check Mark" 
                      className="flex-shrink-0 mt-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 filter brightness-0 invert"
                    />
                    <p>This is a low-cost camping adventure on water.</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <Image 
                      src="/assets/check_mark.svg" width={24} height={24} 
                      alt="Check Mark" 
                      className="flex-shrink-0 mt-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 filter brightness-0 invert"
                    />
                    <p>Very different from land-based.</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <Image 
                      src="/assets/check_mark.svg" width={24} height={24} 
                      alt="Check Mark" 
                      className="flex-shrink-0 mt-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 filter brightness-0 invert"
                    />
                    <p>Freedom to be with others, or private.</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <Image 
                      src="/assets/check_mark.svg" width={24} height={24} 
                      alt="Check Mark" 
                      className="flex-shrink-0 mt-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 filter brightness-0 invert"
                    />
                    <p>Explore all sorts of waterways.</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <Image 
                      src="/assets/check_mark.svg" width={24} height={24} 
                      alt="Check Mark" 
                      className="flex-shrink-0 mt-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 filter brightness-0 invert"
                    />
                    <p>Very safe for families.</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <Image 
                      src="/assets/check_mark.svg" width={24} height={24} 
                      alt="Check Mark" 
                      className="flex-shrink-0 mt-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 filter brightness-0 invert"
                    />
                    <p>If overnighting, ideal for two adults, or adults and up to two children.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>           
        </section>

        {/* <div className="absolute bottom-0 left-0 right-0 text-background">
          <WaveDivider fill="#ffffff" />
        </div> */}
      </div>
    </>
  );
};

export default Features;

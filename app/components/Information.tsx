"use client";

import { useState } from "react";
import WaveDividerTop from "./WaveDividerTop";
import Image from "next/image";

const Information = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const experiences = [
    {
      id: 1,
      image: "/assets/Campa_gallery3.jpg",
      title: "Smooth Sailing to TiriTiri Matangi",
      description: "With clear weather and gentle westerly breezes forecasted, we headed out, enjoying stunning views of TiriTiri Matangi directly on the horizon. Along the way, we glimpsed Little Blue Penguins and Gannets diving—nature’s spectacles in motion. Navigating was a breeze with the island just a sighting away, and the water’s clarity made maneuvering between anchored boats and rocky outcrops enjoyable."
    },
    {
      id: 2,
      image: "/assets/Campa_gallery1.jpg",
      title: "Approaching Hobbs Bay",
      description: "Our camper’s shallow catamaran hull (drawing only 250mm) allowed us to get close to shore and anchor effortlessly. Thanks to tide charts on my phone, we knew the camper could safely stay for about three hours, giving us ample time for a scenic walk to the Lighthouse and back."
    },
    {
      id: 3,
      image: "/assets/Campa_gallery2.jpg",
      title: "Discovering TiriTiri Matangi",
      description: "This island is a haven for native birdlife and ecological restoration—truly a must-visit. After a refreshing walk, we returned to enjoy local wildlife attractions, like curious Snapper surfacing near the boat while we relaxed with lunch."
    },
    {
      id: 4,
      image: "/assets/Campa_gallery4.jpg",
      title: "Overnight at the Bay",
      description: "As evening fell, we moved the boat to a calm, sheltered spot near the shore. Watching the sunset and listening to the dawn chorus was magical—even though we missed the sunrise, the bird sounds more than compensated. "
    },
    {
      id: 5,
      image: "/assets/hero-boat.jpg",
      title: "Exploring the Island",
      description: "The next morning, we enjoyed breakfast aboard before heading ashore at low tide. A walk through pristine, regenerating native forest along accessible boardwalks revealed incredible birdlife and sweeping Gulf views. We indulged in our picnic lunch, soaking in the tranquility and natural beauty."
    },
    {
      id: 6,
      image: "/assets/Campa_gallery3.jpg",
      title: "Return Journey & Sunset at Shakespeare Bay",
      description: "After a relaxed afternoon, we headed back to Shakespeare Bay, where calm waters and scenic cliffs provided a peaceful anchor spot away from busy day-trippers. With the sun setting, we enjoyed a quiet evening overlooking the water—an unforgettable way to end a perfect trip."
    }
  ];

  const toggleCardExpansion = (cardId: number) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <>
      <section className="py-8 sm:py-12 md:py-16 bg-background mt-10">
        <div className="w-full">
          {/* Header */}
          <div className=" mx-auto px-4 mb-8 sm:mb-12">
            <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
               Experience the Ultimate Water Camping Adventure
            </p>
            <h2 className="mx-auto text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold pt-10">
              Murrays Bay to TiriTiri Matangi
            </h2>
          </div>

          {/* Cards Grid Container */}
          <div className=" mx-auto px-4">
            {/* 2x3 Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full">
              {experiences.map((experience) => (
                <div 
                  key={experience.id}
                  className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ aspectRatio: '16 / 9' }}
                >
                  {/* Full Card Background Image */}
                  <div className="absolute inset-0">
                    <Image 
                      src={experience.image} 
                      alt={experience.title}
                      fill
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      style={{ aspectRatio: '16 / 9' }}
                    />
                  </div>
                    
                  {/* Collapsed State - Title Bar at Bottom */}
                  {expandedCard !== experience.id && (
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/20 text-white p-2 sm:p-3"
                      style={{
                        transform: 'translateY(0)',
                        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm sm:text-base md:text-lg font-bold flex-1 pr-2 line-clamp-2">
                          {experience.title}
                        </h3>
                        <button
                          onClick={() => toggleCardExpansion(experience.id)}
                          className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
                          aria-label="Expand text"
                        >
                          <svg 
                            className="w-4 h-4 sm:w-5 sm:h-5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Expanded State - Full Text Panel */}
                  {expandedCard === experience.id && (
                    <div 
                      className="absolute inset-0 bg-black/90 backdrop-blur-sm text-white flex flex-col justify-end"
                      style={{
                        transform: 'translateY(0) scale(1)',
                        transformOrigin: 'bottom center',
                        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                        opacity: 1
                      }}
                    >
                      <div className="p-4 sm:p-6">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-sm sm:text-base md:text-lg font-bold pr-4">
                            {experience.title}
                          </h3>
                          <button
                            onClick={() => toggleCardExpansion(experience.id)}
                            className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
                            aria-label="Collapse text"
                          >
                            <svg 
                              className="w-4 h-4 sm:w-5 sm:h-5" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed opacity-90 max-h-32 overflow-y-auto">
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <div className="relative">
        <WaveDividerTop fill="hsla(202, 84%, 65%, 1.00)" />
      </div>
    </>
  );
};

export default Information;

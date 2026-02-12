import { MapPin } from 'lucide-react'
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const habitats = [
  {
    id: "savanna",
    title: "Serengeti Savanna",
    description: "An open expanse mirroring the African plains. Home to our herd of reticulated giraffes and grazing zebras. The golden hour here is truly magical.",
    animals: ["Giraffe", "Zebra", "Ostrich"],
    image: "/images/habitat-savanna.png",
    mapCoords: { top: "20%", left: "30%" }
  },
  {
    id: "aviary",
    title: "Canopy Aviary",
    description: "Walk among the treetops in our multi-level rainforest dome. Listen for the calls of macaws and spot the elusive toucan in the dense foliage.",
    animals: ["Macaw", "Toucan", "Lorikeet"],
    image: "/images/habitat-aviary.png",
    mapCoords: { top: "50%", left: "60%" }
  },
  {
    id: "reptile",
    title: "Ancient Reptile House",
    description: "Enter the cool, stone-walled sanctuary of the cold-blooded. From emerald tree boas to ancient tortoises, witness evolution's most resilient survivors.",
    animals: ["Python", "Tortoise", "Gecko"],
    image: "/images/habitat-reptile.png",
    mapCoords: { top: "70%", left: "25%" }
  }
];

const HabitatExplorer = () => {
  const [activeHabitat, setActiveHabitat] = useState(habitats[0].id);

  // Simple scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const offsets = habitats.map(h => {
        const el = document.getElementById(h.id);
        return { id: h.id, offset: el ? Math.abs(el.getBoundingClientRect().top - 200) : Infinity };
      });
      const closest = offsets.sort((a, b) => a.offset - b.offset)[0];
      setActiveHabitat(closest.id);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="habitats" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1 text-sm uppercase tracking-widest">
            Interactive Map
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display text-primary font-bold">
            Explore the Grounds
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: Scrollable Content */}
          <div className="lg:w-1/2 space-y-32 pb-24">
            {habitats.map((habitat) => (
              <div key={habitat.id} id={habitat.id} className="scroll-mt-32 group">
                <div className="relative overflow-hidden rounded-[2rem_3rem_2rem_3rem] shadow-xl mb-6 aspect-[4/3]">
                  <img 
                    src={habitat.image} 
                    alt={habitat.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  <h3 className="absolute bottom-6 left-6 text-3xl font-display text-white drop-shadow-md">
                    {habitat.title}
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {habitat.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {habitat.animals.map(animal => (
                    <span key={animal} className="px-3 py-1 bg-secondary text-primary rounded-full text-sm font-bold">
                      {animal}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Map */}
          <div className="lg:w-1/2 hidden lg:block relative">
            <div className="sticky top-32 bg-secondary/50 rounded-[3rem] p-8 h-[600px] border border-primary/10 backdrop-blur-sm">
              <div className="relative w-full h-full bg-[#E5E0D0] rounded-[2rem] overflow-hidden opacity-90 border border-primary/5 shadow-inner">
                {/* Abstract Map Graphic */}
                <svg className="absolute inset-0 w-full h-full text-primary/10" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,0 Q50,20 100,0 L100,100 L0,100 Z" fill="currentColor" />
                  <path d="M0,40 Q30,60 100,30" stroke="currentColor" strokeWidth="0.5" fill="none" />
                  <path d="M20,100 Q40,60 60,100" stroke="currentColor" strokeWidth="0.5" fill="none" />
                </svg>

                {/* Markers */}
                {habitats.map((habitat) => (
                  <div
                    key={habitat.id}
                    className={`absolute transition-all duration-500 transform ${
                      activeHabitat === habitat.id ? "scale-125 z-20" : "scale-100 z-10 grayscale opacity-70"
                    }`}
                    style={{ top: habitat.mapCoords.top, left: habitat.mapCoords.left }}
                  >
                    <div className="relative flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                        activeHabitat === habitat.id ? "bg-accent text-accent-foreground" : "bg-primary text-white"
                      }`}>
                        <MapPin size={16} />
                      </div>
                      {activeHabitat === habitat.id && (
                         <div className="absolute -bottom-2 w-2 h-2 bg-accent rotate-45" />
                      )}
                      <div className={`absolute top-10 whitespace-nowrap px-3 py-1 rounded-md text-xs font-bold shadow-sm transition-opacity ${
                         activeHabitat === habitat.id ? "bg-white text-primary opacity-100" : "opacity-0"
                      }`}>
                        {habitat.title}
                      </div>
                      
                      {/* Pulse Effect for Active State */}
                      {activeHabitat === habitat.id && (
                        <span className="absolute -inset-2 rounded-full border-2 border-accent animate-ping opacity-75"></span>
                      )}
                    </div>
                  </div>
                ))}
                
                <div className="absolute bottom-4 right-4 bg-white/80 px-3 py-1 rounded-md text-xs font-mono text-muted-foreground">
                  PARK MAP v4.2
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HabitatExplorer;

import { Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Lemur Breakfast",
    time: "09:30 AM",
    description: "Join our primates for their morning fruit feast. Great for early risers!",
    image: "/images/exp-lemur.png",
    status: "happening"
  },
  {
    title: "Elephant Bath",
    time: "11:00 AM",
    description: "Watch the herd cool off in the main river. Prepare to get splashed!",
    image: "/images/exp-elephant.png",
    status: "upcoming"
  },
  {
    title: "Keeper Talk: Big Cats",
    time: "02:00 PM",
    description: "Learn about conservation efforts for our tigers and lions from the experts.",
    image: "/images/exp-tiger.png",
    status: "upcoming"
  },
  {
    title: "Sunset Safari",
    time: "05:00 PM",
    description: "A guided truck tour as the park winds down. See animals becoming active.",
    image: "/images/exp-safari.png",
    status: "upcoming"
  }
];

const ExperienceCard = () => {
  return (
    <section id="experiences" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-display text-primary font-bold mb-4">Daily Experiences</h2>
            <p className="text-muted-foreground text-lg">
              Get closer to nature with our daily scheduled encounters.
            </p>
          </div>
          <button className="text-primary font-bold border-b-2 border-accent hover:border-primary transition-colors">
            View Full Schedule &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-primary/5 hover:-translate-y-1"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  src={exp.image} 
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  {exp.status === "happening" ? (
                    <Badge className="bg-destructive text-primary font-bold animate-pulse shadow-[0_0_15px_rgba(0,229,255,0.6)] border-none">
                      <Zap size={12} className="mr-1 fill-current" />
                      Happening Now
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="bg-white/90 text-primary backdrop-blur-sm">
                      {exp.time}
                    </Badge>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">{exp.title}</h3>
                  <p className="text-white/80 text-sm line-clamp-2">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceCard;

import { Leaf, Heart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const ConservationMission = () => {
  return (
    <section id="conservation" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Abstract Organic Background Pattern */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
         <path d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z" fill="#FCF9F0" />
         <circle cx="80" cy="20" r="30" fill="#FCF9F0" />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <Leaf className="w-12 h-12 mx-auto text-accent" />
          
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
            Protecting the Wild, <br/>
            <span className="text-accent">Preserving the Future.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Wildroot isn't just a park; it's a promise. Every ticket funds global conservation projects, from reforestation in Borneo to anti-poaching units in Kenya.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            {[
              { icon: Globe, label: "Global Impact", value: "12 Countries" },
              { icon: Heart, label: "Species Protected", value: "45+" },
              { icon: Leaf, label: "Acres Restored", value: "10,000+" },
            ].map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-accent" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/60 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary font-bold text-lg px-8 py-6 rounded-full">
            Read Our Mission
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConservationMission;

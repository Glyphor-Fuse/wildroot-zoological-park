import { MapPin, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background/90 z-10" />
        <img
          src="/images/hero-jungle.png"
          alt="Lush jungle landscape"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-block px-4 py-1.5 bg-accent/90 text-accent-foreground font-bold rounded-full text-sm uppercase tracking-wider mb-4 animate-fade-in">
            Open Daily 9AM - 6PM
          </span>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-tight drop-shadow-lg">
            Wilder by <br/>
            <span className="italic text-accent">Nature</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-md">
            Step into a living field guide. Explore habitats, meet the wild, and discover the heartbeat of conservation.
          </p>

          {/* Quick Info Bar */}
          <div className="mt-12 inline-flex flex-col md:flex-row items-center gap-4 md:gap-8 bg-white/95 backdrop-blur-sm p-4 md:p-6 rounded-[2rem] shadow-xl text-primary mx-4">
            <div className="flex items-center gap-3 px-4">
              <div className="p-2 bg-secondary rounded-full text-primary">
                <Clock size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-wide text-muted-foreground font-bold">Hours</p>
                <p className="font-bold">09:00 AM — 06:00 PM</p>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-10 bg-border"></div>
            
            <div className="flex items-center gap-3 px-4">
              <div className="p-2 bg-secondary rounded-full text-primary">
                <MapPin size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-wide text-muted-foreground font-bold">Location</p>
                <p className="font-bold">1200 Wildroot Way, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

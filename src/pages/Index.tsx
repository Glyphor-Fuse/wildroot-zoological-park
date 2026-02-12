import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HabitatExplorer from "@/components/HabitatExplorer";
import ExperienceCard from "@/components/ExperienceCard";
import ConservationMission from "@/components/ConservationMission";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent selection:text-accent-foreground">
      <Navbar />
      <Hero />
      <HabitatExplorer />
      <ExperienceCard />
      <ConservationMission />
      <Footer />
    </div>
  );
};

export default Index;

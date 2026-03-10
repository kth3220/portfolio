import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Strength from "@/components/Strength";
import TechStack from "@/components/TechStack";
import ProjectSummary from "@/components/ProjectSummary";
import AuraOverview from "@/components/AuraOverview";
import AuraArchitecture from "@/components/AuraArchitecture";
import AuraFeature from "@/components/AuraFeature";
import AuraProblemSolving from "@/components/AuraProblemSolving";
import MarketUpdateOverview from "@/components/MarketUpdateOverview";
import MarketUpdateFeature from "@/components/MarketUpdateFeature";
import MarketUpdateProblem from "@/components/MarketUpdateProblem";
import ProfitPilotOverview from "@/components/ProfitPilotOverview";
import ProfitPilotFeature from "@/components/ProfitPilotFeature";
import VanillaSPA from "@/components/VanillaSPA";
import SPAArchitecture from "@/components/SPAArchitecture";
import DevelopmentPhilosophy from "@/components/DevelopmentPhilosophy";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe />
      <Strength />
      <TechStack />
      <ProjectSummary />

      {/* Aura.ai Project */}
      <AuraOverview />
      <AuraArchitecture />
      <AuraFeature />
      <AuraProblemSolving />

      {/* MarketUpdate Project */}
      <MarketUpdateOverview />
      <MarketUpdateFeature />
      <MarketUpdateProblem />

      {/* ProfitPilot Project */}
      <ProfitPilotOverview />
      <ProfitPilotFeature />

      {/* Vanilla SPA Project */}
      <VanillaSPA />
      <SPAArchitecture />

      {/* Conclusion */}
      <DevelopmentPhilosophy />
      <Contact />
    </main>
  );
}

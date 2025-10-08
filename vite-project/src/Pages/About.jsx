import { useState, useEffect } from "react";
import AboutHero from "../components/AboutPage/AboutHero";
import OurMission from "../components/AboutPage/OurMission";
import OurImpact from "../components/AboutPage/OurImpact";
import OurJourney from "../components/AboutPage/OurJourney";
import OurValues from "../components/AboutPage/OurValues";

export default function About() {
  // Add subtle animation on scroll for elements
  const [isVisible, setIsVisible] = useState({
    mission: false,
    impact: false,
    journey: false,
    values: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = {
        mission: document.getElementById("mission-section"),
        impact: document.getElementById("impact-section"),
        journey: document.getElementById("journey-section"),
        values: document.getElementById("values-section"),
      };

      Object.entries(sections).forEach(([key, section]) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const isElementVisible = rect.top < window.innerHeight - 100;
          setIsVisible(prev => ({ ...prev, [key]: isElementVisible }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <AboutHero />
      <OurMission isVisible={isVisible.mission} />
      <OurImpact isVisible={isVisible.impact} />
      <OurJourney isVisible={isVisible.journey} />
      <OurValues isVisible={isVisible.values} />
    </main>
  );
}
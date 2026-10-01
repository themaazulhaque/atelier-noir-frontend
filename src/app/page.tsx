import Navigation from "@/components/navigation/Navigation";
import Hero from "@/components/hero/Hero";
import HeroTypography from "@/components/hero/HeroTypography";
import HeroTransition from "@/components/sections/HeroTransition";
import StudioSection from "@/components/sections/StudioSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import MaterialsSection from "@/components/sections/MaterialsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import SocialSection from "@/components/sections/SocialSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <HeroTypography />
      <HeroTransition />
      <StudioSection />
      <ProjectsSection />
      <ExperienceSection />
      <ServicesSection />
      <PhilosophySection />
      <MaterialsSection />
      <TestimonialsSection />
      <SocialSection />
      <ContactSection />
      <Footer />
    </>
  );
}

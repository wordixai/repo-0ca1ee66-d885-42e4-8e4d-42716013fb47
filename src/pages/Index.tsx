import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import DiscordCommunity from "@/components/DiscordCommunity";
import FeatureShowcase from "@/components/FeatureShowcase";
import FeaturesMarquee from "@/components/FeaturesMarquee";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <div className="flex flex-col">
          <Hero />
          <TechStack />
          <ProblemSection />
          <SolutionSection />
          <DiscordCommunity />
          <FeatureShowcase />
          <FeaturesMarquee />
          <PricingSection />
          <TestimonialsSection />
          <StatsSection />
          <CTASection />
          <ShowcaseSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
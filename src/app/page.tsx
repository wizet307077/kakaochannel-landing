import HeroSection from "@/components/sections/hero";
import ProblemSolutionSection from "@/components/sections/problem-solution";
import BenefitsSection from "@/components/sections/benefits";
import ProcessSection from "@/components/sections/process";
import CTASection from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <BenefitsSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}

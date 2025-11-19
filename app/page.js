import BlogSection from "@/components/BlogSection";
import CoverageSection from "@/components/CoverageSection"
import FeaturesExplanationSection from "@/components/FeaturesExplanationSection";
import Hero from "@/components/Hero";
import LogoSection from "@/components/LogoSection";
import PartnerSection from "@/components/PartnerSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustedCustomersSection from "@/components/TrustedCustomersSection";
import WhyInsuranceSection from "@/components/WhyInsuranceSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";

export default function Home() {
  return (
    <>
    <Hero/>
    <TestimonialsSection/>
    <LogoSection/>
    <PartnerSection/>
    <CoverageSection/>
    <FeaturesExplanationSection/>
    <WhyInsuranceSection/>
    <CaseStudiesSection/>
    <TrustedCustomersSection/>
    <BlogSection/>
    
   
    </>
  );
}

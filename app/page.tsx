import Hero from "@/components/Home/Hero";
import ServiceCard from "@/components/Home/Services";
import WhyTrustUs from "@/components/Home/WhyTrustUs";
import Gallery from "@/components/Home/Gallery";
import Packages from "@/components/Home/Packages"; 
import Testimonials from "@/components/Home/Testimonials"; 
import FinalCTA from "@/components/Home/FinalCTA"; 

export default function Home() {
  return (
    <>
      <Hero/>
      <ServiceCard/>
      <WhyTrustUs/>
      <Gallery/>
      <Packages/>
      <Testimonials/>
      <FinalCTA/>
    </>
  );
}

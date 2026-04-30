import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CourtFinder from "@/components/CourtFinder";
import Features from "@/components/Features";
import ForWho from "@/components/ForWho";
import ForVenues from "@/components/ForVenues";
import ReferYourCourt from "@/components/ReferYourCourt";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <CourtFinder />
        <Features />
        <ForWho />
        <ForVenues />
        <ReferYourCourt />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import ForWho from "@/components/ForWho";
import ForVenues from "@/components/ForVenues";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <ForWho />
        <ForVenues />
        <Testimonials />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ServiceTabs from "@/components/ServiceTabs";
import WhyUs from "@/components/WhyUs";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ServiceTabs />
        <WhyUs />
        <Clients />
        <Testimonials />
        <Contact />
        <CTA />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}

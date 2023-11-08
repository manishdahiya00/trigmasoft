import About from "@/components/About";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Teams from "@/components/Teams";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Clients />
      <Technologies />
      <Teams />
      <Contact />
      <Footer />
    </main>
  );
}

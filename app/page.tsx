import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";
import Features from "@/components/Landing/Features";
import Hero from "@/components/Landing/Hero";
import HowItWorks from "@/components/Landing/HowItWorks";
import Impact from "@/components/Landing/Impact";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Impact />
      </main>
      <Footer />
    </div>
  );
}

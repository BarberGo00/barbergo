import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import ServicesOptions from "@/components/ServicesOptions";
import MarketingGallery from "@/components/MarketingGallery";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <Services />
        <ServicesOptions />
        <MarketingGallery />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

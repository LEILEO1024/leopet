import Header from "@/components/header/Header";
import HeroSection from "@/components/home/HeroSection";
import AdoptionSection from "@/components/home/AdoptionSection";
import CategoryHub from "@/components/home/CategoryHub";
import FeaturedPets from "@/components/home/FeaturedPets";
import PetCategories from "@/components/home/PetCategories";
import AdopterSection from "@/components/home/AdopterSection";
import LeoPetBanner from "@/components/home/LeoPetBanner";
import VenuesSection from "@/components/home/VenuesSection";
import ServicesSection from "@/components/home/ServicesSection";
import GuidesSection from "@/components/home/GuidesSection";
import BlogSection from "@/components/home/BlogSection";
import StatsBanner from "@/components/home/StatsBanner";
import FreePostingCTA from "@/components/home/FreePostingCTA";
import Encyclopedia from "@/components/home/Encyclopedia";
import AiFinder from "@/components/home/AiFinder";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AdoptionSection />
        <CategoryHub />
        <FeaturedPets />
        <PetCategories />
        <AdopterSection />
        <LeoPetBanner />
        <VenuesSection />
        <ServicesSection />
        <GuidesSection />
        <BlogSection />
        <StatsBanner />
        <FreePostingCTA />
        <Encyclopedia />
        <AiFinder />
      </main>
      <Footer />
    </>
  );
}

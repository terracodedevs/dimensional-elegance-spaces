
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VisualizerShowcase from "@/components/VisualizerShowcase";
import FeaturedFurniture from "@/components/FeaturedFurniture";
import TrendingProducts from "@/components/TrendingProducts";
import CustomerGallery from "@/components/CustomerGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-warm-cream min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedFurniture />
      <VisualizerShowcase />
      <TrendingProducts />
      <CustomerGallery />
      <Footer />
    </div>
  );
};

export default Index;

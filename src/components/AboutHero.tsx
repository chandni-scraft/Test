
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-700 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/f4ed2a1d-d5ad-4948-b23e-cf0e5483a4ba.png" 
          alt="Surgical team in operating room" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About SurgeAhead</h1>
        <p className="text-xl text-primary-100 max-w-3xl mx-auto">
          Empowering the next generation of medical professionals with real-world experience and expert guidance
        </p>
      </div>
    </section>
  );
};

export default AboutHero;

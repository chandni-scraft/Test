
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import AboutHero from "@/components/AboutHero";
import MissionSection from "@/components/MissionSection";
import CredentialsSection from "@/components/CredentialsSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="About SurgeAhead - Expert Medical School Interview Training"
        description="Learn about SurgeAhead's mission to empower future medical professionals. Our team of qualified NHS doctors provides expert interview training and surgical skills workshops for medical school applicants."
        image="/lovable-uploads/f4ed2a1d-d5ad-4948-b23e-cf0e5483a4ba.png"
        url="https://surgeahead.com/about"
        keywords="about surgeahead, medical school preparation, NHS doctors, medical education experts, interview training team"
      />
      <Navigation />
      <AboutHero />
      <MissionSection />
      <CredentialsSection />
      <SuccessStoriesSection />
      <Footer />
    </div>
  );
};

export default About;

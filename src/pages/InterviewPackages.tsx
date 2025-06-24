
import Navigation from "@/components/Navigation";
import InterviewHero from "@/components/InterviewHero";
import InterviewStats from "@/components/InterviewStats";
import MMIInfoSection from "@/components/MMIInfoSection";
import PackageCards from "@/components/PackageCards";
import ProcessSection from "@/components/ProcessSection";
import WhyMMIWorks from "@/components/WhyMMIWorks";
import InterviewPackagesFAQ from "@/components/InterviewPackagesFAQ";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const InterviewPackages = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <SEOHead 
        title="Medical School Interview Packages - MMI Training | SurgeAhead"
        description="Expert medical school interview preparation packages including MMI training, mock interviews, and one-on-one coaching with qualified NHS doctors. Boost your interview confidence."
        image="/lovable-uploads/1e553bea-530f-499f-8277-2b8e88243ef8.png"
        url="https://surgeahead.com/interview-packages"
        keywords="medical school interview packages, MMI training, mock interviews, interview coaching, medical interview preparation, NHS doctors"
      />
      <Navigation />
      <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
        <InterviewHero />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
        <InterviewStats />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
        <MMIInfoSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
        <PackageCards />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '500ms' }}>
        <ProcessSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
        <WhyMMIWorks />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '700ms' }}>
        <InterviewPackagesFAQ />
      </div>
      <Footer />
    </div>
  );
};

export default InterviewPackages;

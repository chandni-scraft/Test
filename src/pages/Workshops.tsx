
import Navigation from "@/components/Navigation";
import WorkshopHero from "@/components/WorkshopHero";
import CourseInfoGrid from "@/components/CourseInfoGrid";
import MainWorkshopSection from "@/components/MainWorkshopSection";
import BookingSection from "@/components/BookingSection";
import WorkshopFAQ from "@/components/WorkshopFAQ";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Workshops = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Medical School Workshops - Surgical Skills Training | SurgeAhead"
        description="Hands-on surgical skills workshops for medical school applicants. Learn suturing, cannulation, and clinical procedures from qualified NHS doctors. Book your workshop today."
        image="/lovable-uploads/ede1e545-307e-4e90-af35-1f1107463530.png"
        url="https://surgeahead.com/workshops"
        keywords="medical school workshops, surgical skills training, suturing workshop, cannulation training, clinical procedures, NHS doctors"
      />
      <Navigation />
      <div className="opacity-100 transition-opacity duration-500 ease-in-out">
        <WorkshopHero />
      </div>
      
      {/* Course Info Section */}
      <section className="py-12 md:py-16 lg:py-24 opacity-100 transition-opacity duration-500 ease-in-out">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-inter hover:scale-105 transition-transform duration-300">Course Info</h2>
            </div>
            
            <div className="opacity-100 transition-opacity duration-500 ease-in-out">
              <CourseInfoGrid />
            </div>
            <div className="opacity-100 transition-opacity duration-500 ease-in-out">
              <MainWorkshopSection />
            </div>
            <div className="opacity-100 transition-opacity duration-500 ease-in-out">
              <BookingSection />
            </div>
          </div>
        </div>
      </section>
      
      <div className="opacity-100 transition-opacity duration-500 ease-in-out">
        <WorkshopFAQ />
      </div>
      
      <Footer />
    </div>
  );
};

export default Workshops;

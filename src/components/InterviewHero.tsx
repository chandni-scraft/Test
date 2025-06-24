
import { Button } from "@/components/ui/button";

const InterviewHero = () => {
  return (
    <section className="py-12 md:py-20 text-white relative overflow-hidden" style={{ background: '#104475' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-inter tracking-tight leading-tight">
              What If You Had a Proven System to Walk Into Your MMI With Unshakable Confidence?
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 text-blue-100">
              Master Your MMI, Crush Your Interview, and Secure Your Spot in Just Days!
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-4xl lg:max-w-none mx-auto lg:mx-0 font-inter font-medium leading-relaxed px-2 mb-8">
              Medical Schools Are More Competitive Than Ever. If You're Not Fully Prepared for Your Interview… You're Already Losing to Someone Who Is.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 text-lg">
              Reserve Your Spot
            </Button>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/lovable-uploads/5bbf9c97-b0bb-4d78-aa12-35846eda8b01.png" 
                alt="Medical students practicing interview scenarios" 
                className="rounded-lg shadow-2xl max-w-full h-auto object-cover border-4 border-white/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewHero;

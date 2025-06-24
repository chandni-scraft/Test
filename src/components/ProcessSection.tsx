
import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Enroll in the Programme",
      description: "Secure your spot in our exclusive one-day intensive training designed to give you the competitive edge in your medical school interviews."
    },
    {
      number: "02", 
      title: "Experience Hands-On Training",
      description: "Participate in live, expert-led mock interviews, real clinical scenarios, and interactive MMI coaching that simulate the real exam environment"
    },
    {
      number: "03",
      title: "Walk in with Confidence", 
      description: "Leave with polished answers, structured strategies, and real-world experience, ensuring you stand out and impress the interview panel."
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 text-white rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#104475' }}>
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-inter text-gray-900">
            How our process works
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A simple, proven three-step approach to interview success
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Connection lines for larger screens */}
            <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5" style={{ background: `linear-gradient(to right, #104475, #0a3b5f, #104475)` }}></div>
            
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 text-white rounded-full text-2xl font-bold font-inter mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 relative z-10" style={{ background: `linear-gradient(135deg, #104475, #0a3b5f)` }}>
                    {step.number}
                  </div>
                  <div className="absolute inset-0 rounded-full w-16 h-16 mx-auto animate-pulse opacity-0 group-hover:opacity-30 transition-opacity duration-300" style={{ backgroundColor: '#104475' }}></div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 font-inter text-gray-900 transition-colors duration-300" style={{ color: index === 0 ? '#104475' : '' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

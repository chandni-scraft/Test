
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";

const BookingSection = () => {
  useEffect(() => {
    // Load Zcal script with proper error handling
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://static.zcal.co/embed/v1/embed.js';
    script.onerror = () => {
      console.error('Failed to load Zcal script');
      // Fallback to direct link if script fails to load
      const container = document.querySelector('.zcal-inline-widget');
      if (container) {
        container.innerHTML = `
          <div class="text-center py-4">
            <a href="https://zcal.co/i/vIQpDhvL" target="_blank" rel="noopener noreferrer" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
              Open Booking Calendar
            </a>
          </div>
        `;
      }
    };
    
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="booking" className="scroll-mt-24">
      <Card className="border-2 border-green-200 bg-green-50/30 shadow-lg">
        <CardHeader className="text-center px-4 md:px-6">
          <CardTitle className="text-xl md:text-2xl text-green-800 font-inter">
            Limited Places Available — Book Now
          </CardTitle>
          <CardDescription className="text-base md:text-lg leading-relaxed">
            Spaces are limited to ensure high-quality, small-group teaching. Secure your place today and take the first real step on your journey to medicine.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 md:px-6">
          {/* Zcal Embed Container */}
          <div className="bg-white rounded-lg p-4 md:p-6 mb-4 md:mb-6 shadow-inner">
            <h3 className="text-lg md:text-xl font-semibold text-center mb-3 md:mb-4 font-inter">Book Your Workshop</h3>
            {/* Zcal Embed with improved styling */}
            <div className="zcal-inline-widget min-h-[400px] border border-gray-200 rounded-lg">
              <div className="flex justify-center items-center h-[400px]">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p>Loading booking calendar...</p>
                  <a href="https://zcal.co/i/vIQpDhvL" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-4 inline-block">Click here if calendar doesn't load</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed">
              Questions about the workshop? Get in touch with us directly.
            </p>
            <a href="/contact">
              <Button variant="outline" className="w-full sm:w-auto">Contact Us</Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default BookingSection;

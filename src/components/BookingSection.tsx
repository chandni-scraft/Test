
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";

const BookingSection = () => {
  useEffect(() => {
    // Load Zcal script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://static.zcal.co/embed/v1/embed.js';
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Card className="border-2 border-green-200 bg-green-50/30">
      <CardHeader className="text-center px-4 md:px-6">
        <CardTitle className="text-xl md:text-2xl text-green-800 font-inter">
          Limited Places Available — Register Now
        </CardTitle>
        <CardDescription className="text-base md:text-lg leading-relaxed">
          Spaces are limited to ensure high-quality, small-group teaching. Secure your place today and take the first real step on your journey to medicine.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 md:px-6">
        {/* Zcal Embed Container */}
        <div className="bg-white rounded-lg p-4 md:p-6 mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-semibold text-center mb-3 md:mb-4 font-inter">Book Your Workshop</h3>
          {/* Zcal Embed */}
          <div className="zcal-inline-widget">
            <a href="https://zcal.co/i/vIQpDhvL">Surgical Skills Workshop - Schedule a meeting</a>
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
  );
};

export default BookingSection;

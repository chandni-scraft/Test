
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PackageCards = () => {
  const packages = [
    {
      name: "Foundation Package",
      duration: "4hrs",
      price: "£195",
      description: "Core MMI prep & structured practice",
      popular: false
    },
    {
      name: "Intermediate Package",
      duration: "7hrs", 
      price: "£300",
      description: "Advanced strategies & personalized feedback",
      popular: true
    },
    {
      name: "Platinum Package",
      duration: "10hrs",
      price: "£450", 
      description: "Complete MMI mastery with intensive coaching",
      popular: false
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-inter">
            Interview Packages
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative ${pkg.popular ? 'border-2 border-[#0d447c] shadow-lg' : ''}`}>
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-white bg-[#0d447c]">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl md:text-2xl font-bold font-inter mb-2">
                  {pkg.name}
                </CardTitle>
                <div className="text-sm text-muted-foreground mb-2">
                  ({pkg.duration})
                </div>
                <div className="text-3xl md:text-4xl font-bold font-inter text-[#104475]">
                  {pkg.price}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {pkg.description}
                </p>
                <Button className={`w-full ${pkg.popular ? 'bg-[#104475] hover:bg-[#0a3b5f] text-white' : ''}`} variant={pkg.popular ? "default" : "outline"}>
                  Try it Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageCards;

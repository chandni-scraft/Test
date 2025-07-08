
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users } from "lucide-react";

const CredentialsSection = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8 text-foreground">Our Credentials</h3>
          <p className="text-xl text-muted-foreground">Qualified professionals you can trust</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-primary-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-4">UK Trained Doctors</h4>
              <p className="text-muted-foreground mb-4">
                All our instructors are fully qualified UK trained medical professionals with active clinical practice.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-4">London Medical School Graduates</h4>
              <p className="text-muted-foreground mb-4">
                Our team consists of graduates from prestigious London medical schools with firsthand experience of the application process.
              </p>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/ea20c7d1-1719-42ec-879b-ed21c42a0eb5.png" 
                  alt="London Medical School Graduates" 
                  className="h-12 object-contain"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Target } from "lucide-react";
import { Link } from "react-router-dom";

const MissionSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Our Mission</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Empower</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We empower aspiring medics with the knowledge, skills, and confidence they need to succeed in their medical journey.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From mastering applications to hands-on surgical skills, we offer more than advice — we give real experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We give students a real taste of the profession they aspire to join, setting them up for excellence.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  Our mission is to empower aspiring medics with the knowledge, skills, and confidence they need to succeed. From mastering the medical school application process to experiencing hands-on surgical skills rarely taught at this stage, we offer students more than just advice — we give them a real taste of the profession they aspire to join.
                </p>
                
                <p className="text-lg leading-relaxed">
                  What makes us different? We've lived it. We've navigated the UCAS forms, survived the MMIs, written the personal statements, and walked the wards. Now, we're bringing that experience directly to the students who need it most.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Whether you're a gifted Year 10 thinking ahead or a sixth form student preparing your final application, SurgeAhead is here to support, challenge, and inspire you — every step of the way.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/ede1e545-307e-4e90-af35-1f1107463530.png" 
                alt="Medical students practicing surgical skills" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">250+</div>
                  <div className="text-sm text-muted-foreground">Students Trained</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-green-50 p-8 rounded-lg mb-16">
            <p className="text-lg leading-relaxed font-semibold text-foreground text-center">
              Join us, and take the first real step toward your future in medicine. Spaces are limited — book your workshop today.
            </p>
            <div className="text-center mt-6">
              <Link to="/workshops">
                <Button className="bg-primary hover:bg-primary-700 text-white font-semibold px-8 py-3">
                  Book Your Workshop
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

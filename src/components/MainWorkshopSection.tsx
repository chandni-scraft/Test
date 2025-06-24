
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const MainWorkshopSection = () => {
  return (
    <Card className="border-2 border-blue-200 bg-blue-50/30 mb-8 md:mb-12">
      <CardHeader className="text-center px-4 md:px-6">
        <CardTitle className="text-2xl md:text-3xl lg:text-4xl font-inter">
          The Surgical Skills & Medical School Prep Workshop
        </CardTitle>
        <CardDescription className="text-base md:text-lg mt-2 md:mt-4 px-2">
          SurgeAhead's signature workshop is a powerful experience designed to inspire, educate, and prepare aspiring doctors like never before.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 md:px-6">
        <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 text-center leading-relaxed">
          Led by UK trained doctors, this immersive session combines real surgical training with essential medical school preparation — giving students a rare opportunity to both practice like a medic and think like one.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Workshop Details */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-foreground">What the Workshop Includes</h3>
            
            <div className="space-y-4 md:space-y-6">
              <div>
                <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-foreground flex items-start">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Surgical Skills — Theory & Hands-On Practice</span>
                </h4>
                <p className="text-sm md:text-base text-muted-foreground mb-2 md:mb-3 leading-relaxed">
                  Students begin with an engaging introduction to basic surgical principles, followed by guided, practical sessions using real surgical instruments and clinical-grade models.
                </p>
                <ul className="text-xs md:text-sm text-muted-foreground space-y-1 ml-6">
                  <li>• Safe handling of surgical tools</li>
                  <li>• Performing incisions</li>
                  <li>• Suturing techniques</li>
                  <li>• Wound care and closure</li>
                  <li>• Operating room etiquette & team communication</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-foreground flex items-start">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Medical School Application Insights</span>
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  We break down the UCAS medical application process step by step, offering insider tips on what top schools are really looking for — and how to stand out.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-foreground flex items-start">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>MMI & Interview Preparation</span>
                </h4>
                <p className="text-sm md:text-base text-muted-foreground mb-2 md:mb-3 leading-relaxed">
                  We run a focused seminar on how to master Multiple Mini Interviews (MMIs) and traditional panels. Students will learn:
                </p>
                <ul className="text-xs md:text-sm text-muted-foreground space-y-1 ml-6">
                  <li>• How to tackle ethical scenarios</li>
                  <li>• Effective communication strategies</li>
                  <li>• Common pitfalls and how to avoid them</li>
                  <li>• Doctor-led tips and golden rules for every station</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-foreground flex items-start">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Real-Life Scenarios from the NHS</span>
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Students will explore thought-provoking real-world cases — giving them a realistic glimpse into the daily life, pressures, and values of a doctor.
                </p>
              </div>
            </div>
          </div>

          {/* Why It Matters */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-foreground">Why It Matters</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              This isn't just a lecture or a Q&A — it's an active, energising workshop that gives students a practical advantage and helps boost:
            </p>
            
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div className="flex items-start">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base text-muted-foreground">Confidence in applying to medical school</span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base text-muted-foreground">Motivation to pursue a career in medicine</span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base text-muted-foreground">Early clinical awareness and teamwork</span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base text-muted-foreground">Skills they can reference in interviews and personal statements</span>
              </div>
            </div>

            <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
              <p className="font-semibold text-blue-900 mb-2 text-sm md:text-base">Workshop Outcome</p>
              <p className="text-blue-800 text-sm md:text-base leading-relaxed">
                By the end of the day, students walk away with not only practical surgical skills, but also a deepened understanding of what it means to be a doctor — and how to get there.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MainWorkshopSection;

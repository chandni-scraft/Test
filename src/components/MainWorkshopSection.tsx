
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Timer, MessageCircle, Scissors, HeartPulse } from "lucide-react";

const MainWorkshopSection = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-5xl mx-auto px-2 md:px-6">
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
            <p className="text-base md:text-lg text-muted-foreground mb-8 text-center leading-relaxed">
              Led by UK trained doctors, this immersive session combines real surgical training with essential medical school preparation — giving students a rare opportunity to both practice like a medic and think like one.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Left column: UCAT, MMI */}
              <div className="space-y-6">
                {/* UCAT Workshop */}
                <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-5 flex flex-col gap-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Timer className="h-6 w-6 text-blue-600" />
                    <h3 className="text-lg md:text-xl font-bold text-foreground">UCAT Workshop</h3>
                  </div>
                  <ul className="text-sm md:text-base text-muted-foreground space-y-1 ml-2 list-disc">
                    <li><span className="font-semibold text-blue-900">7 Golden strategies</span> to boost your score and manage time under pressure</li>
                    <li>Real UCAT-style questions with <span className="font-semibold text-blue-900">expert-led walkthroughs</span></li>
                    <li>Section by section breakdown so you know exactly how to tackle each part</li>
                    <li>High impact exam techniques not taught in school - designed by those who aced the exam</li>
                    <li>Score-building practice with live coaching, instant feedback and personal tips</li>
                  </ul>
                </div>
                {/* MMI & Interview Preparation */}
                <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-5 flex flex-col gap-2">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                    <h3 className="text-lg md:text-xl font-bold text-foreground">MMI & Interview Preparation</h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground mb-1 leading-relaxed">
                    Focused seminar on how to master Multiple Mini Interviews (MMIs) and traditional panels. Students will learn:
                  </p>
                  <ul className="text-xs md:text-sm text-muted-foreground space-y-1 ml-2 list-disc">
                    <li>How to tackle ethical scenarios</li>
                    <li>Effective communication strategies</li>
                    <li>Common pitfalls and how to avoid them</li>
                    <li>Doctor-led tips and golden rules for every station</li>
                  </ul>
                </div>
              </div>
              {/* Right column: Surgical Skills, Real-life Scenarios */}
              <div className="space-y-6 flex flex-col h-full justify-center">
                {/* Surgical Skills */}
                <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-5 flex flex-col gap-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Scissors className="h-6 w-6 text-purple-600" />
                    <h3 className="text-lg md:text-xl font-bold text-foreground">Surgical Skills — Theory & Hands-On Practice</h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground mb-1 leading-relaxed">
                    Engaging introduction to basic surgical principles, followed by guided, practical sessions using real surgical instruments and clinical-grade models.
                  </p>
                  <ul className="text-xs md:text-sm text-muted-foreground space-y-1 ml-2 list-disc">
                    <li>Safe handling of surgical tools</li>
                    <li>Performing incisions</li>
                    <li>Suturing techniques</li>
                    <li>Wound care and closure</li>
                    <li>Operating room etiquette & team communication</li>
                  </ul>
                </div>
                {/* Real-life Scenarios */}
                <div className="bg-white rounded-xl border border-blue-100 shadow-md p-6 flex flex-col items-center h-full">
                  <HeartPulse className="h-10 w-10 text-pink-600 mb-3" />
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Real-life Simulated Patient Scenarios</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-center">
                    Students will explore thought-provoking real-life cases — giving them a realistic glimpse into the daily life, pressures, and values of a doctor.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MainWorkshopSection;

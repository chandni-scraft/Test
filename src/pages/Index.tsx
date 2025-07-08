import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Calendar, FileText, Star, CheckCircle, Award, Target, TrendingUp, BookOpen, Stethoscope, GraduationCap } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
  const [mainButtonText, setMainButtonText] = useState("RESERVE YOUR SPOT");
  const [mobileButtonText, setMobileButtonText] = useState("Reserve Your Spot");

  const handleMainButtonClick = (e) => {
    setMainButtonText("BOOK YOUR PLACE");
  };

  const handleMobileButtonClick = (e) => {
    setMobileButtonText("Book Your Place");
  };

  return <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0e4576] via-[#0d3d68] to-[#0c355a] text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/lovable-uploads/6fc83a91-489c-498e-befc-e5158e48a9d3.png" alt="Medical students in surgical training" className="w-full h-full object-cover opacity-100" />
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-flex items-center backdrop-blur-sm border border-[#0e4576]/40 rounded-full px-6 py-2" style={{
            backgroundColor: '#0e457699'
          }}>
              <Award className="h-6 w-6 mr-2 md:h-4 md:w-4" />
              <span className="text-sm font-medium">UK Trained Doctors • London Medical School Graduates</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white" style={{
            textShadow: '0 0 20px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 0, 0, 0.8), 0 4px 20px rgba(0, 0, 0, 0.7), 0 8px 40px rgba(0, 0, 0, 0.6)'
          }}>
              LEADING THE WAY IN SURGICAL SKILLS FOR ASPIRING DOCTORS
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-50 leading-relaxed max-w-3xl mx-auto drop-shadow-xl shadow-black/60">UCAT workshop <span className="text-2xl md:text-3xl text-white">•</span> MMI Masterclass <span className="text-2xl md:text-3xl text-white">•</span> Surgical Skills Session <span className="text-2xl md:text-3xl text-white">•</span> Real life patient simulation</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
              <Link to="https://zcal.co/i/vIQpDhvL" className="w-full sm:w-auto text-center" onClick={handleMainButtonClick}>
                <Button size="lg" className="w-full sm:w-auto border-2 border-white px-12 py-6 text-xl font-semibold shadow-xl bg-[#0e4576] text-slate-50">
                  {mainButtonText}
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/about" className="w-full sm:w-auto text-center">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-white px-12 py-6 text-xl font-semibold shadow-lg bg-secondary-500 hover:bg-secondary-400 text-white">
                  LEARN MORE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Impact in Numbers</h2>
            <p className="text-xl text-muted-foreground">Proven results that speak for themselves</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group hover:scale-105">
                <CardContent className="p-8">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <Users className="h-8 w-8 text-blue-600 mx-auto" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 mb-2 font-inter">250+</div>
                  <div className="text-muted-foreground font-medium">Students Trained</div>
                  <div className="text-sm text-muted-foreground mt-2">Across the UK</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group hover:scale-105">
                <CardContent className="p-8">
                  <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <TrendingUp className="h-8 w-8 text-green-600 mx-auto" />
                  </div>
                  <div className="text-4xl font-bold text-green-600 mb-2 font-inter">95%</div>
                  <div className="text-muted-foreground font-medium">Success Rate</div>
                  <div className="text-sm text-muted-foreground mt-2">Medical School Offers</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group hover:scale-105">
                <CardContent className="p-8">
                  <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                    <Stethoscope className="h-8 w-8 text-purple-600 mx-auto" />
                  </div>
                  <div className="text-4xl font-bold text-purple-600 mb-2 font-inter">10+</div>
                  <div className="text-muted-foreground font-medium">UK Trained Doctors &</div>
                  <div className="text-sm text-muted-foreground mt-2">UK Medical Students</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group hover:scale-105">
                <CardContent className="p-8">
                  <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                    <Star className="h-8 w-8 text-yellow-500 mx-auto" />
                  </div>
                  <div className="text-4xl font-bold text-yellow-500 mb-2 font-inter">100%</div>
                  <div className="text-muted-foreground font-medium">Student Satisfaction</div>
                  <div className="text-sm text-muted-foreground mt-2">Based on feedback</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Additional visual element */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-white/60 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-3 shadow-lg">
              <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-900 font-medium">Trusted by aspiring doctors nationwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">About SurgeAhead</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Our mission is to empower aspiring medics with the knowledge, skills, and confidence they need to succeed. From mastering the medical school application process to experiencing hands-on surgical skills rarely taught at this stage, we offer students more than just advice — we give them a real taste of the profession they aspire to join.
                </p>
                <p>
                  What makes us different? We've lived it. We've navigated the UCAS forms, survived the MMIs, written the personal statements, and walked the wards. Now, we're bringing that experience directly to the students who need it most.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link to="/about">
                    <Button className="text-white bg-[#0e4576]">
                      Learn More About Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/lovable-uploads/383cf874-c28a-4e68-ae83-86526c3aaea0.png" alt="Medical professional in surgical attire" className="rounded-lg shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg border">
                <div className="flex items-center gap-3">
                  <Target className="h-8 w-8 text-[#0e4576]" />
                  <div>
                    <div className="font-semibold text-foreground">Expert Led</div>
                    <div className="text-sm text-muted-foreground">UK Trained Doctors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Enhanced Images */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Flagship Course</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <div className="bg-white/90 rounded-2xl shadow-xl border border-blue-100 p-8 md:p-12 relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  <span className="bg-[#0e4576] text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg flex items-center"><Award className="h-4 w-4 mr-2" /> Flagship Experience</span>
                </div>
                <div className="mb-8 mt-6 text-center">
                  <p className="text-lg md:text-xl text-muted-foreground">A unique, all-in-one experience to prepare you for medical school success.</p>
                </div>
                <div className="mb-8 flex justify-center">
                  <img src="/lovable-uploads/232d5ebc-7c25-485d-bb16-e7cbbad0d7b4.png" alt="Students learning surgical skills with instructor" className="rounded-lg shadow-lg max-h-64 w-auto object-cover" />
                </div>
                <ul className="space-y-6 text-left text-lg md:text-xl">
                  <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" /><span><span className="font-bold">UCAT Workshop</span> – Strategic UCAT preparation designed to secure your medical school interview</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" /><span><span className="font-bold">MMI Masterclass</span> – Simulate the real thing, build confidence, structure answers, and stand out on interview day</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" /><span><span className="font-bold">Surgical Skills session</span> – A hands-on workshop to build real surgical skills and get ahead.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" /><span><span className="font-bold">Real life simulated patient scenarios</span> – Learn to think and act like a doctor to make yourself stand out.</span></li>
                </ul>
                <div className="mt-10 text-center">
                  <Link to="/workshops">
                    <Button size="lg" className="bg-[#0e4576] hover:bg-[#0d3d68] text-white font-semibold px-8 py-4 text-lg shadow-lg rounded-full">Register Now <ArrowRight className="ml-2 h-5 w-5" /></Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Reviews Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What Our Students Say</h2>
            <p className="text-xl text-muted-foreground">Real reviews from aspiring doctors</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-muted-foreground mb-4">&quot;The surgical skills workshop was incredible! Learning to suture from actual UK trained doctors gave me so much confidence and the MMI interview course was a game-changer for my medical school interviews. I got into my first choice!&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">ES</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Emily S.</div>
                    <div className="text-sm text-muted-foreground">Year 13</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-muted-foreground mb-4">&quot;The personal statement support was incredible. They  helped me completely restructure my statement and it made all the difference. Highly recommend!&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">AR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Arun R.</div>
                    <div className="text-sm text-muted-foreground">Year 12</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Amazing experience! The MMI preparation was spot on - they covered scenarios I actually encountered in my interviews. The doctors really know what they're talking about."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">SL</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Sarah L.</div>
                    <div className="text-sm text-muted-foreground">Year 13</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0e4576] to-[#0d3d68] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/lovable-uploads/8730982d-08c2-4df8-8f3f-9235c837f4a2.png" alt="Group of medical students in surgical training" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Medical Journey?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Limited places available — secure your spot today and take the first real step toward your future in medicine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/workshops">
              <Button size="lg" className="bg-white text-[#0e4576] hover:bg-blue-50 font-semibold px-8 py-4 text-lg shadow-lg">
                Register for a Workshop
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="px-8 py-4 font-semibold text-[#104475] text-[#104475] bg-slate-50">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />

      {/* Mobile-only floating button */}
      <div className="md:hidden fixed bottom-4 left-0 right-0 z-50">
        <div className="flex justify-center">
          <a href="https://zcal.co/i/vIQpDhvL" className="inline-block" onClick={handleMobileButtonClick}>
            <Button size="sm" className="bg-gradient-to-r from-[#0e4576] to-[#0d3d68] hover:from-[#0d3d68] hover:to-[#0c355a] text-white font-medium py-2 px-4 text-sm shadow-lg rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105">
              {mobileButtonText}
              <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </a>
        </div>
      </div>
    </div>;
};
export default Index;


import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Target } from "lucide-react";

const MMIInfoSection = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6" style={{ color: '#104475' }} />,
      title: "Time-Pressured Scenarios",
      description: "Each station lasts 6-8 minutes with complex ethical and practical challenges"
    },
    {
      icon: <Users className="w-6 h-6" style={{ color: '#104475' }} />,
      title: "Multiple Assessors",
      description: "Different examiners at each station evaluate your communication and reasoning"
    },
    {
      icon: <Target className="w-6 h-6" style={{ color: '#104475' }} />,
      title: "Diverse Station Types",
      description: "Role-play, ethical dilemmas, data interpretation, and teamwork exercises"
    },
    {
      icon: <CheckCircle className="w-6 h-6" style={{ color: '#104475' }} />,
      title: "Structured Assessment",
      description: "Standardized evaluation criteria across all UK medical schools"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-inter">
              What is the Multiple Mini Interview (MMI)?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The MMI is a structured interview format used by most UK medical schools to assess your 
              communication skills, ethical reasoning, and professional attitudes through multiple short stations.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 rounded-lg" style={{ backgroundColor: 'rgba(16, 68, 117, 0.1)' }}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 font-inter">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why MMI Matters */}
          <div className="rounded-xl p-8 md:p-12" style={{ background: 'linear-gradient(to right, rgba(16, 68, 117, 0.1), rgba(16, 68, 117, 0.15))' }}>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-4 font-inter" style={{ color: '#104475' }}>
                Why MMI Performance Matters
              </h3>
              <p className="text-lg max-w-4xl mx-auto leading-relaxed mb-6" style={{ color: '#0a3b5f' }}>
                Medical schools use MMI to identify candidates who can communicate effectively with patients, 
                handle ethical dilemmas, work in teams, and demonstrate the professional qualities essential 
                for a career in medicine.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: '#104475' }}>60%</div>
                  <p className="text-sm font-medium" style={{ color: '#0a3b5f' }}>of interview score typically from MMI</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: '#104475' }}>8-12</div>
                  <p className="text-sm font-medium" style={{ color: '#0a3b5f' }}>stations in a typical MMI circuit</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: '#104475' }}>90%</div>
                  <p className="text-sm font-medium" style={{ color: '#0a3b5f' }}>of UK medical schools use MMI format</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MMIInfoSection;

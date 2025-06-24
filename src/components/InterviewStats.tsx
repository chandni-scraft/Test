
const InterviewStats = () => {
  const stats = [
    { number: "500+", label: "Students In SurgeAhead" },
    { number: "92%", label: "Acceptance Rate In Top Med School" },
    { number: "1", label: "Day Of Expert Training" }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-inter">
            90% of our students secure medical school offers
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-110 transition-all duration-500 transform animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 font-inter transition-all duration-300 group-hover:text-blue-700" style={{ color: '#104475' }}>
                {stat.number}
              </div>
              <div className="text-lg md:text-xl text-muted-foreground font-medium transition-colors duration-300 group-hover:text-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterviewStats;

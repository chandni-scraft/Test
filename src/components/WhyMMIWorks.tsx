
const WhyMMIWorks = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-blue-50 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-inter animate-fade-in hover:scale-105 transition-transform duration-300">
              Why Our MMI Training Works?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in hover:text-foreground transition-colors duration-300" style={{ animationDelay: '200ms' }}>
              Our proven methodology combines real interview scenarios, expert feedback, and structured practice to give you the confidence and skills needed to excel in your medical school interviews.
            </p>
          </div>
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <img 
              src="/lovable-uploads/ee9c43bf-bc00-4b0c-9e56-46557a27aad0.png" 
              alt="Medical students in training discussing scenarios" 
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMMIWorks;

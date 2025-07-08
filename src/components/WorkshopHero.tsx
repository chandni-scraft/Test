
const WorkshopHero = () => {
  return (
    <section className="py-12 md:py-20 text-white relative overflow-hidden" style={{ background: '#104475' }}>
      {/* Decorative SVGs for medicine theme */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Top left stethoscope icon */}
        <svg className="absolute top-6 left-8 w-16 h-16 opacity-30" fill="none" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" stroke="#fff" strokeWidth="4" /><path d="M32 44c6 0 10-4 10-10V18" stroke="#fff" strokeWidth="3" strokeLinecap="round" /><circle cx="32" cy="44" r="4" fill="#fff" /></svg>
        {/* Bottom right caduceus icon (abstract) */}
        <svg className="absolute bottom-6 right-8 w-20 h-20 opacity-20" fill="none" viewBox="0 0 80 80"><ellipse cx="40" cy="40" rx="36" ry="18" stroke="#fff" strokeWidth="3" /><path d="M40 22v36M28 40h24" stroke="#fff" strokeWidth="3" strokeLinecap="round" /></svg>
        {/* Center faint cross */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10" fill="none" viewBox="0 0 128 128"><rect x="56" y="16" width="16" height="96" rx="8" fill="#fff"/><rect x="16" y="56" width="96" height="16" rx="8" fill="#fff"/></svg>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-inter tracking-tight leading-tight drop-shadow-lg">
          Our Flagship Course
        </h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto font-inter font-medium leading-relaxed px-2 drop-shadow">
          Bringing together skills, strategy and real world experience to help you ace your medical school application
        </p>
      </div>
    </section>
  );
};

export default WorkshopHero;

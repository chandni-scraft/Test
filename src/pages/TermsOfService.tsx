import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Terms of Service - SurgeAhead Medical Training"
        description="Read SurgeAhead's terms of service for our medical school interview training and surgical skills workshops. Understand your rights and responsibilities."
        url="https://surgeahead.com/terms-of-service"
      />
      <Navigation />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            <strong>Last updated:</strong> January 1, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using SurgeAhead's services, you accept and agree to be bound by the 
              terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
            <p className="mb-4">
              SurgeAhead provides medical school interview preparation services, including workshops, 
              one-on-one coaching, and educational resources designed to help students prepare for 
              medical school admissions interviews.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p className="mb-4">As a user of our services, you agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate and complete information when registering</li>
              <li>Attend scheduled sessions promptly and prepared</li>
              <li>Respect other participants and instructors</li>
              <li>Not share proprietary materials without permission</li>
              <li>Pay all fees associated with your chosen services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Payment and Cancellation</h2>
            <p className="mb-4">
              Payment is required at the time of booking. Cancellation and refund policies are 
              outlined in our separate Refund Policy document.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              All content, materials, and resources provided by SurgeAhead are protected by 
              intellectual property laws and remain the property of SurgeAhead.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="mb-4">
              SurgeAhead provides educational services to assist with interview preparation. 
              We cannot guarantee admission to medical school or specific interview outcomes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms of Service, contact us at:
            </p>
            <p className="mb-4">
              Email: legal@surgeahead.com<br />
              Phone: +1 (555) 123-4567
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;

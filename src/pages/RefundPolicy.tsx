import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Refund Policy - SurgeAhead Medical Training"
        description="Learn about SurgeAhead's refund policy for medical school interview training workshops and coaching sessions. Understand our cancellation terms and conditions."
        url="https://surgeahead.com/refund-policy"
      />
      <Navigation />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Refund Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            <strong>Last updated:</strong> January 1, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Workshop Cancellations</h2>
            <p className="mb-4">
              We understand that circumstances may change. Our refund policy for workshops is as follows:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>7+ days before workshop:</strong> Full refund (100%)</li>
              <li><strong>3-6 days before workshop:</strong> Partial refund (50%)</li>
              <li><strong>Less than 3 days:</strong> No refund, but credit toward future workshop</li>
              <li><strong>Same day cancellation:</strong> No refund or credit</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. One-on-One Coaching Sessions</h2>
            <p className="mb-4">For individual coaching sessions:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>24+ hours notice:</strong> Full refund or rescheduling available</li>
              <li><strong>Less than 24 hours:</strong> Session fee forfeited</li>
              <li><strong>Emergency situations:</strong> Reviewed case-by-case</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Package Deals</h2>
            <p className="mb-4">
              For interview preparation packages, refunds are prorated based on the number of 
              sessions completed. A minimum cancellation fee of $50 applies to all package cancellations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Refund Process</h2>
            <p className="mb-4">
              To request a refund:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li>Contact us at refunds@surgeahead.com</li>
              <li>Include your booking confirmation number</li>
              <li>Provide reason for cancellation</li>
              <li>Allow 5-10 business days for processing</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Special Circumstances</h2>
            <p className="mb-4">
              We may consider full refunds in cases of:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Medical emergencies (with documentation)</li>
              <li>Military deployment</li>
              <li>SurgeAhead cancellation of services</li>
              <li>Technical issues preventing service delivery</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
            <p className="mb-4">
              For refund requests or questions about this policy:
            </p>
            <p className="mb-4">
              Email: refunds@surgeahead.com<br />
              Phone: +1 (555) 123-4567<br />
              Response time: Within 24 hours
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContactFAQ = () => {
  const faqs = [
    {
      question: "How quickly will you respond to my inquiry?",
      answer: "We aim to respond to all inquiries within 24 hours during business days. For urgent questions about upcoming workshops or interviews, we often respond much faster."
    },
    {
      question: "What's the best way to contact you?",
      answer: "Email (surgeahead.org@gmail.com) is usually the fastest way to reach us. For complex questions about packages or scheduling, you can also call us at +44 7983250539 during business hours."
    },
    {
      question: "Do you offer consultations before booking?",
      answer: "Yes! We're happy to discuss your goals and recommend the best package for your needs. Contact us to schedule a brief consultation call with one of our team members."
    },
    {
      question: "Can you help me choose between workshop and interview packages?",
      answer: "Absolutely. Our team can assess your current stage in the application process and recommend whether you'd benefit more from hands-on workshop experience or focused interview preparation."
    },
    {
      question: "What information should I include when contacting you?",
      answer: "Please include your year of study, target medical schools, any specific concerns or goals, and your preferred dates for workshops or interview preparation. This helps us provide more tailored advice."
    },
    {
      question: "Do you offer support outside of workshops and interview prep?",
      answer: "Yes, we provide personal statement reviews, application guidance, and general mentoring for aspiring medical students. Contact us to discuss your specific needs."
    },
    {
      question: "Are there group discounts available?",
      answer: "No, we do not offer any discounts at this time. All our pricing is fixed to ensure we can maintain the highest quality of instruction and small group sizes."
    },
    {
      question: "What are your business hours?",
      answer: "Our team is available Monday to Friday, 9:00 AM to 6:00 PM GMT. We check emails regularly and respond to urgent inquiries on weekends when possible."
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-inter">
              Contact & Support FAQs
            </h2>
            <p className="text-lg text-muted-foreground">
              Questions about getting in touch and our support services
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;

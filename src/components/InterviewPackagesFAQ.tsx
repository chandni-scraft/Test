
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const InterviewPackagesFAQ = () => {
  const faqs = [
    {
      question: "What's the difference between the Foundation, Intermediate, and Platinum packages?",
      answer: "Foundation (4hrs) covers core MMI preparation and structured practice. Intermediate (7hrs) adds advanced strategies and personalized feedback. Platinum (10hrs) provides complete MMI mastery with intensive one-on-one coaching and unlimited practice sessions."
    },
    {
      question: "Are the interview sessions conducted by real doctors?",
      answer: "Yes, all our interview preparation sessions are led by qualified NHS doctors who have extensive experience with medical school admissions and understand exactly what interview panels are looking for."
    },
    {
      question: "What types of MMI stations will I practice?",
      answer: "You'll practice ethical scenarios, communication tasks, role-playing exercises, data interpretation, teamwork challenges, and NHS-based case studies. We cover all major MMI station types used by UK medical schools."
    },
    {
      question: "Can I book multiple sessions or upgrade my package?",
      answer: "Absolutely! You can book additional sessions anytime or upgrade to a higher package. Many students start with Foundation and upgrade as their interview dates approach."
    },
    {
      question: "How far in advance should I book my interview preparation?",
      answer: "We recommend booking 4-6 weeks before your interview dates to allow time for practice and improvement. However, we can accommodate last-minute bookings based on availability."
    },
    {
      question: "Do you provide feedback and improvement strategies?",
      answer: "Yes, all packages include detailed feedback after each practice session. You'll receive specific guidance on areas for improvement, communication techniques, and strategies tailored to your target medical schools."
    },
    {
      question: "Will you help me prepare for specific medical schools?",
      answer: "We tailor our preparation to match the interview format and style of your target medical schools. Whether it's Oxford, Cambridge, Imperial, or any other UK medical school, we adapt our approach accordingly."
    },
    {
      question: "What if I'm not satisfied with my preparation?",
      answer: "We're confident in our approach, but if you're not satisfied, we offer additional support sessions. Our goal is to ensure you feel fully prepared and confident for your interviews."
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-inter">
              Interview Preparation FAQs
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our MMI and interview packages
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

export default InterviewPackagesFAQ;

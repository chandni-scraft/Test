import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WorkshopFAQ = () => {
  const faqs = [
    {
      question: "What is included in the Surgical Skills Workshop?",
      answer: "The workshop includes hands-on surgical training with real instruments, suturing practice, medical school application guidance, MMI preparation, and real-world NHS case studies. You'll practice incisions, wound care, operating room etiquette, and team communication skills."
    },
    {
      question: "Who leads the workshops?",
      answer: "All workshops are led by doctors who are currently working in the NHS UK. Our instructors have extensive experience in medical education and understand what medical schools are looking for in applicants."
    },
    {
      question: "Do I need any prior medical experience?",
      answer: "No prior medical experience is required. The workshop is designed for aspiring medical students at any level. We start with basic principles and gradually build up your skills throughout the day."
    },
    {
      question: "What should I bring to the workshop?",
      answer: "We provide all surgical instruments, models, and materials. Just bring yourself, comfortable clothing, and enthusiasm to learn."
    },
    {
      question: "How many people attend each workshop?",
      answer: "We keep our groups small with a maximum of 12-15 students per workshop to ensure quality one-on-one instruction and personalized feedback from our doctors."
    },
    {
      question: "Will this help with my medical school application?",
      answer: "Absolutely! The workshop provides practical experience you can reference in your personal statement and interviews. You'll gain insights into medical practice and develop skills that demonstrate your commitment to medicine."
    },
    {
      question: "How long is the workshop?",
      answer: "The workshop runs for a full day, typically 6-7 hours including breaks and lunch. This gives us sufficient time to cover all aspects thoroughly while allowing for hands-on practice."
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer: "We understand plans can change. Please contact us as soon as possible if you need to reschedule. We offer flexible rescheduling options and will work with you to find an alternative date."
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-inter">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our surgical skills workshop
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

export default WorkshopFAQ;

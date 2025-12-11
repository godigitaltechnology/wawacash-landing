import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQSectionProps {
  faqs: { question: string; answer: string; category: string }[];
  showTitle?: boolean;
}

const FAQSection = ({ faqs, showTitle = true }: FAQSectionProps) => {
  return (
    <div className="w-full">
      {showTitle && (
        <h2 className="text-4xl font-extrabold text-blue-900 mb-12 text-center">FAQs</h2>
      )}
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="bg-blue-50 mb-4 rounded-xl border-none"> {/* Updated styling */}
            <AccordionTrigger className="px-6 py-4 text-lg font-medium text-blue-900 hover:no-underline text-left"> {/* Updated text color */}
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700 text-left"> {/* Adjusted text color */}
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
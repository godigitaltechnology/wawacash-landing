import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Qu'est-ce que Wawa Cash ?",
      answer: "Wawa Cash est une plateforme de transfert d'argent rapide, sécurisée et fiable, vous permettant d'envoyer de l'argent à vos proches partout dans le monde en quelques clics."
    },
    {
      question: "Qu'est-ce que Wawa Send ?",
      answer: "Wawa Send est notre service dédié aux envois d'argent internationaux, garantissant que vos fonds arrivent à destination rapidement et en toute sécurité."
    },
    {
      question: "Quels pays sont desservis par Wawa Cash ?",
      answer: "Wawa Cash dessert un large éventail de pays à travers le monde. Vous pouvez consulter la liste complète des pays disponibles sur notre page de services."
    },
    {
      question: "Comment créer un compte Wawa Cash ?",
      answer: "Pour créer un compte Wawa Cash, téléchargez notre application mobile depuis le Play Store ou l'App Store, puis suivez les étapes d'inscription simples et rapides."
    },
    {
      question: "Quels documents sont nécessaires pour ouvrir un compte ?",
      answer: "Pour ouvrir un compte, vous aurez généralement besoin d'une pièce d'identité valide (carte d'identité, passeport) et d'une preuve de résidence. Les exigences peuvent varier selon votre pays."
    },
    {
      question: "Puis-je envoyer de l'argent sans compte bancaire ?",
      answer: "Oui, Wawa Cash offre des options pour envoyer de l'argent même si vous n'avez pas de compte bancaire, via nos partenaires de paiement locaux."
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-12">FAQs</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white mb-4 rounded-lg shadow-sm border-none">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-gray-800 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 text-left">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <a href="#" className="text-blue-600 hover:underline mt-8 inline-block">Voir toute la liste →</a>
      </div>
    </section>
  );
};

export default FAQSection;
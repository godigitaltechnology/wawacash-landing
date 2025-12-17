import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import CallToAction from '@/components/CallToAction';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { useTranslation } from 'react-i18next';

const rawSampleFaqs = [
  {
    questionKey: "faq_q1",
    answerKey: "faq_a1",
    categoryKey: "general"
  },
  {
    questionKey: "faq_q2",
    answerKey: "faq_a2",
    categoryKey: "wawa_send"
  },
  {
    questionKey: "faq_q3",
    answerKey: "faq_a3",
    categoryKey: "general"
  },
  {
    questionKey: "faq_q4",
    answerKey: "faq_a4",
    categoryKey: "compte"
  },
  {
    questionKey: "faq_q5",
    answerKey: "faq_a5",
    categoryKey: "compte"
  },
  {
    questionKey: "faq_q6",
    answerKey: "faq_a6",
    categoryKey: "wawa_send"
  },
];

const Index = () => {
  const { t } = useTranslation();

  const translatedSampleFaqs = rawSampleFaqs.map(faq => ({
    question: t(faq.questionKey),
    answer: t(faq.answerKey),
    category: t(faq.categoryKey)
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <WhyChooseUs />
        <CallToAction />
        <section className="bg-white py-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FAQSection faqs={translatedSampleFaqs} showTitle={true} />
            <Link to="/faqs" className="inline-flex items-center text-blue-600 hover:underline font-medium mt-8 space-x-2">
              <span>{t("voir_toute_liste")}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;
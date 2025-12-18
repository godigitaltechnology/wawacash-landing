"use client";

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import FAQSection from '@/components/FAQSection';
import FAQCategories from '@/components/FAQCategories';
import { Phone, MapPin, Mail, Facebook, Linkedin, Instagram, Music, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const rawFaqs = [
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
  {
    questionKey: "faq_q7",
    answerKey: "faq_a7",
    categoryKey: "tarifs_faq"
  },
  {
    questionKey: "faq_q8",
    answerKey: "faq_a8",
    categoryKey: "securite"
  },
  {
    questionKey: "faq_q9",
    answerKey: "faq_a9",
    categoryKey: "assistance"
  },
];

const FAQs = () => {
  const { t, i18n } = useTranslation();
  const categoryKeys = ["tous", "general", "wawa_send", "securite", "compte", "tarifs_faq", "assistance"];
  
  const [activeCategory, setActiveCategory] = useState(t("tous"));
  const [searchTerm, setSearchTerm] = useState("");

  // Update activeCategory when language changes
  useEffect(() => {
    setActiveCategory(t("tous"));
  }, [i18n.language, t]);

  const translatedCategories = categoryKeys.map(key => t(key));

  const filteredAndTranslatedFaqs = rawFaqs
    .filter(faq => {
      const translatedCategory = t(faq.categoryKey);
      const matchesCategory = activeCategory === t("tous") || translatedCategory === activeCategory;
      return matchesCategory;
    })
    .map(faq => ({
      question: t(faq.questionKey),
      answer: t(faq.answerKey),
      category: t(faq.categoryKey)
    }))
    .filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section for FAQs Page */}
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-8 overflow-hidden pt-32">
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-6">
              {t("faqs_hero_title")}
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              {t("faqs_hero_description")}
            </p>
            <div className="relative max-w-lg mx-auto">
              <Input
                type="text"
                placeholder={t("rechercher_question")}
                className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-blue-200 focus:border-blue-500 focus-visible:ring-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </section>

        {/* FAQ Content Section */}
        <section className="bg-white py-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FAQCategories
              categories={translatedCategories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            <FAQSection faqs={filteredAndTranslatedFaqs} showTitle={false} />
          </div>
        </section>

        {/* Suivez Wawa Cash Section */}
        <section className="bg-white py-20 px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-6">{t("suivez_wawacash_title")}</h2>
            <p className="text-lg text-gray-700 mb-10">
              {t("suivez_wawacash_description")}
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
                <Facebook className="h-8 w-8" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
                <Linkedin className="h-8 w-8" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
                <Music className="h-8 w-8" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
                <Instagram className="h-8 w-8" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default FAQs;
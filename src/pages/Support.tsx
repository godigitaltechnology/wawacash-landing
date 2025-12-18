"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Facebook, Linkedin, Instagram, Music, ChevronRight } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next'; // Importez Trans ici

const Support = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section for Support Page */}
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-8 overflow-hidden pt-32">
          {/* Background pattern - using placeholder for now */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(/placeholder.svg)', backgroundSize: 'cover', backgroundRepeat: 'repeat' }}></div>
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-6">
              {t("support")}
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              <Trans
                i18nKey="support_hero_description"
                components={{ faqsLink: <Link to="/faqs" className="text-blue-600 hover:underline font-medium">{t("faqs_page_link")}</Link> }}
              />
            </p>

            {/* Quick FAQ Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
              <Button variant="outline" className="flex justify-between items-center bg-purple-50 hover:bg-purple-100 text-purple-800 px-6 py-3 rounded-xl text-lg h-auto">
                <span>{t("qu_est_ce_que_wawa_send")}</span>
                <ChevronRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" className="flex justify-between items-center bg-red-50 hover:bg-red-100 text-red-800 px-6 py-3 rounded-xl text-lg h-auto">
                <span>{t("aide_envoyer_argent")}</span>
                <ChevronRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" className="flex justify-between items-center bg-blue-50 hover:bg-blue-100 text-blue-800 px-6 py-3 rounded-xl text-lg h-auto">
                <span>{t("frais_transfert")}</span>
                <ChevronRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" className="flex justify-between items-center bg-green-50 hover:bg-green-100 text-green-800 px-6 py-3 rounded-xl text-lg h-auto">
                <span>{t("creer_compte_wawacash")}</span>
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            <Link to="/faqs" className="text-blue-600 hover:underline font-medium flex items-center justify-center space-x-2">
              <span>{t("voir_faqs")}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-gray-50 py-20 px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">{t("questions_form_title")}</h2>
            <h3 className="text-4xl font-extrabold text-blue-900 mb-12">{t("remplissez_form_subtitle")}</h3>
            <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md mx-auto">
              <form className="space-y-6 text-left">
                <div>
                  <Label htmlFor="name" className="text-gray-900 font-semibold text-base mb-2 block">{t("nom")}</Label>
                  <Input id="name" placeholder={t("nom")} className="bg-blue-50 border-blue-200 focus:border-blue-500 focus-visible:ring-0 h-12 px-4 text-base" />
                </div>
                <div>
                  <Label htmlFor="firstname" className="text-gray-900 font-semibold text-base mb-2 block">{t("prenom")}</Label>
                  <Input id="firstname" placeholder={t("prenom")} className="bg-blue-50 border-blue-200 focus:border-blue-500 focus-visible:ring-0 h-12 px-4 text-base" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-900 font-semibold text-base mb-2 block">{t("message")}</Label>
                  <Textarea id="message" placeholder={t("message")} rows={5} className="bg-blue-50 border-blue-200 focus:border-blue-500 focus-visible:ring-0 p-4 text-base" />
                </div>
                <p className="text-xs text-gray-500 text-left leading-relaxed">
                  {t("form_consent", {
                    privacyLink: <Link to="/privacy" className="text-blue-600 hover:underline">{t("politique_confidentialite")}</Link>,
                    termsLink: <Link to="/cgu" className="text-blue-600 hover:underline">{t("conditions")}</Link>
                  })}
                </p>
                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold">
                  {t("envoyez")}
                </Button>
              </form>
            </div>
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

export default Support;
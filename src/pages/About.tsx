"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import CallToAction from '@/components/CallToAction';
import { Lock, FileText, Clock, Phone, MapPin, Mail, Facebook, Linkedin, Instagram, Music } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Reusable FeatureCard for the "Une entreprise agréée" section
const AboutFeatureCard = ({ icon: Icon, title, description, iconBgColor, iconTextColor }: { icon: React.ElementType, title: string, description: string, iconBgColor: string, iconTextColor: string }) => (
  <div className="flex items-start space-x-4 p-4">
    <div className={`p-3 rounded-full ${iconBgColor} ${iconTextColor}`}>
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <h3 className="font-semibold text-lg text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  </div>
);

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-[#F5F9FF] via-[#D0E3FF] to-[#F5F9FF] from-blue-50 to-white py-20 px-8 overflow-hidden pt-32">
          <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-6">
                {t("a_propos_wawacash_title")}
              </h1>
              <p className="text-lg text-gray-700 mb-4 max-w-lg mx-auto md:mx-0">
                {t("a_propos_wawacash_p1", { mission: t("a_propos_wawacash_mission") })}
              </p>
              <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
                {t("a_propos_wawacash_p2")}
              </p>
              <Link to="#" className="text-blue-600 hover:underline font-medium flex items-center justify-center md:justify-start space-x-2">
                <span>{t("telecharger_application")}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="flex justify-center md:justify-end">
              <img src="/about_home.png" alt={t("about_home_alt")} className="w-full max-w-md rounded-3xl shadow-lg" />
            </div>
          </div>
        </section>

        {/* Une entreprise agréée, gage de confiance */}
        <section className="relative bg-white py-20 px-8 overflow-hidden">
          {/* Background pattern of blue arrows */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url(/placeholder.svg)', backgroundSize: '100px', backgroundRepeat: 'repeat' }}>
            {/* Remplacez /placeholder.svg par votre image de motif de flèches réelle */}
          </div>
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-6">
              {t("entreprise_agreee_title")}
            </h2>
            <p className="text-lg text-gray-700 mb-16 max-w-2xl mx-auto">
              {t("entreprise_agreee_description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <AboutFeatureCard
                icon={Lock}
                title={t("securite_maximale_title")}
                description={t("securite_maximale_description")}
                iconBgColor="bg-purple-50"
                iconTextColor="text-purple-800"
              />
              <AboutFeatureCard
                icon={FileText}
                title={t("conformite_garantie_title")}
                description={t("conformite_garantie_description")}
                iconBgColor="bg-orange-50"
                iconTextColor="text-orange-800"
              />
              <AboutFeatureCard
                icon={Clock}
                title={t("suivi_temps_reel_title")}
                description={t("suivi_temps_reel_description")}
                iconBgColor="bg-green-50"
                iconTextColor="text-green-800"
              />
            </div>
          </div>
        </section>

        {/* Notre vision : rapprocher les communautés */}
        <section className="bg-gray-50 py-20 px-8">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-extrabold text-blue-900 leading-tight mb-6">
                {t("notre_vision_title")}
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto">
                {t("notre_vision_description")}
              </p>
              <Link to="#" className="text-blue-600 hover:underline font-medium flex items-center justify-center space-x-2">
                <span>{t("telecharger_application")}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="relative w-full h-[30rem] rounded-xl mt-12 flex items-center justify-center">
                <img
                  src="/about_happy.png"
                  alt={t("about_happy_alt")}
                  className="w-full h-full object-contain"
                />
              </div>
          </div>
        </section>

        {/* Call To Action Section - Reusing existing component */}
        <CallToAction />

        {/* Contactez-nous Section */}
        <section className="relative bg-white from-blue-50 to-white py-20 px-8 overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-extrabold text-blue-900 mb-6">{t("contactez_nous_title")}</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
                {t("contactez_nous_description")}
              </p>
              <div className="space-y-6 text-gray-700">
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <Phone className="h-6 w-6 text-blue-700" />
                  <span>{t("contact_phone")}</span>
                </div>
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <MapPin className="h-6 w-6 text-blue-700" />
                  <span>{t("contact_address")}</span>
                </div>
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <Mail className="h-6 w-6 text-blue-700" />
                  <span>{t("contact_email")}</span>
                </div>
              </div>
              <div className="mt-10 text-center md:text-left">
                <h3 className="font-semibold text-xl text-blue-900 mb-4">{t("centre_aide_title")}</h3>
                <p className="text-gray-700 mb-4">
                  {t("centre_aide_description")}
                </p>
                <Link to="/faqs" className="text-blue-600 hover:underline font-medium flex items-center justify-center md:justify-start space-x-2">
                  <span>{t("allez_faqs")}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">{t("remplissez_formulaire_title")}</h3>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">{t("nom")}</Label>
                  <Input id="name" placeholder={t("nom")} />
                </div>
                <div>
                  <Label htmlFor="firstname">{t("prenom")}</Label>
                  <Input id="firstname" placeholder={t("prenom")} />
                </div>
                <div>
                  <Label htmlFor="message">{t("message")}</Label>
                  <Textarea id="message" placeholder={t("message")} rows={5} />
                </div>
                <p className="text-xs text-gray-500">
                  {t("form_consent", {
                    privacyLink: <Link to="/privacy" className="text-blue-600 hover:underline">{t("politique_confidentialite")}</Link>,
                    termsLink: <Link to="/cgu" className="text-blue-600 hover:underline">{t("conditions")}</Link>
                  })}
                </p>
                <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white">
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

export default About;
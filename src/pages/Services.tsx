import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Button } from '@/components/ui/button';
import PhoneMockup from '@/components/PhoneMockup';
import { Play, Apple } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section for Services Page */}
        <section className="relative bg-gradient-to-b from-[#F5F9FF] via-[#D0E3FF] to-[#F5F9FF] from-blue-50 to-white py-20 px-8 overflow-hidden pt-32">
          <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <p className="text-blue-700 font-semibold mb-2">{t("services_hero_tagline")}</p>
              <h1 className="text-5xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-6">
                {t("services_hero_title")}
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
                {t("services_hero_description")}
              </p>
              <Link to="#" className="text-blue-600 hover:underline font-medium flex items-center justify-center md:justify-start space-x-2">
                <span>{t("telecharger_application")}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="flex justify-center md:justify-end">
              <img src="/home_services.png" alt="Woman looking at phone" className="w-full max-w-md rounded-3xl shadow-lg" />
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="relative bg-white py-20 px-8 overflow-hidden">
          {/* Background pattern of flying birds - using placeholder for now */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(/placeholder.svg)', backgroundSize: 'cover', backgroundRepeat: 'repeat' }}></div>
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-6">
              {t("services_overview_title")}
            </h2>
            <p className="text-lg text-gray-700 mb-16 max-w-2xl mx-auto">
              {t("services_overview_description")}
            </p>

            {/* Transfert d'argent */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 text-left">

              <div className="flex justify-center">
                <img
                  src="/services_1.png"
                  alt="Wawacash Services Screenshot"
                  className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">{t("transfert_argent_title")}</h3>
                <p className="text-gray-700 mb-4">
                  {t("transfert_argent_p1")}
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>{t("transfert_argent_li1")}</li>
                  <li>{t("transfert_argent_li2")}</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  {t("transfert_argent_p2")}
                </p>
                <Link to="#" className="text-blue-600 hover:underline font-medium flex items-center space-x-2">
                  <span>{t("telecharger_application")}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Réception d'argent */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 text-left">
              <div className="flex justify-center md:order-2">
                <img src="/services_2.png" alt="Wawacash Services Screenshot" className="w-full max-w-md rounded-3xl shadow-lg" />
              </div>
              <div className="md:order-1">
                <h3 className="text-3xl font-bold text-blue-900 mb-4">{t("reception_argent_title")}</h3>
                <p className="text-gray-700 mb-4">
                  {t("reception_argent_p1")}
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>{t("reception_argent_li1")}</li>
                  <li>{t("reception_argent_li2")}</li>
                  <li>{t("reception_argent_li3")}</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  {t("reception_argent_p2")}
                </p>
                <Link to="#" className="text-blue-600 hover:underline font-medium flex items-center space-x-2">
                  <span>{t("telecharger_application")}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Épargne d'argent */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 text-left">
              <div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">{t("epargne_argent_title")}</h3>
                <p className="text-gray-700 mb-4">
                  {t("epargne_argent_p1")}
                </p>
                <p className="text-gray-700 mb-6">
                  {t("epargne_argent_p2")}
                </p>
                <Link to="#" className="text-blue-600 hover:underline font-medium flex items-center space-x-2">
                  <span>{t("telecharger_application")}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
              <div className="flex justify-center">
                <img src="/services_3.png" alt="Wawacash Services Screenshot" className="w-full max-w-md rounded-3xl shadow-lg" />
              </div>
            </div>

            {/* Gestion de portefeuille */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 text-left">
              <div className="md:order-1">
                <h3 className="text-3xl font-bold text-blue-900 mb-4">{t("gestion_portefeuille_title")}</h3>
                <p className="text-gray-700 mb-4">
                  {t("gestion_portefeuille_p1")}
                </p>
                <p className="text-gray-700 mb-6">
                  {t("gestion_portefeuille_p2")}
                </p>
                <Link to="#" className="text-blue-600 hover:underline font-medium flex items-center space-x-2">
                  <span>{t("telecharger_application")}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
              <div className="flex justify-center">
                <img
                  src="/services_4.png"
                  alt="Wawacash Services Screenshot"
                  className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
                />
              </div>
            </div>

            {/* Un réseau qui relie la diaspora à l'Afrique */}
            <div className="text-center mb-20 py-20">
              <h3 className="text-4xl font-extrabold text-blue-900 mb-6">
                {t("reseau_diaspora_title")}
              </h3>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                {t("reseau_diaspora_p1")}
              </p>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                {t("reseau_diaspora_p2")}
              </p>
              <Link to="#" className="text-blue-600 hover:underline font-medium flex items-center justify-center space-x-2">
                <span>{t("telecharger_application")}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
              <div className="relative w-full h-[32rem] rounded-xl mt-12 flex items-center justify-center">
                <img
                  src="/services_groupe.png"
                  alt="Wawacash Services Screenshot"
                  className="w-full h-full object-contain"
                />
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Services;
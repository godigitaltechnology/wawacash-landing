import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const Tarifs = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-8 overflow-hidden pt-32 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-6">
              {t("tarifs_page_title")}
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              {t("tarifs_page_description")}
            </p>
            <Button asChild className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-lg text-lg font-semibold">
              <Link to="/support">{t("contacter_support")}</Link>
            </Button>
          </div>
        </section>

        {/* Placeholder for detailed pricing information */}
        <section className="bg-white py-20 px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-12">
              {t("tarifs_details_title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{t("tarifs_standard_title")}</h3>
                <p className="text-gray-700 mb-6">{t("tarifs_standard_description")}</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  {t("voir_details")}
                </Button>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{t("tarifs_premium_title")}</h3>
                <p className="text-gray-700 mb-6">{t("tarifs_premium_description")}</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  {t("voir_details")}
                </Button>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{t("tarifs_entreprise_title")}</h3>
                <p className="text-gray-700 mb-6">{t("tarifs_entreprise_description")}</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  {t("voir_details")}
                </Button>
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

export default Tarifs;
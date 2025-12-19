import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const DataSubjectRightsForm = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-white py-20 px-8 pt-32">
        <div className="max-w-4xl mx-auto prose prose-blue text-gray-700 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-8">
            {t("data_subject_rights_form_title")}
          </h1>
          <p className="mb-8 text-lg">
            {t("mentions_legales_intro")}
          </p>
          <p className="mb-8">
            {t("page_en_construction")}
          </p>
          <Button asChild className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-lg text-lg font-semibold">
            <Link to="/mentions">{t("retour_mentions_legales")}</Link>
          </Button>
        </div>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default DataSubjectRightsForm;
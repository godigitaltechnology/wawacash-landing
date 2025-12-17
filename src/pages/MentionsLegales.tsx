import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { useTranslation } from 'react-i18next';

const MentionsLegales = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-white py-20 px-8 pt-32">
        <div className="max-w-4xl mx-auto prose prose-blue text-gray-700">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-8 text-center">
            {t("mentions_legales_title")}
          </h1>
          <p className="mb-8 text-lg">
            {t("mentions_legales_intro")}
          </p>

          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            {t("mentions_legales_editeur_title")}
          </h2>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>{t("mentions_legales_editeur_nom")}</li>
            <li>{t("mentions_legales_editeur_forme")}</li>
            <li>{t("mentions_legales_editeur_adresse")}</li>
            <li>{t("mentions_legales_editeur_capital")}</li>
            <li>{t("mentions_legales_editeur_rcs")}</li>
            <li>{t("mentions_legales_editeur_tva")}</li>
            <li>{t("mentions_legales_editeur_email")}</li>
            <li>{t("mentions_legales_editeur_tel")}</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            {t("mentions_legales_directeur_publication_title")}
          </h2>
          <p className="mb-8">
            {t("mentions_legales_directeur_publication_nom")}
          </p>

          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            {t("mentions_legales_hebergement_title")}
          </h2>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>{t("mentions_legales_hebergement_nom")}</li>
            <li>{t("mentions_legales_hebergement_adresse")}</li>
            <li>{t("mentions_legales_hebergement_site")}</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            {t("mentions_legales_propriete_intellectuelle_title")}
          </h2>
          <p className="mb-4">
            {t("mentions_legales_propriete_intellectuelle_p1")}
          </p>
          <p className="mb-8">
            {t("mentions_legales_propriete_intellectuelle_p2")}
          </p>

          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            {t("mentions_legales_donnees_personnelles_title")}
          </h2>
          <p className="mb-4">
            {t("mentions_legales_donnees_personnelles_p1")}
          </p>
          <p className="mb-8">
            {t("mentions_legales_donnees_personnelles_p2", {
              privacyPolicyLink: <Link to="/privacy" className="text-blue-600 hover:underline">{t("politique_confidentialite")}</Link>
            })}
          </p>

          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            {t("mentions_legales_cookies_title")}
          </h2>
          <p className="mb-4">
            {t("mentions_legales_cookies_p1")}
          </p>
          <p className="mb-8">
            {t("mentions_legales_cookies_p2", {
              cookiesPolicyLink: <Link to="/cookies" className="text-blue-600 hover:underline">{t("footer_charte")}</Link> // Assuming 'Charte d'utilisation responsable' can be used as a placeholder for cookies policy
            })}
          </p>

          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            {t("mentions_legales_droit_applicable_title")}
          </h2>
          <p className="mb-8">
            {t("mentions_legales_droit_applicable_p1")}
          </p>
        </div>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default MentionsLegales;
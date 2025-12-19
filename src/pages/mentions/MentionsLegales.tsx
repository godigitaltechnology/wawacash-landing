import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';

const legalDocuments = [
  { key: "legal_updates_title", to: "/legal/updates" },
  { key: "footer_cgu", to: "/cgu" }, // Conditions d'utilisation
  { key: "footer_privacy", to: "/privacy" }, // Politique de confidentialité
  { key: "data_privacy_framework_title", to: "/legal/data-privacy" },
  { key: "intellectual_property_rules_title", to: "/legal/ip-rules" },
  { key: "user_information_title", to: "/legal/user-info" },
  { key: "footer_charte", to: "/charte" }, // Charte d'utilisation responsable (can serve as cookies policy for now)
  { key: "data_subject_rights_form_title", to: "/legal/data-rights" },
  { key: "footer_kyc", to: "/kyc" }, // Politique KYC
  { key: "footer_lcbft", to: "/lcbft" }, // Politique LCBFT
  { key: "footer_security", to: "/security" }, // Politique de Sécurité des Transactions
  { key: "footer_policy", to: "/policy" }, // Politique de Rem. & Réc.
  { key: "footer_covicos", to: "/covicos" }, // COVICOS
  { key: "footer_cgv", to: "/cgv" }, // CGV/CGS
  { key: "regulatory_reports_title", to: "/legal/reports" }
];

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
          <p className="mb-8 text-lg text-center">
            {t("legal_documents_list_intro")}
          </p>

          <div className="space-y-4">
            {legalDocuments.map((doc, index) => (
              <Link
                key={index}
                to={doc.to}
                className="flex items-center justify-between p-4 bg-blue-50 rounded-lg shadow-sm hover:bg-blue-100 transition-colors text-blue-800 font-medium"
              >
                <span>{t(doc.key)}</span>
                <ChevronRight className="h-5 w-5 text-blue-600" />
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default MentionsLegales;
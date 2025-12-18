import React from 'react';
import { Lock, ThumbsUp, Star, FileText, Zap, Clock } from 'lucide-react';
import PhoneMockup from '@/components/PhoneMockup';
import { useTranslation } from 'react-i18next';

const FeatureCard = ({ icon: Icon, title, description, bgColor, textColor }: { icon: React.ElementType, title: string, description: string, bgColor: string, textColor: string }) => (
  <div className={`p-6 rounded-xl shadow-md ${bgColor} ${textColor} flex items-start space-x-4 h-full`}>
    <div className={`p-3 rounded-full ${bgColor.replace('bg-', 'bg-').replace('-50', '-200')} ${textColor.replace('text-', 'text-')} bg-opacity-50`}>
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  </div>
);

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-white py-20 px-8 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-6">{t("pourquoi_choisir_wawacash")}</h2>
        <p className="text-lg text-gray-700 mb-16 max-w-2xl mx-auto">
          {t("pourquoi_description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">
          {/* Left Column */}
          <div className="space-y-8">
            <FeatureCard
              icon={Lock}
              title={t("securite_transactions_title")}
              description={t("securite_transactions_description")}
              bgColor="bg-purple-50"
              textColor="text-purple-800"
            />
            <FeatureCard
              icon={ThumbsUp}
              title={t("facilite_utilisation_title")}
              description={t("facilite_utilisation_description")}
              bgColor="bg-blue-50"
              textColor="text-blue-800"
            />
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src="/home_why_1.png" alt="Person using phone" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-8">
            <FeatureCard
              icon={FileText}
              title={t("tarifs_transparents_title")}
              description={t("tarifs_transparents_description")}
              bgColor="bg-blue-50"
              textColor="text-blue-800"
            />
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src="/home_why_2.png" alt="Person giving thumbs up" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <FeatureCard
              icon={Star}
              title={t("fiabilite_service_title")}
              description={t("fiabilite_service_description")}
              bgColor="bg-orange-50"
              textColor="text-orange-800"
            />
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src="/home_why_3.png" alt="Person giving thumbs up" className="w-full h-auto object-cover" />
            </div>
            <FeatureCard
              icon={Zap}
              title={t("rapidite_envoi_title")}
              description={t("rapidite_envoi_description")}
              bgColor="bg-green-50"
              textColor="text-green-800"
            />
          </div>
        </div>

        {/* Bottom card - Assistance clientèle réactive, spanning full width */}
        <div className="flex flex-col items-center text-center">
          <FeatureCard
            icon={Clock}
            title={t("assistance_clientele_title")}
            description={t("assistance_clientele_description")}
            bgColor="bg-red-50"
            textColor="text-red-800"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
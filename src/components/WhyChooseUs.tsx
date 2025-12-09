import React from 'react';
import { Lock, ThumbsUp, Star, FileText, Zap, Clock } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, bgColor, textColor }: { icon: React.ElementType, title: string, description: string, bgColor: string, textColor: string }) => (
  <div className={`p-6 rounded-xl shadow-md ${bgColor} ${textColor} flex items-start space-x-4`}>
    <div className={`p-3 rounded-full ${bgColor.replace('bg-', 'bg-').replace('-100', '-200')} ${textColor.replace('text-', 'text-')} bg-opacity-50`}>
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  </div>
);

const PhoneMockupSmall = ({ children }: { children?: React.ReactNode }) => (
  <div className="relative w-48 h-[300px] bg-white rounded-[2rem] shadow-xl flex items-center justify-center p-1.5">
    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-800 rounded-b-lg"></div> {/* Notch */}
    <div className="w-full h-full bg-gray-100 rounded-[1.75rem] overflow-hidden flex flex-col">
      {children}
    </div>
  </div>
);

const WhyChooseUs = () => {
  return (
    <section className="relative bg-white py-20 px-8 overflow-hidden">
      {/* Background pattern - simplified with divs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-6">Pourquoi choisir WawaCash ?</h2>
        <p className="text-lg text-gray-700 mb-16 max-w-2xl mx-auto">
          Envoyer de l'argent d'un pays vers un autre est une opération sensible qui nécessite de recourir à une solution de transfert fiable. Wawa Cash a été pensée pour répondre à ces exigences.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={Lock}
            title="Sécurité des transactions"
            description="Vos transactions sont protégées par les dernières technologies de cryptage et de sécurité."
            bgColor="bg-purple-50"
            textColor="text-purple-800"
          />
          <FeatureCard
            icon={FileText}
            title="Tarifs transparents"
            description="La grille tarifaire est claire et disponible, vous avez une parfaite connaissance des frais d'envoi."
            bgColor="bg-blue-50"
            textColor="text-blue-800"
          />
          <FeatureCard
            icon={Star}
            title="Fiabilité du service"
            description="Un service éprouvé et fiable pour des transferts sans accroc, à chaque fois."
            bgColor="bg-orange-50"
            textColor="text-orange-800"
          />
          <FeatureCard
            icon={ThumbsUp}
            title="Facilité d'utilisation"
            description="Une interface intuitive et un processus simplifié pour envoyer de l'argent en quelques clics."
            bgColor="bg-blue-50"
            textColor="text-blue-800"
          />
          <FeatureCard
            icon={Zap}
            title="Rapidité d'envoi"
            description="Les transferts sont traités en temps réel ou dans des délais très courts. Plus de longs délais d'attente, vos proches reçoivent l'argent en un temps record."
            bgColor="bg-green-50"
            textColor="text-green-800"
          />
          <FeatureCard
            icon={Clock}
            title="Assistance clientèle réactive"
            description="Notre équipe est disponible pour vous aider à chaque étape de votre transfert."
            bgColor="bg-red-50"
            textColor="text-red-800"
          />
        </div>

        <div className="flex justify-center space-x-12 mt-16">
          <PhoneMockupSmall>
            <div className="flex items-center justify-between p-2 text-xs text-gray-800">
              <span>9:41</span>
              <div className="flex items-center space-x-0.5">
                <span className="w-3 h-1.5 bg-gray-400 rounded-sm"></span>
                <span className="w-3 h-1.5 bg-gray-400 rounded-sm"></span>
                <span className="w-3 h-1.5 bg-gray-400 rounded-sm"></span>
                <span className="w-3 h-1.5 bg-gray-400 rounded-sm"></span>
                <span className="font-bold">LTE</span>
                <span className="w-3 h-1.5 bg-gray-400 rounded-sm"></span>
              </div>
            </div>
            <div className="flex-grow p-3">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <span className="text-sm font-medium">Paula Maelle</span>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="text-xs text-gray-600 mb-1">Montant du transfert</p>
                <p className="text-lg font-bold text-gray-800">100,00 EUR</p>
                <p className="text-xs text-gray-600 mt-2 mb-1">Frais de service</p>
                <p className="text-lg font-bold text-gray-800">3,00 EUR</p>
                <div className="border-t border-gray-200 my-3"></div>
                <p className="text-xs text-gray-600 mb-1">Total</p>
                <p className="text-xl font-bold text-blue-700">103,00 EUR</p>
              </div>
            </div>
          </PhoneMockupSmall>
          <PhoneMockupSmall>
            <div className="flex items-center justify-between p-2 text-xs text-gray-800">
              <span>9:41</span>
              <div className="flex items-center space-x-0.5">
                <span className="w-3 h-1.5 bg-gray-400 rounded-sm"></span>
                <span className="w-3 h-1.5 bg-gray-400 rounded-sm"></span>
                <span className="w-3 h-1.5 bg-gray-400 rounded-sm"></span>
                <span className="w-3 h-1.5 bg-gray-400 rounded-sm"></span>
                <span className="font-bold">LTE</span>
                <span className="w-3 h-1.5 bg-gray-400 rounded-sm"></span>
              </div>
            </div>
            <div className="flex-grow p-3 flex items-center justify-center">
              <div className="w-24 h-24 bg-orange-200 rounded-full flex items-center justify-center">
                <span className="text-5xl">👍</span>
              </div>
            </div>
          </PhoneMockupSmall>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
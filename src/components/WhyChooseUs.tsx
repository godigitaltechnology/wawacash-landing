import React from 'react';
import { Lock, ThumbsUp, Star, FileText, Zap, Clock } from 'lucide-react';
import PhoneMockup from '@/components/PhoneMockup'; // Import the new PhoneMockup component

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
  return (
    <section className="relative bg-white py-20 px-8 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-6">Pourquoi choisir WawaCash ?</h2>
        <p className="text-lg text-gray-700 mb-16 max-w-2xl mx-auto">
          Envoyer de l'argent d'un pays vers un autre est une opération sensible qui nécessite de recourir à une solution de transfert fiable. Wawa Cash a été pensée pour répondre à ces exigences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">
          {/* Left Column */}
          <div className="space-y-8">
            <FeatureCard
              icon={Lock}
              title="Sécurité des transactions"
              description="Vos transactions sont protégées par les dernières technologies de cryptage et de sécurité."
              bgColor="bg-purple-50"
              textColor="text-purple-800"
            />
            <FeatureCard
              icon={ThumbsUp}
              title="Facilité d'utilisation"
              description="Une interface intuitive et un processus simplifié pour envoyer de l'argent en quelques clics."
              bgColor="bg-blue-50"
              textColor="text-blue-800"
            />
            {/* Image of person with phone */}
            <div className="rounded-xl overflow-hidden shadow-md">
              {/* Replace with your actual image: /public/images/person-with-phone.jpg */}
              <img src="/public/placeholder.svg" alt="Person using phone" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-8">
            <FeatureCard
              icon={FileText}
              title="Tarifs transparents"
              description="La grille tarifaire est claire et disponible avant chaque envoi. Vous avez une parfaite connaissance des frais d'envoi, du montant envoyé et celui reçu par vos proches."
              bgColor="bg-blue-50"
              textColor="text-blue-800"
            />
            <PhoneMockup size="small">
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
            </PhoneMockup>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <FeatureCard
              icon={Star}
              title="Fiabilité du service"
              description="Un service éprouvé et fiable pour des transferts sans accroc, à chaque fois."
              bgColor="bg-orange-50"
              textColor="text-orange-800"
            />
            {/* Image of person giving thumbs up */}
            <div className="rounded-xl overflow-hidden shadow-md">
              {/* Replace with your actual image: /public/images/person-thumbs-up.jpg */}
              <img src="/public/placeholder.svg" alt="Person giving thumbs up" className="w-full h-auto object-cover" />
            </div>
            <FeatureCard
              icon={Zap}
              title="Rapidité d'envoi"
              description="Les transferts sont traités en temps réel ou dans des délais très courts. Plus de longs délais d'attente, vos proches reçoivent l'argent en un temps record."
              bgColor="bg-green-50"
              textColor="text-green-800"
            />
          </div>
        </div>

        {/* Bottom card - Assistance clientèle réactive, spanning full width */}
        <div className="max-w-6xl mx-auto mt-8">
          <FeatureCard
            icon={Clock}
            title="Assistance clientèle réactive"
            description="Notre équipe est disponible pour vous aider à chaque étape de votre transfert."
            bgColor="bg-red-50"
            textColor="text-red-800"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
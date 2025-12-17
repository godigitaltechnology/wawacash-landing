import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Play, Apple, Globe, Euro } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-b from-[#F5F9FF] via-[#D0E3FF] to-[#F5F9FF] from-blue-50 to-white py-20 px-8 overflow-hidden">
      {/* Background pattern - simplified with divs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center pt-20">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-6">
            {t("hero_title")}
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
            {t("hero_description")}
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mb-12">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/play_store_light.png" alt="Download on Play Store" className="h-12" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/app_store_light.png" alt="Download on Apple Store" className="h-12" />
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto md:mx-0">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="send-amount" className="block text-sm font-medium text-gray-700 mb-1">{t("vous_envoyez")}</label>
                <div className="flex items-center border rounded-md overflow-hidden">
                  <Input id="send-amount" type="number" defaultValue="100.00" className="border-none focus-visible:ring-0" />
                  <Select defaultValue="EUR">
                    <SelectTrigger className="w-[100px] border-none focus:ring-0">
                      <SelectValue placeholder="Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="EUR">EUR</SelectItem>
                      <SelectItem value="USD">USD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label htmlFor="receive-amount" className="block text-sm font-medium text-gray-700 mb-1">{t("il_recoit")}</label>
                <div className="flex items-center border rounded-md overflow-hidden">
                  <Input id="receive-amount" type="number" defaultValue="60.000" className="border-none focus-visible:ring-0" />
                  <Select defaultValue="XOF">
                    <SelectTrigger className="w-[100px] border-none focus:ring-0">
                      <SelectValue placeholder="Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="XOF">XOF</SelectItem>
                      <SelectItem value="CAD">CAD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500">{t("taux_quotidien")}</p>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end self-end">
          <img
            src="/frame_background.png"
            alt="Wawa Cash App Screenshot"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
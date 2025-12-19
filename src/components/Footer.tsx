import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Facebook, Linkedin, Instagram, Play, Apple, Music } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-footer-background text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top section: Logo, Social, and Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo and Social Icons */}
          <div className="col-span-1 md:col-span-3 flex flex-col items-start">
            <Link to="/" className="flex items-center mb-6">
              <img src="/logo_light.png" alt="WawaCash Logo" className="h-10" />
            </Link>
          </div>

          {/* Wawacash Links */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-semibold text-lg mb-4">{t("footer_wawacash_title")}</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/about" className="hover:text-white">{t("footer_about")}</Link></li>
              <li><Link to="/services" className="hover:text-white">{t("footer_services")}</Link></li>
              <li><Link to="/tariffs" className="hover:text-white">{t("footer_tarifs")}</Link></li>
            </ul>
          </div>

          {/* Assistance & Ressources Links */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-semibold text-lg mb-4">{t("footer_assistance_title")}</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/support" className="hover:text-white">{t("footer_support")}</Link></li>
              <li><Link to="/faqs" className="hover:text-white">{t("footer_faqs")}</Link></li>
              <li><Link to="/policy" className="hover:text-white">{t("footer_policy")}</Link></li>
            </ul>
          </div>

          {/* Confidentialité & Sécurité Links */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="font-semibold text-lg mb-4">{t("footer_confidentialite_title")}</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/privacy" className="hover:text-white">{t("footer_privacy")}</Link></li>
              <li><Link to="/kyc" className="hover:text-white">{t("footer_kyc")}</Link></li>
              <li><Link to="/lcbft" className="hover:text-white">{t("footer_lcbft")}</Link></li>
              <li><Link to="/security" className="hover:text-white">{t("footer_security")}</Link></li>
            </ul>
          </div>

          {/* Informations légales Links */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-semibold text-lg mb-4">{t("footer_informations_legales_title")}</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/mentions" className="hover:text-white">{t("footer_mentions")}</Link></li>
              <li><Link to="/cgu" className="hover:text-white">{t("footer_cgu")}</Link></li>
              <li><Link to="/covicos" className="hover:text-white">{t("footer_covicos")}</Link></li>
              <li><Link to="/cgv" className="hover:text-white">{t("footer_cgv")}</Link></li>
              <li><Link to="/charte" className="hover:text-white">{t("footer_charte")}</Link></li>
            </ul>
          </div>
        </div>


        <div className="flex justify-between items-center w-full">
          {/* Réseaux sociaux à gauche */}
          <div className="flex space-x-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <Music className="h-6 w-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <Instagram className="h-6 w-6" />
            </a>
          </div>

          {/* Stores à droite */}
          <div className="flex space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/play_store_black.png" alt="Download on Play Store" className="h-12" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/app_store_black.png" alt="Download on Apple Store" className="h-12" />
            </a>
          </div>
        </div>


        {/* Bottom section: Disclaimer, Copyright, and App Store Buttons */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center md:items-end space-y-8 md:space-y-0">
          <div className="text-sm text-gray-400 text-center md:text-left">
            <p className="mb-4">
              {t("footer_disclaimer")}
            </p>
            <p>{t("footer_copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
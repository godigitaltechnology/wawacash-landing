import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Facebook, Linkedin, Instagram, Play, Apple, Music } from 'lucide-react'; // Added Music icon

const Footer = () => {
  return (
    <footer className="bg-footer-background text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top section: Logo, Social, and Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo and Social Icons */}
          <div className="col-span-1 md:col-span-3 flex flex-col items-start">
            <Link to="/" className="flex items-center space-x-1 mb-6">
              <span className="text-3xl font-bold text-white">WAWA</span>
              <div className="w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[25px] border-l-white"></div>
              <span className="text-3xl font-bold text-white">cash</span>
            </Link>
            <div className="flex space-x-6">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Music className="h-6 w-6" /> {/* Using Music icon for TikTok */}
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Wawa Cash Links */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Wawa Cash</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/about" className="hover:text-white">À propos</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/tariffs" className="hover:text-white">Tarifs</Link></li>
            </ul>
          </div>

          {/* Assistance & Ressources Links */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Assistance & Ressources</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/support" className="hover:text-white">Support</Link></li>
              <li><Link to="/faqs" className="hover:text-white">FAQs</Link></li>
              <li><Link to="/policy" className="hover:text-white">Politique de Rem. & Réc.</Link></li>
            </ul>
          </div>

          {/* Confidentialité & Sécurité Links */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="font-semibold text-lg mb-4">Confidentialité & Sécurité</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/privacy" className="hover:text-white">Politique de Confidentialité & RGPD</Link></li>
              <li><Link to="/kyc" className="hover:text-white">Politique KYC</Link></li>
              <li><Link to="/lcbft" className="hover:text-white">Politique LCBFT</Link></li>
              <li><Link to="/security" className="hover:text-white">Politique de Sécurité des Transactions</Link></li>
            </ul>
          </div>

          {/* Informations légales Links */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Informations légales</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/mentions" className="hover:text-white">Mentions légales</Link></li>
              <li><Link to="/cgu" className="hover:text-white">CGU</Link></li>
              <li><Link to="/covicos" className="hover:text-white">COVICOS</Link> {/* Added COVICOS */}</li>
              <li><Link to="/cgv" className="hover:text-white">CGV/CGS</Link></li> {/* Kept CGV/CGS */}
              <li><Link to="/charte" className="hover:text-white">Charte d'utilisation responsable</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom section: Disclaimer, Copyright, and App Store Buttons */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center md:items-end space-y-8 md:space-y-0">
          <div className="text-sm text-gray-400 text-center md:text-left max-w-2xl">
            <p className="mb-4">
              Ce service t'est proposé par WawaCash, ses différentes entités telles que WawaCash Canada, société enregistrée au Canada sous le numéro d'enregistrement XXXXXXXX, ainsi que ses différents partenaires. Pour plus d'informations, tu peux consulter les conditions générales d'accès à WawaCash et notre politique sur les données personnelles.
            </p>
            <p>© 2025 WawaCash</p>
          </div>
          <div className="flex space-x-4">
            <Button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm flex flex-col items-center justify-center h-auto">
              <span className="text-xs text-gray-300 mb-1">TÉLÉCHARGER SUR</span>
              <div className="flex items-center space-x-2">
                <Play className="h-5 w-5" />
                <span className="font-semibold text-base">Play Store</span>
              </div>
            </Button>
            <Button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm flex flex-col items-center justify-center h-auto">
              <span className="text-xs text-gray-300 mb-1">TÉLÉCHARGER SUR</span>
              <div className="flex items-center space-x-2">
                <Apple className="h-5 w-5" />
                <span className="font-semibold text-base">App Store</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;